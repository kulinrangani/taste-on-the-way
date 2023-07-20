const express = require("express");
const router = express.Router();
const {
  getOrderDetails,
  createOrderDetails,
} = require("../controller/orderdetails");

router.route("/:id").get(getOrderDetails);

router.route("").post(createOrderDetails);

module.exports = router;
