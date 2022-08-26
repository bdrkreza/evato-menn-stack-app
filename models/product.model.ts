import mongoose from "mongoose";

const productSchema = new mongoose.Schema({});

const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);
export default Products;
