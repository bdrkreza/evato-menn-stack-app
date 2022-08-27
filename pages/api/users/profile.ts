import { NextApiResponse } from "next";
import nc from "next-connect";
import { Users } from "../../../models";
import { isAuth } from "../../../utils/authMiddle";
import { connectDB } from "../../../utils/connectBD";

const handler = nc();
handler.use(isAuth);

handler.get(async (req: any, res: NextApiResponse) => {
  await connectDB();
  const user = await Users.findById({ _id: req.user._id }).select("-password");
  res.send(user);
});

export default handler;
