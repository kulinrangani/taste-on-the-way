const { QueryTypes } = require("sequelize");
const db = require("../models");
const OrderDetails = db.orderdetails;

//Query
// const getOrderDetailsById =
//   'SELECT o.* , pr.name,pr.price,pr.img,od.qty,od.subtotal FROM public."OrderDetails" od INNER JOIN public."Orderes" o ON od.o_id = o.id INNER JOIN public."Products" pr on od.p_id=pr.id WHERE o.user_id = ? ';

const getOrderDetailsById =
  'SELECT o.*, pr.name,pr.price,pr.description,pr.img,od.qty,od.subtotal,rs.name as rname FROM public."OrderDetails" od INNER JOIN public."Orderes" o ON od.o_id = o.id INNER JOIN public."Products" pr on od.p_id=pr.id  INNER JOIN public."Restaurants" rs on pr.restaurant_id=rs.id WHERE o.id= ?';
exports.getOrderDetails = async (req, res) => {
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

exports.createOrderDetails = async (req, res) => {
  await OrderDetails.create(req.body)
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
