"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Gujarati Thali",
          price: 200,
          description: "Testy Meal On Your Way",
          img: "Thali.jpg",
          category_id: 3,
          restaurant_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Margreta Pizza",
          price: 150,
          description: "9' pizza with Extra Cheeze",
          img: "pizza.jpg",
          restaurant_id: 2,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
