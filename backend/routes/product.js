const express = require("express");
const router = express.Router();
const {
  getProduct,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

router.route("/").get(getProduct).post(addProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
