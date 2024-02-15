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

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

export const Todo = mongoose.model("todo", todoSchema);
export const User = mongoose.model("user", userSchema);
