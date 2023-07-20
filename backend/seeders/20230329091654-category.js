"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Pizza",
          restaurant_id: 1,
          img: "pizza.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Taco",
          restaurant_id: 2,
          img: "taco.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Meal",
          restaurant_id: 3,
          img: "meal.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
