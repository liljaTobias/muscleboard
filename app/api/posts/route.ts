import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  console.log("BODY", body);
  await prisma.post.create({
    data: {
      title: body.title,
    },
  });
  res.status(200).json({ message: "Created" });
}
