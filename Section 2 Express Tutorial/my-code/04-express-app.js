const express = require("express");
const path = require("path");
const app = express();

// Any folder can be added but general practise is to create a separate public folder
// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not Found");
});

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});
