const { Router } = require("express");

const prodRoutes = require("./product");

const router = Router();

router.use("/prod", prodRoutes);

module.exports = router;
