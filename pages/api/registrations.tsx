import { prisma } from "../../db";
import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";

type ResponseData = {
  message?: string;
  user?: object;
  error?: string;
};

const requestData = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().allow(""),
  title: Joi.string().allow(""),
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
        title: title,
      });
      const newUser = await prisma.user.create({
        data: {
          ...value,
        },
      });
      res
        .status(201)
        .json({ user: newUser, message: "User successfully created" });
      console.log("NEW USER --->", newUser);
    } catch (error) {
      console.log(error);
      res.status(403).send({ message: "Error while creating new user" });
      return error;
    }
  } else {
    res.status(405).send({ message: "HTTP request method not allowed" });
  }
}
