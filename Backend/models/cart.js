const Sequelize = require("sequelize");

const sequelize = require("../Utils/database");

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  cart: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  productId: {
    type: Sequelize.STRING,
  },
});

module.exports = Cart;
