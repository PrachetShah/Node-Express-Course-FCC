// Express Apps are nothing but bunch of Middleware stuffs stuffed together
const express = require("express");
const app = express();

// req => middleware => res
const logger = require("./logger");
const authorize = require("./authorize");

//using logger in every function If i keep it after app.get('/') i will not see in / route
app.use([authorize, logger]);
// app.use('/api', logger); This will applly to all routes with /api as a base

// referencing the function
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});
