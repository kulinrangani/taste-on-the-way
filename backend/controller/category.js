const { QueryTypes } = require("sequelize");
const db = require("../models");
const Category = db.category;

//query
const getProdcutsByCategoryId =
  'SELECT * FROM "Products" WHERE category_id = ?';

const queryToGetCategory =
  'SELECT c.*,r.name AS rname FROM public."Categories" c INNER JOIN public."Restaurants" r ON c.restaurant_id=r.id;';
exports.getCategory = async (req, res) => {
  await db.sequelize
    .query(queryToGetCategory, {
      type: QueryTypes.SELECT,
    })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProdcutsByCategoryId = async (req, res) => {
  await db.sequelize
    .query(getProdcutsByCategoryId, {
      replacements: [req.params.id],
      type: QueryTypes.SELECT,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addCategory = async (req, res) => {
  const { name, restaurant_id, img } = req.body;
  await Category.create({
    name: name,
    restaurant_id: restaurant_id,
    img: img,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCategoryById = async (req, res) => {
  const id = req.params.id;
  await Category.findByPk(id)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.updateCategory = async (req, res) => {
  await Category.update(req.body, { where: { id: req.params.id } })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletCategory = async (req, res) => {
  await Category.destroy({ where: { id: req.params.id } })
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
