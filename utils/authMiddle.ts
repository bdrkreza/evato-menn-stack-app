import jwt, { Secret } from "jsonwebtoken";
import { NextApiResponse } from "next";

export const createAccessToken = (user: any) => {
  if (process.env.ACCESS_TOKEN_SECRET !== undefined) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
  }
};

interface IDecode {
  _id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export const isAuth = async (req: any, res: NextApiResponse, next: any) => {
  const secret: Secret = process.env.ACCESS_TOKEN_SECRET!;
  const { authorization } = req.headers;
  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, secret, (err: any, decode: any) => {
      if (err) {
        res.status(401).send({ message: "Token is not valid" });
      } else {
        req.user = decode as IDecode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "Token is not suppiled" });
  }
};
