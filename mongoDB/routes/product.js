const { Router } = require("express");
const { Product } = require("../db");
const router = Router();

router.post("/product", async (req, res) => {
  const product = new Product(req.body);
  const prd = await product.save();
  const productId = prd._id;
  if (prd) {
    res.status(200).json({
      productId,
      success: true,
      message: "Product created successfully",
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
      data: product,
    });
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const products = await Product.findById(req.params.id)
      .select({ _id, _v })
      .sort();

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

router.get("/getCategory/:category", async (req, res) => {
  try {
    console.log(req.params.category);
    const products = await Product.find({ category: req.params.category });

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
