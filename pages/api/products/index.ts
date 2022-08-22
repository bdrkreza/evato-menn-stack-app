import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Products } from "../../../models";
import { connectDB } from "./../../../utils/connectBD";

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
  try {
    await connectDB();
    const products = await Products.find({});

    res.status(200).json({ success: true, products, error: false });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message,
      data: null,
      message: "database request failed!",
    });
  }
});

export default handler;
