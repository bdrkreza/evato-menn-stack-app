import jwt from "jsonwebtoken";

export const createAccessToken = (user: any) => {
  if (process.env.ACCESS_TOKEN_SECRET !== undefined) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
  }
};
