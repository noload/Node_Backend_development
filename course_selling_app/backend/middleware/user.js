const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const resp = await User.findOne({
    username,
    password,
  });
  if (resp) {
    next();
  } else {
    res.status(403).json({
      msg: "User doesnt exist",
    });
  }
}

module.exports = userMiddleware;
