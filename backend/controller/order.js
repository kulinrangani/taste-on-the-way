const { QueryTypes } = require("sequelize");
const db = require("../models");
const Order = db.order;

//Query
const getOrderDetailsById = 'SELECT * FROM "OrderDetails" WHERE o_id = ?';

exports.getOrder = async (req, res) => {
  await Order.findAll()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOrderById = async (req, res) => {
  await Order.findByPk(req.params.id)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.updateOrder = async (req, res) => {
  await Order.update(req.body, { where: { id: req.params.id } })
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.addOrder = async (req, res) => {
  await Order.create(req.body)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.deleteOrder = async (req, res) => {
  await Order.destroy({ where: { id: req.params.id } })
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getOrderDetailsById = async (req, res) => {
  await db.sequelize
    .query(getOrderDetailsById, {
      type: QueryTypes.SELECT,
      replacement: [req.params.id],
    })
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
