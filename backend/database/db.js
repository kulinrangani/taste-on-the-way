const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres", "", "", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
