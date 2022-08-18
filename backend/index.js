const express = require("express");
require("./db/config");
const User = require("./db/User");

const app = express();
app.use(express.json());

app.post("/register", async (request, response) => {
  const user = new User(request.body);
  const result = await user.save();
  response.send(result);
});

app.listen(5050);
