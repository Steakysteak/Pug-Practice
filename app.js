const express = require("express");

const app = express();

app.use("/add-product",(req, res, next) => {
  console.log("In the Add Product Route");
  res.send("<h1>The 'Add Product'</h1>")
});

app.use("/",(req, res, next) => {
  console.log("In the middleeware 2222222");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
