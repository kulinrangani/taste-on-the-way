const db = require("../models");
const Address = db.address;

exports.getAddress = async (req, res) => {
  await Address.findAll()
    .then((Address) => {
      res.json(Address);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddressById = async (req, res) => {
  await Address.findByPk(req.params.id)
    .then((Address) => {
      res.json(Address);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.updateAddress = async (req, res) => {
  await Address.update(req.body, { where: { id: req.params.id } })
    .then((Address) => {
      res.json(Address);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.addAddress = async (req, res) => {
  await Address.create(req.body)
    .then((Address) => {
      res.json(Address);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.deleteAddress = async (req, res) => {
  await Address.destroy({ where: { id: req.params.id } })
    .then((Address) => {
      res.json(Address);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
