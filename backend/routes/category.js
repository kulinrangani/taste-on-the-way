const express = require("express");
const router = express.Router();
const {
  getCategory,
  addCategory,
  getCategoryById,
  updateCategory,
  deletCategory,
  getProdcutsByCategoryId,
} = require("../controller/category");

router.route("").get(getCategory).post(addCategory);

router.route("/product/:id").get(getProdcutsByCategoryId);

router
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deletCategory);

module.exports = router;
