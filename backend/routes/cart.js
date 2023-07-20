const express = require("express");
const router = express.Router();
const {
  getCart,
  getCartById,
  addCart,
  updateCart,
  deleteCartById,
  getCartIdByUserId,
} = require("../controller/cart");

router.route("/").get(getCart).post(addCart);

router.route("/:id").get(getCartById).delete(deleteCartById);

router.route("/cartid/:id").get(getCartIdByUserId);

router.route("/:id/:total").put(updateCart);

module.exports = router;
