require("dotenv").config();
const { QueryTypes } = require("sequelize");
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const sequelize = db.Sequelize;
const User = db.user;

// Queries
const queryToGetAddress = 'SELECT * FROM "Addresses" WHERE user_id = ?';
const queryToGetOrder =
  'SELECT o.*,ad.houseno,ad.area,ad.street,ad.city,ad.country   FROM "Orderes" o INNER JOIN "Addresses" ad ON o.address_id=ad.id WHERE o.user_id = ?';

const queryToGetCart =
  'SELECT c.*,a.* FROM "Carts" c INNER JOIN "Addresses" a ON c.address_id=a.id WHERE c.user_id = ?';
// const queryToGetUserByEmail = 'SELECT * FROM "Users" WHERE email = ? ';

const getOrderDetailsById = 'SELECT * FROM "OrderDetails" WHERE o_id = ?';

exports.addUser = async (req, res) => {
  var salt = bcrypt.genSaltSync(10);
  console.log(salt);
  var password = bcrypt.hashSync(req.body.password, salt);
  const { name, email, isAdmin } = req.body;
  await User.create({
    name: name,
    email: email,
    isAdmin: isAdmin,
    password: password,
    createAt: new Date(),
    updatedAt: new Date(),
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

exports.getUser = (req, res) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  (await User)
    .findByPk(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateUser = async (req, res) => {
  (await User)
    .update(req.body, { where: { id: req.params.id } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.deleteUser = async (req, res) => {
  (await User)
    .destroy({ where: { id: req.params.id } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getAddressByUserId = async (req, res) => {
  await db.sequelize
    .query(queryToGetAddress, {
      replacements: [req.params.id],
      type: QueryTypes.SELECT,
    })
    .then((add) => {
      res.json(add);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getOrderByUserId = async (req, res) => {
  await db.sequelize
    .query(queryToGetOrder, {
      replacements: [req.params.user_id],
      type: QueryTypes.SELECT,
    })
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getCartByUserId = async (req, res) => {
  await db.sequelize
    .query(queryToGetCart, {
      replacements: [req.params.id],
      type: QueryTypes.SELECT,
    })
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getOrderDetailsById = async (req, res) => {
  await db.sequelize
    .query(getOrderDetailsById, {
      replacements: [req.params.id],
      type: QueryTypes.SELECT,
    })
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
