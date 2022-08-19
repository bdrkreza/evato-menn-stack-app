import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Users } from "../../../models";
import { createAccessToken } from "../../../utils/authMiddle";
import { connectDB } from "../../../utils/connectBD";

const handler = nc({
  onError: (err, req, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  connectDB();
  try {
    const { name, email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user)
      return res.status(400).json({ message: "The email already exists." });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password is at least 6 characters long." });

    // Password Encryption
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new Users({
      name,
      email,
      password: passwordHash,
    });

    // Save mongodb
    await newUser.save();

    // Then create jsonwebtoken to authentication
    const accesstoken = createAccessToken({ id: newUser._id });

    res.json({ success: true, token: accesstoken, error: false });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
      data: null,
      message: "database request failed!",
    });
  }
});

export default handler;
