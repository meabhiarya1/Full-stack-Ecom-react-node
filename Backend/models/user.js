const Sequelize = require("sequelize");

const sequelize = require("../Utils/database");

const Users = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  number: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  isLogged: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Users;
