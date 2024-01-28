const mongoose = require("mongoose");
const { DB_URL } = require("./serverConfig");

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connection established");
  })
  .catch((error) => {
    console.log("The eroor is ", error);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = {
  Product,
};
