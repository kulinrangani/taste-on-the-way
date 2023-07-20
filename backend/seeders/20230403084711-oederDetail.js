"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "OrderDetails",
      [
        {
          o_id: 16,
          p_id: 1,
          qty: 2,
          subtotal: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          o_id: 17,
          p_id: 2,
          qty: 1,
          subtotal: 430,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          o_id: 18,
          p_id: 3,
          qty: 4,
          subtotal: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderDetails", null, {});
  },
};
