const express = require("express");
const router = express.Router();
const {
  getOrder,
  addOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderDetailsById,
} = require("../controller/order");

router.route("/").get(getOrder).post(addOrder);

router.route("/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);

router.route("/orderdetails/:id").get(getOrderDetailsById);

module.exports = router;
