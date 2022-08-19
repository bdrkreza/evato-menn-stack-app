import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "merchant", "user"],
    },
    cart: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);
export default Users;
