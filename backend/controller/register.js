require("dotenv").config();
const db = require("../models");
const jwt = require("jsonwebtoken");
const User = db.user;

exports.register = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    password: req.body.password,
    phone: req.body.phone,
  };
  await (
    await User
  )
    .create(user)
    .then((data) => res.send(data))
    .catch((err) => {
      res.send(err.message);
    });
  // res.send(user);
};

exports.user = async (req, res) => {
  const cookie = req.cookies["jwt"];
  if (!cookie) {
    return res.status(401).send("unauthenticated");
  }
  const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
  (await User)
    .findOne({
      where: { id: claims.id },
    })
    .then((user) => {
      const { password, ...data } = user.toJSON();
      res.send(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// //////////////////////////////////////
exports.login = async (req, res) => {
  // let user;
  (await User)
    .findOne({ where: { email: req.body.email } })
    .then((data) => {
      const user = data;
      // const password = user.password;
      if (!user) {
        return res.status(404).send("User Not Found");
      }
      if (user.password != req.body.password) {
        return res.status(403).send("invalid Credential");
      }
      const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET);

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json(token);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//////////////////////////
exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.send({ message: "succesFully logged Out" });
};
