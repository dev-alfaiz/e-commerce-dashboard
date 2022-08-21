const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const Jwt = require("jsonwebtoken");
const jwtKey = "e-commerce-dashboard";

const app = express();
app.use(express.json());
app.use(cors());

function verifyToken(request, response, next) {
  let token = request.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey, (error, valid) => {
      if (error) {
        response.status(401).send({ result: "Please provide a valid token." });
      } else {
        next();
      }
    });
  } else {
    response.status(403).send({ result: "Please add token with headers." });
  }
}

app.post("/register", async (request, response) => {
  let user = new User(request.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (error, token) => {
    if (error) {
      response.send({
        result: "Something went wrong, please try after some time.",
      });
    }
    response.send({ result, auth: token });
  });
});

app.post("/login", async (request, response) => {
  if (request.body.email && request.body.password) {
    let user = await User.findOne(request.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (error, token) => {
        if (error) {
          response.send({
            result: "Something went wrong, please try after some time.",
          });
        }
        response.send({ user, auth: token });
      });
    } else {
      response.send({ result: "No user found." });
    }
  } else {
    response.send({ result: "No user found." });
  }
});

app.post("/add-product", verifyToken, async (request, response) => {
  let product = new Product(request.body);
  let result = await product.save();
  response.send(result);
});

app.get("/products", verifyToken, async (request, response) => {
  let products = await Product.find();
  if (products.length > 0) {
    response.send(products);
  } else {
    response.send({ result: "No Products Found!" });
  }
});

app.delete("/product/:id", verifyToken, async (request, response) => {
  const result = await Product.deleteOne({ _id: request.params.id });
  if (result.acknowledged && result.deletedCount === 1) {
    response.send(result);
  } else {
    response.send({ result: "No Product Deleted with this ID" });
  }
});

app.get("/product/:id", verifyToken, async (request, response) => {
  let result = await Product.findOne({ _id: request.params.id });
  if (result) {
    response.send(result);
  } else {
    response.send({ result: "No Record Found!" });
  }
});

app.put("/product/:id", verifyToken, async (request, response) => {
  let result = await Product.updateOne(
    { _id: request.params.id },
    {
      $set: request.body,
    }
  );
  response.send(result);
});

app.get("/search/:term", verifyToken, async (request, response) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: request.params.term.toLowerCase() } },
      { company: { $regex: request.params.term.toLowerCase() } },
      { category: { $regex: request.params.term.toLowerCase() } },
    ],
  });
  if (result.length) {
    response.send(result);
  } else {
    response.send({ result: "No Record Found!" });
  }
});

app.listen(5050);
