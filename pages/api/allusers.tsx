import { prisma } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ users });
    console.log("ALL USERS --->", users);
  } catch (error) {
    console.log(error);
    res.status(403).json({ error: "Error while fetching all users" });
  }
};
