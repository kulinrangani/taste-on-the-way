"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Kulin Rangani",
          email: "kulin.rangani@aimdek.com",
          phone: "6353297914",
          isAdmin: true,
          password: "kulin@123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Devendra Mali",
          email: "dev.mali@aimdek.com",
          phone: "958265742",
          isAdmin: false,
          password: "dev@mali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kuldip Chauhan",
          email: "kuldip.chauhan@aimdek.com",
          phone: "9853589521",
          isAdmin: false,
          password: "kuldip@123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hardik Choksi",
          email: "hardik.choksi@aimdek.com",
          phone: "9859741258",
          isAdmin: false,
          password: "choksi@123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
