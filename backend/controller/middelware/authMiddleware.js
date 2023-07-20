// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// // const asyncHandler = require("express-async-handler");
// const User = require("../models").User;

// exports.authenticateToken = async (req, res, next) => {
//   try {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.splite(" ")[1];
//     if (token == null) {
//       res.sendStatus(401);
//     }

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) {
//         res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };
