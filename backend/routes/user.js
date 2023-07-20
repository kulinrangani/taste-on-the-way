const express = require("express");
const router = express.Router();
const {
  getUser,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
  getAddressByUserId,
  getOrderByUserId,
  getCartByUserId,
  getOrderDetailsById,
  getUserByEmail,
} = require("../controller/user");

router.route("/").get(getUser).post(addUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// router.route("/email").get(getUserByEmail);
// router.route("/login").get(userLogin);

//custome Routes
router.route("/address/:id").get(getAddressByUserId);
router.route("/order/:user_id").get(getOrderByUserId);
router.route("/order/orderdetails/:id").get(getOrderDetailsById);
router.route("/cart/:id").get(getCartByUserId);

module.exports = router;
