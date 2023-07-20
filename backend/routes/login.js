// const express = require("express");
// const router = express.Router();
// const { login } = require("../controller/login");
// const {
//   //   authenticateToken,
//   getData,
// } = require("../controller/middelware/authMiddleware");

// //Extra import
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const User = require("../models").User;
// // ////////////////////////////////////////////
// router
//   .route("/")
//   .post(authenticateToken, (req, res) => {
//     const user = req.body;
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//     res.json({ accessToken: accessToken });
//   })
//   .get(authenticateToken, (req, res) => {
//     const users = User.findAll();
//     res.json(users.filter((user) => user.name === req.user.name));
//   });

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.splite(" ")[1];
//   if (token == null) {
//     res.sendStatus(401);
//   }

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) {
//       res.sendStatus(403);
//     }
//     req.user = user;
//     next();
//   });
// }

// module.exports = router;
