import { prisma } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        ...data,
      },
    });
    res
      .status(201)
      .json({ user: newUser, message: "User successfully created" });
    console.log("NEW USER --->", newUser);
  } catch (error) {
    console.log(error);
    res.status(403).json({ error: "Error while creating new user" });
    return error;
  }
};
