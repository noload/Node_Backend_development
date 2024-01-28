const { Router } = require("express");
const { Product } = require("../db");
const router = Router();

router.post("/product", async (req, res) => {
  const product = new Product({
    name: "Thums up",
    price: 35,
    category: "Soft Drink",
    stock: 100,
  });
  const prd = await product.save();
  if (prd) {
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: prd,
      err: {},
    });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    if (products) {
      res.status(200).json({
        success: true,
        message: "Fetched product data successfully",
        data: products,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "product data not fetched",
      data: {},
    });
  }
});

module.exports = router;
