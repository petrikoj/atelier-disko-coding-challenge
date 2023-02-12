import { prisma } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { sendError } from "next/dist/server/api-utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers.authorization !== `Bearer ${process.env.API_TOKEN}`) {
    sendError(res, 401, "Unauthorized request");
  }
  if (req.headers.authorization === `Bearer ${process.env.API_TOKEN}`) {
    try {
      const users = await prisma.user.findMany({
        orderBy: { firstname: "desc" },
      });
      return res.status(200).json({ users });
    } catch (error) {
      console.log("Error while fetching all users:", error);
      return res
        .status(403)
        .json({ status: 403, message: "Error while fetching all users" });
    }
  }
};
