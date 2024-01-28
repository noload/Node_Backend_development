const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
//middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRoute);
app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("Listening on port");
});
