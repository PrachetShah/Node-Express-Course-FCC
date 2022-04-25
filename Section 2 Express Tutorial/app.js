const express = require("express");
const app = express();

// import router
const people = require("./routes/people");
const auth = require("./routes/auth");

// Static Assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// set up base url
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});
