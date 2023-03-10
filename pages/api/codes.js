import { connectToDatabase } from "@/util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const data = await db.collection("codes").find({}).limit(20).toArray();
  res.status(200).json(data);
  //.limt() can be used to limit the number of data returned
}
