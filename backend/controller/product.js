const { QueryTypes } = require("sequelize");
const db = require("../models");
const Product = db.product;

const queryToGetProductDetails =
  'SELECT pr.id as pid, pr.name as pname, price, description, pr.img, category_id, pr.restaurant_id,r.id as rid,r.name as rname,c.id as cid , c.name as cname FROM public."Products" pr INNER JOIN public."Restaurants" r ON pr.restaurant_id=r.id INNER JOIN public."Categories" c ON pr.category_id=c.id;';

exports.getProduct = async (req, res) => {
  await db.sequelize
    .query(queryToGetProductDetails, {
      type: QueryTypes.SELECT,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProductById = async (req, res) => {
  await Product.findByPk(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.addProduct = async (req, res) => {
  await Product.create(req.body)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.updateProduct = async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
