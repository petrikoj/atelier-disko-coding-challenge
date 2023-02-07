import { prisma } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers.authorization !== `Bearer ${process.env.API_TOKEN}`) {
    return res
      .status(401)
      .json({ status: 401, message: "Unauthorized request" });
  }
  if (req.headers.authorization === `Bearer ${process.env.API_TOKEN}`) {
    try {
      const users = await prisma.user.findMany({
        orderBy: { firstname: "desc" },
      });
      res.status(200).json({ users });
    } catch (error) {
      console.log(error);
      res
        .status(403)
        .json({ status: 403, message: "Error while fetching all users" });
    }
  }
};
