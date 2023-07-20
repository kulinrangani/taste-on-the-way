"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orderes",
      [
        {
          total: 300,
          user_id: 1,
          address_id: 1,
          paymentStatus: "Pending",
          paymentMode: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cart_id: 4,
          res_id: 1,
        },
        {
          total: 200,
          user_id: 2,
          address_id: 2,
          paymentStatus: "Done",
          paymentMode: "UPI",
          createdAt: new Date(),
          updatedAt: new Date(),
          cart_id: 5,
          res_id: 3,
        },
        {
          total: 150,
          user_id: 3,
          address_id: 3,
          paymentStatus: "Pending",
          paymentMode: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          cart_id: 5,
          res_id: 1,
        },
        {
          total: 150,
          user_id: 1,
          address_id: 1,
          paymentStatus: "Done",
          paymentMode: "COD",
          createdAt: new Date(),
          updatedAt: new Date(),
          cart_id: 4,
          res_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orderes", null, {});
  },
};
