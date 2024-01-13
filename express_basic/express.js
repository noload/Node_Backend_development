const express = require("express");
const app = express();
// const bodyparser = require("body-parser");
const students = require("./students");
const product = require("./products");
app.get("/products", (req, res) => {
  res.send(product);
});

app.use(bodyparser.json());

console.log(product);
app.get("/product/:id", (req, res) => {
  const productId = req.params.id;

  product.map((p) => {
    if (p.product_id == productId) {
      res.send(p);
    }
  });

  res.send("Product not found with productId" + productId);
});

app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/student/:rollNo", (req, res) => {
  const rollNo = req.params.rollNo;
  students.map((student) => {
    if (student.rollNo == rollNo) {
      res.send(student);
    }
  });

  res.send(`Student Not found with rollNo ${rollNo}`);
});

// Post API to add student data
app.post("/addStudent", (req, res) => {
  const data = req.body;
  console.log("user data", data);
  res.json(data);
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
