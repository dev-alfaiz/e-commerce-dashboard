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

app.listen(5050);
