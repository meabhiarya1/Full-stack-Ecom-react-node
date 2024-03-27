const Sequelize = require("sequelize");

const sequelize = require("../Utils/database");

const Products = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  productName: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  productBrand: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  productDesc: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  productImage: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  productCategory: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  productURL: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  productPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  productQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Products;
