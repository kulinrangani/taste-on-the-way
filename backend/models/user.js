// "use strict";
// const { Model } = require("sequelize");

// module.exports = async (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }

//   User.init(
//     {
// name: DataTypes.STRING,
// email: DataTypes.STRING,
// isAdmin: DataTypes.BOOLEAN,
// password: DataTypes.STRING,
// phone: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "Users",
//     }
//   );

//   return User;
// };
"use strict";

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {}
  );

  Users.associate = function (models) {
    // associations can be defined here
    // Users.hasMany(models.Posts, { foreignKey: "user_id" });
  };

  return Users;
};
