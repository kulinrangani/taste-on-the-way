"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Restaurants", "img", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("Restaurants", "about", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Restaurants", "img");
    await queryInterface.removeColumn("Restaurants", "about");
  },
};
