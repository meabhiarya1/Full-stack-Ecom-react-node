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
    allowNull: false,
  },

  productBrand: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productDesc: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productCategory: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productPrice: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  productQuantity: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Products;
