const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./serverConfig");
const apiRouter = require("./routes/index");
//connnecting to db
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
