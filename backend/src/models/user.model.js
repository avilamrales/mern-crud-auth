import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Dataset =
  typeof models.User !== "undefined" ? models.User : model("User", userSchema);

export default Dataset;
