require("dotenv").config();
const db = require("../models");
const jwt = require("jsonwebtoken");
const User = db.user;

exports.login = (req, res) => {
  const user = req.body;
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
};

exports.getData = (req, res) => {
  const users = User.findAll();
  res.json(users.filter((user) => user.name === req.user.name));
};
