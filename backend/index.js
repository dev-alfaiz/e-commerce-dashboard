const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (request, response) => {
  let user = new User(request.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  response.send(result);
});

app.post("/login", async (request, response) => {
  if (request.body.email && request.body.password) {
    let user = await User.findOne(request.body).select("-password");
    if (user) {
      response.send(user);
    } else {
      response.send({ result: "No user found." });
    }
  } else {
    response.send({ result: "No user found." });
  }
});

app.post("/add-product", async (request, response) => {
  let product = new Product(request.body);
  let result = await product.save();
  response.send(result);
});

app.get("/products", async (request, response) => {
  let products = await Product.find();
  if (products.length > 0) {
    response.send(products);
  } else {
    response.send({ result: "No Products Found!" });
  }
});

app.delete("/product/:id", async (request, response) => {
  const result = await Product.deleteOne({ _id: request.params.id });
  if (result.acknowledged && result.deletedCount === 1) {
    response.send(result);
  } else {
    response.send({ result: "No Product Deleted with this ID" });
  }
});

app.get("/product/:id", async (request, response) => {
  let result = await Product.findOne({ _id: request.params.id });
  if (result) {
    response.send(result);
  } else {
    response.send({ result: "No Record Found!" });
  }
});

app.put("/product/:id", async (request, response) => {
  let result = await Product.updateOne(
    { _id: request.params.id },
    {
      $set: request.body,
    }
  );
  response.send(result);
});

app.listen(5050);
