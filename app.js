const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware 111111");
  next();
});

app.use((req, res, next) => {
  console.log("In the middleeware 2222222");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
