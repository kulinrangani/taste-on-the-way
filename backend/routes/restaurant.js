const express = require("express");
const router = express.Router();
const {
  getRestaurant,
  getRestaurantById,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getProdcutsByRestaurantId,
} = require("../controller/restaurant");

router.route("/").post(addRestaurant).get(getRestaurant);

router.route("/product/:id").get(getProdcutsByRestaurantId);

router
  .route("/:id")
  .get(getRestaurantById)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;
