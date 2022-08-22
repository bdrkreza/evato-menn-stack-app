const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    checked: {
      type: Boolean,
      default: false,
    },
    manufacturer: {
      type: String,
    },
    brand: {
      type: String,
    },
    collection: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
    },
    price: {
      type: String,
    },
    regular_price: {
      type: String,
    },
    slug: {
      type: String,
    },
    categories: {
      type: String,
    },
    keywords: {
      type: String,
    },
    images: [],
    protection_plans: [],
    attributes: [],
    specifications: [],
  },
  {
    timestamps: true, //important
  }
);

const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);
export default Products;
