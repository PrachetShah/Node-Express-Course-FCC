const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  // sending only id, name, image. Custom Return
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  //console.log(req.params); //prints {productID: 1} if 1 is passed
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  // if product does not exist
  if (!singleProduct) {
    res.status(404).send("Product not Found");
  }

  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server listening on Port 5000");
});
