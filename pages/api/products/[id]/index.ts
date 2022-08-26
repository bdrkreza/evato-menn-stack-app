import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Products } from "../../../../models";
import { connectDB } from "../../../../utils/connectBD";

const handler = nc({
  onError: (err, req, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const product = await Products.findById(req.query.id);
  res.status(200).json({ success: true, product, error: false });
});

export default handler;
