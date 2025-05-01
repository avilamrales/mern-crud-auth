import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const taskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Dataset =
  typeof models.Task !== "undefined" ? models.Task : model("Task", taskSchema);

export default Dataset;
