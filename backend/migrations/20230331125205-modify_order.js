"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Orderes", "cart_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn("Orderes", "res_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Orderes", "cart_id");
    await queryInterface.removeColumn("Orderes", "res_id");
  },
};
