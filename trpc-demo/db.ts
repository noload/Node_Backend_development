import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://notesafe:vaibhav%40123K@cluster0.fsxrugd.mongodb.net/newDB"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  done: {
    type: String,
    default: false,
  },
});

export const Todo = mongoose.model("todo", todoSchema);
