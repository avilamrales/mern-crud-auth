import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("DB is connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
