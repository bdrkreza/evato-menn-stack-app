import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      require: true,
    },
    parentId: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const Categories =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Categories;
