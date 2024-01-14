const express = require("express");
const app = express();

const { books } = require("./libraryData");
const port = 3000;
console.log(books);
app.get("/books", (req, res) => {
  res.send(books);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
