const {Router} = require('express');
const uploadMiddleware = require("../middleware/upload");
const { uploadImage } = require('../controller/ImageComproller');
const router = Router();

router.post("/upload",uploadMiddleware.single("image"),uploadImage)

module.exports = router