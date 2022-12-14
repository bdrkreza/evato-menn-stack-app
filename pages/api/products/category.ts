import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { Categories } from "../../../models";
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
    const category = await Categories.find({});

    if (category) {
      const categoryList = getCategory(category);
      res.status(200).json({ success: true, data: categoryList, error: false });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message,
      data: null,
      message: "database request failed!",
    });
  }
});

const getCategory = (categories: any, parentId: any = null) => {
  const categoryList: any[] | null = [];
  let category;
  if (parentId === null) {
    category = categories.filter((ctg: any) => ctg.parentId === undefined);
  } else {
    category = categories.filter((ctg: any) => {
      if (ctg.parentId) {
        return ctg.parentId === parentId.toString();
      }
    });
  }
  category.forEach((ctg: any) => {
    categoryList.push({
      _id: ctg._id,
      name: ctg.name,
      slug: ctg.slug,
      children: getCategory(categories, ctg._id),
    });
  });
  return categoryList;
};

export default handler;
