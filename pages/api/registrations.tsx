import { prisma } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";
import { Prisma } from "@prisma/client";

type ResponseData = {
  message?: string;
  user?: object;
  error?: string;
};

const requestData = Joi.object({
  firstname: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z-' ]+$"))
    .min(1)
    .max(36),
  lastname: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z-' ]+$"))
    .min(1)
    .max(36),
  email: Joi.string().email().required().max(36),
  message: Joi.string().allow("").max(100),
  title: Joi.string().allow("")
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const { firstname, lastname, email, message, title } = req.body;
      const value = await requestData.validateAsync({
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
        title: title
      });
      const newUser = await prisma.user.create({
        data: {
          ...value
        }
      });
      return res
        .status(201)
        .json({ user: newUser, message: "User successfully created" });
    } catch (error) {
      console.log(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return res
            .status(409)
            .send({
              message:
                "Email already exists in database. Please try a different one."
            });
        }
      }
      return res.status(403).send({ message: "Error while creating new user" });
    }
  } else {
    return res.status(405).send({ message: "HTTP request method not allowed" });
  }
}
