const { QueryTypes } = require("sequelize");
const db = require("../models");
const Restaurant = db.restaurant;
const Category = db.category;

exports.getCategory = async (req, res) => {
  await Category.findAll()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getRestaurant = async (req, res) => {
  await Restaurant.findAll()
    .then((rest) => {
      res.json(rest);
    })
    .catch((err) => {
      err.message;
    });
};
