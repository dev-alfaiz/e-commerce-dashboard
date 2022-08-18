const express = require("express");
const mongoose = require("mongoose");

const app = express();

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const product = mongoose.model("products", productSchema);

const connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/e-comm");
  const data = await product.find();
  console.warn(data);
};
connectDB()

app.get("/", (request, response) => {
  response.send("API is working.");
});

app.listen(5051);
