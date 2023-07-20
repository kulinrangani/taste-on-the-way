"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          houseno: 117,
          street: "Narayannagar",
          area: "bapunagar",
          city: "ahmedabad",
          country: "india",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          houseno: "32",
          street: "parmeshvarpark",
          area: "vastral",
          city: "ahmedabad",
          country: "india",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          houseno: "15",
          street: "uttampark",
          area: "nikol",
          city: "ahmedabad",
          country: "india",
          user_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
