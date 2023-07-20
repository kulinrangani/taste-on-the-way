"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartDetail.init(
    {
      product_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      subtotal: DataTypes.DOUBLE,
      cart_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CartDetails",
    }
  );
  return CartDetail;
};
