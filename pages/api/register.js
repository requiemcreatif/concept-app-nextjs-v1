import { connectToDatabase } from "@/util/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const { name, email, password, lastName } = req.body;

    // Validate input data
    if (!validator.isEmail(email)) {
      return res.status(422).json({ message: "Invalid email" });
    }
    if (!validator.isLength(password, { min: 6 })) {
      return res.status(422).json({ message: "Password must be at least 8 characters long" });
    }

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(422).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = {
      name,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
    };

    const result = await db.collection("users").insertOne(newUser);

    // Generate JWT token
    const token = jwt.sign({ userId: result.insertedId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User created successfully",
      token,
      userId: result.insertedId,
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
