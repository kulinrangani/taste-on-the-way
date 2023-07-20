const express = require("express");
const router = express.Router();
const {
  getAddress,
  getAddressById,
  updateAddress,
  deleteAddress,
  addAddress,
} = require("../controller/address");

router.route("/").get(getAddress).post(addAddress);

router
  .route("/:id")
  .get(getAddressById)
  .put(updateAddress)
  .delete(deleteAddress);

module.exports = router;
