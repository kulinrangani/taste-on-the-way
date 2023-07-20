const express = require("express");
const router = express.Router();
const { register, login, user, logout } = require("../controller/register");

router.route("/").post(register);
router.route("/login").post(login);
router.route("/user").get(user);
router.route("/logout").post(logout);

module.exports = router;
