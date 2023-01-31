import { prisma } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message?: string;
  user?: object;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const data = req.body;
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
      res.status(403).send({ error: "Error while creating new user" });
      return error;
    }
  } else {
    res.status(405).send({ message: "HTTP request method not allowed" });
  }
}
