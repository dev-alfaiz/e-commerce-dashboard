const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("API is working.");
});

app.listen(5050)