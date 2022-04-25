const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    // Title Case
    return res
      .status(200)
      .send(
        `Welcome ${name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}`
      );
  }
  res.send("Please provide credentials");
});

module.exports = router;
