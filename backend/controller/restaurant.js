const { QueryTypes } = require("sequelize");
const db = require("../models");
const Restaurant = db.restaurant;

queryToGetProductsByRestaurantId =
  'SELECT public."Products".* , public."Restaurants".name AS rname	FROM public."Products" INNER JOIN public."Restaurants" ON public."Products".restaurant_id = public."Restaurants".id WHERE restaurant_id = ?';
// 'SELECT * FROM "Products" WHERE restaurant_id = ?';
queryToGetRestaurantInSearch =
  'SELECT r.id, r.name As rname, r."contactNO", r."isAvailable", r."createdAt", r."updatedAt", r.img as rimg, r.about ,pr.name FROM public."Restaurants" r INNER JOIN public."Products" pr ON r.id=pr.restaurant_id;';

exports.getRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findAll();
  res.send(restaurant);
};

exports.getRestaurantSearch = async (req, res) => {
  await db.sequelize
    .query(queryToGetRestaurantInSearch, {
      type: QueryTypes.SELECT,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProdcutsByRestaurantId = async (req, res) => {
  await db.sequelize
    .query(queryToGetProductsByRestaurantId, {
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

exports.getRestaurantById = async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurant.findByPk(id);
  res.send(restaurant);
};

exports.addRestaurant = async (req, res) => {
  await Restaurant.create(req.body)
    .then((restaurant) => {
      res.json(restaurant);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateRestaurant = async (req, res) => {
  await Restaurant.update(req.body, { where: { id: req.params.id } })
    .then((restaurant) => {
      res.json(restaurant);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteRestaurant = async (req, res) => {
  Restaurant.destroy({ where: { id: req.params.id } })
    .then((restaurant) => {
      res.json(restaurant);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
