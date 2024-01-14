const express = require("express");
const app = express();

const students = require("./students");
const product = require("./products");
const employees = require("./employees");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//product api's
app.get("/products", (req, res) => {
  res.send(product);
});

app.get("/product/:id", (req, res) => {
  const productId = req.params.id;

  product.map((p) => {
    if (p.product_id == productId) {
      res.send(p);
    }
  });

  res.send("Product not found with productId" + productId);
});

//student api's

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

//employees's api endpoint

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.post("/employee", (req, res) => {
  let newEmployee = req.body;
  console.log(newEmployee);
  employees.push(newEmployee);
  res
    .status(201)
    .json({ msg: "successfully added the new employee", data: employees });
});

//getting employee based on empId
app.get("/employee/:empId", (req, res) => {
  const empId = req.params.empId;

  employees.map((emp) => {
    if (emp.empId == empId) {
      res.status(201).json({
        succeess: true,
        data: emp,
        msg: "Data fetched successfully",
      });
    }
  });
  res.status(404).json({
    success: false,
    data: {},
    msg: "Employee not found",
  });
});

app.put("/employee/:empId", (req, res) => {
  const { empId } = req.params;
  const updatedData = req.body;
  console.log(typeof empId);
  const index = employees.findIndex((emp) => emp.empId === empId);
  if (index > -1) {
    employees[index] = { ...employees[index], ...updatedData };
    res.status(200).json({
      msg: "employee data Updated successfully",
      succeess: true,
      employees: employees,
    });
  }
  res.status(200).json({
    msg: "employee data Not Updated ",
    employees: [],
    succeess: false,
    err: "Employee not found",
  });
});




app.listen(3000, () => {
  console.log("server started on port 3000");
});
