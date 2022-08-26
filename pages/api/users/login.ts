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
  await connectDB();
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password." });

    const getUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    // If login success , create access token and refresh token
    const accessToken = createAccessToken(getUser);
    res.json({
      success: true,
      token: accessToken,
      error: false,
    });
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
