const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (request, response) => {
  const user = new User(request.body);
  const result = await user.save();
  response.send(result);
});

app.listen(5050);
