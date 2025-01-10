const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  publicId: { type: String, required: true },
  url: { type: String, required: true },
});


const ImageModel = mongoose.model("Image",ImageSchema)

module.exports = ImageModel;