const express = require("express");
const router = express.Router();
const {
  getCartDetails,
  addCartDetails,
  cartDetailsByUserId,
  updateQuantityByCartDetailsId,
  deleteCartDetailsByUserId,
  cartDetailsByProductId,
  deleteCartDetailsByProductIdAndCartId,
} = require("../controller/cartdetails");

router.route("").get(getCartDetails);
router.route("").post(addCartDetails);
router
  .route("/:id")
  .put(updateQuantityByCartDetailsId)
  .get(cartDetailsByUserId)
  .delete(deleteCartDetailsByUserId);

router.route("/product/:userId/:productId").get(cartDetailsByProductId);
router
  .route("/product/:product_id/:cart_id")
  .delete(deleteCartDetailsByProductIdAndCartId);
module.exports = router;
