import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri || "");
    console.log("MongoDB connected");
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    process.exit(1);
  }
};

export default connectDB;
