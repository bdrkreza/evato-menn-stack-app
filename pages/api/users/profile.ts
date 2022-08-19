import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Users } from "../../../models";
import { createAccessToken } from "../../../utils/authMiddle";
import { connectDB } from "../../../utils/connectBD";

const handler = nc();
// handler.use(isAuth);

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const user = await Users.findById({ _id: req.body._id });
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.password;
  await user.save();

  const token = createAccessToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;
