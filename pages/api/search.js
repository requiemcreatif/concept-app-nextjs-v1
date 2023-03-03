import { connectToDatabase } from "@/util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("codes")
    .aggregate([
      {
        $search: {
          search: {
            query: req.query.term,
            path: ["code", "description", "title", "language"],
          },
        },
      },
      {
        $limit: 20,
      },
    ])
    .toArray();
  res.status(200).json(data);
}
