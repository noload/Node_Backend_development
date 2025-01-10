const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + new Date() + path.extname(file.originalname)
    );
  },
});

//file filter function

const checkFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an Image| Please upload images"));
  }
};

module.exports = multer({
  storage,
  fileFilter: checkFileFilter,
  limits: 5 * 1024 * 1024,
});
