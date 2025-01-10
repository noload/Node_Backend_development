const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("database connection established::");
    })
    .catch((err) => {
      console.log("DB collection failed Error:", err);
    });
};


module.exports = {connectDB}