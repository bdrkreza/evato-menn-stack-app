import mongoose from "mongoose";
const { DATABASE_URL } = process.env;
// connection function
export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL as string);
    console.log("mongodb connection established");
    mongoose.Promise = global.Promise;
  } catch (error) {
    console.log("connection error", error);
  }
};
