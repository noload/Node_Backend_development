const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (filePath) => {
  try {
    const { public_id, url } = await cloudinary.uploader.upload(filePath);
    return { public_id, url };
  } catch (error) {
    console.log("error while uploading file", error);
    throw new Error("Cloudinary Image Upload Error");
  }
};

module.exports = { uploadToCloudinary };
