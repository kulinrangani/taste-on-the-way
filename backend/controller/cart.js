const { QueryTypes } = require("sequelize");
const db = require("../models");
const Cart = db.cart;

exports.getCartIdByUserId = async (req, res) => {
  await db.sequelize
    .query('SELECT id FROM "Carts" WHERE user_id = ?', {
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

exports.getCart = async (req, res) => {
  await Cart.findAll()
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCartById = async (req, res) => {
  await Cart.findByPk(req.params.id)
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.addCart = async (req, res) => {
  await Cart.create(req.body)
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.updateCart = async (req, res) => {
  await Cart.update(req.body, { where: { id: req.params.id } })
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.deleteCartById = async (req, res) => {
  await Cart.destroy({ where: { user_id: req.params.id } })
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
