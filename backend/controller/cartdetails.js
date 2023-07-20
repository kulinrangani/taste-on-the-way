const { QueryTypes } = require("sequelize");
const db = require("../models");
const CartDetails = db.cartdetails;

const queryToGetCartDetailsByUserId =
  'SELECT c.id as cid,c.total,c.address_id,cd.product_ID,cd.id as cid,cd.qty,cd.subtotal,cd.cart_id,pr.id AS pid,pr.name,pr.img,pr.description,pr.price,pr.restaurant_id,r.name as rname,r.img as rimg FROM public."Carts" c INNER JOIN public."CartDetails" cd ON c.id=cd.cart_id INNER JOIN public."Products" pr ON cd.product_id=pr.id INNER JOIN public."Restaurants" r ON pr.restaurant_id=r.id WHERE c.user_id=?;';
const queryToDeleteProductFromCart =
  'DELETE FROM public."CartDetails" WHERE product_id=? AND cart_id=?;';
const queryToGetCartDetailsByProductId =
  'SELECT c.id as cid,c.total,c.address_id,cd.product_ID,cd.id as cid,cd.qty,cd.subtotal,cd.cart_id,pr.name,pr.img,pr.description,pr.price,pr.restaurant_id,r.name as rname,r.img as rimg FROM public."Carts" c INNER JOIN public."CartDetails" cd ON c.id=cd.cart_id INNER JOIN public."Products" pr ON cd.product_id=pr.id INNER JOIN public."Restaurants" r ON pr.restaurant_id=r.id WHERE c.user_id=? AND cd.product_id=?;';
exports.getCartDetails = async (req, res) => {
  await CartDetails.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.cartDetailsByProductId = async (req, res) => {
  await db.sequelize
    .query(queryToGetCartDetailsByProductId, {
      type: QueryTypes.SELECT,
      replacements: [req.params.userId, req.params.productId],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addCartDetails = async (req, res) => {
  const { product_id, price, cart_id } = req.body;

  await CartDetails.create({
    product_id: product_id,
    qty: 1,
    subtotal: price,
    cart_id: cart_id,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.cartDetailsByUserId = async (req, res) => {
  await db.sequelize
    .query(queryToGetCartDetailsByUserId, {
      type: QueryTypes.SELECT,
      replacements: [req.params.id],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateQuantityByCartDetailsId = async (req, res) => {
  await CartDetails.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteCartDetailsByUserId = async (req, res) => {
  await CartDetails.destroy({ where: { cart_id: req.params.id } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteCartDetailsByProductIdAndCartId = async (req, res) => {
  await db.sequelize
    .query(queryToDeleteProductFromCart, {
      type: QueryTypes.DELETE,
      replacements: [req.params.product_id, req.params.cart_id],
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
