import mongoose, { Mongoose } from "mongoose";
import { DB_URL } from "../config/serverConfig.js";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model("user", userSchema);
