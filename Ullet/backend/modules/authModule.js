import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

export function genToken(element) {
  // @ts-ignore
  return jwt.sign(element, privateKey);
}

export async function login(req, res) {
  try {
    const { name, password } = req.headers;
    const document = await userModel.findOne({ name });
    const access = await bcrypt.compare(password, document.password);

    if (access) {
      const token = genToken({ _id: document._id });
      return res.status(200).json({ token: token });
    } else {
      return res.sendStatus(401);
    }
  } catch (error) {
    return res.sendStatus(401);
  }
}

export async function validateToken(req, res, next) {
  try {
    const { token } = req.headers;

    const { _id } = jwt.verify(token, privateKey);

    const document = await userModel.findById(_id);

    req.userData = document;

    next();
  } catch (error) {
    res.sendStatus(401);
  }
}
