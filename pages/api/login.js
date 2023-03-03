import { connectToDatabase } from "@/util/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const { email, password } = req.body;

    // Validate input data
    if (!validator.isEmail(email)) {
      return res.status(422).json({ message: "Invalid email" });
    }

    // Find user with email
    const user = await db.collection("users").findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "User logged in successfully",
      token,
      userId: user._id,
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
