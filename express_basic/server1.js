const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse JSON bodies

// Assuming you have exported the data array from groceryData.js like this:
// module.exports = groceryStoreData;
const groceryStoreData = require("./groceryData.js");

// API to get all products
app.get("/getAllProducts", (req, res) => {
  res.status(200).json(groceryStoreData);
});

// POST API to add a new product
app.post("/addProduct", (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  groceryStoreData.push(newProduct);
  res.status(201).send("Product added successfully");
});

//PUT API to update a product based on ID
app.put("/updateProduct/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  console.log();
  const productIndex = groceryStoreData.findIndex((i) => i.id === parseInt(id));

  if (productIndex != -1) {
    groceryStoreData[productIndex] = {
      ...groceryStoreData[productIndex],
      ...updatedProduct,
    };
    res.send("Product updated successfully");
  } else {
    res.status(404).send("Product not found");
  }
});

//Delete API to delete a product
app.delete('/deleteProduct/:id', (req, res) => {
    const {id} = req.params;
    const productIndex = groceryStoreData.findIndex(s => s.id === parseInt(id));
    console.log('product id:', id, productIndex)
    if (productIndex > -1) {
        groceryStoreData.splice(productIndex, 1);
        res.send('Product deleted successfully');
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
  console.log(`Grocery store API is running at http://localhost:${port}`);
});
