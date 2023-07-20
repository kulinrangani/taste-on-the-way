"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          name: "Shree Ram Restaurant",
          contactNO: "9876543210",
          isAvailable: true,
          img: "shree-ram-restaurt",
          about: "good news",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swad The Kadhiyavadi",
          contactNO: "9876534567",
          isAvailable: true,
          img: "swad kathiyavadi",
          about: "good news",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honest",
          contactNO: "6543243210",
          isAvailable: false,
          img: "honest",
          about: "good news",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Restaurants", null, {});
  },
};
