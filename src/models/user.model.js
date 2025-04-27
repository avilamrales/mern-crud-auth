import { Schema, models, model } from "mongoose";

const userSchema = Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
});

const Dataset =
  typeof models.User !== "undefined" ? models.User : model("User", userSchema);

export default Dataset;
