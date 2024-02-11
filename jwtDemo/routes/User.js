import { Router } from "express";
import bcrypt from "bcrypt";
import { User } from "../db/index.js";
import { JWT_KEY } from "../config/serverConfig.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    let { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    password = hashPassword;
    const user = new User({
      username,
      password,
    });
    user.save();

    res.status(200).json({
      message: "user created",
      userID: user._id,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

router.post("/login", async (req, res) => {
  //comparing the userid and the password
  //validate the username, get the password
  //compare the password
  //if its true, generate the JWT token
  //and send it
  try {
    const { username, password } = req.body;
    //validate the user
    const user = await User.findOne({ username });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        //generate the JWT Token
        const jwtToken = jwt.sign({ username: username }, JWT_KEY);
        res.status(200).send(jwtToken);
      }
    } else {
      res.status(400).send("user not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/protected", (req, res) => {
  //const token = req.headers.authToken.split(" ")[1];
  const token = req.headers.authToken;
  ///we are passing the token in the header.
  //
  if (!token) {
    res.status(401).send("you are not authorized to access the API");
  } else {
    jwt.verify(token, JWT_KEY, (err, user) => {
      if (err) {
        res.status(401).send("you are not authorized to access the API");
      } else {
        res.send(user);
      }
    });
  }
});
export default router;
