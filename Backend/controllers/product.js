const Products = require("../models/product");

exports.getAllProducts = async (req, res, next) => {
  try {
    const product = await Products.findAll();
    res.status(200).json({
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.postProduct = async (req, res, next) => {
  const {
    productName,
    productBrand,
    productDesc,
    productImage,
    productCategory,
    productURL,
  } = req.body;
  try {
    const product = await Products.create({
      productName,
      productBrand,
      productDesc,
      productImage,
      productCategory,
      productURL,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res, next) => {};

