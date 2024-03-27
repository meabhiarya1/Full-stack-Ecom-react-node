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
    productPrice,
    productQuantity,
  } = req.body;
  try {
    const product = await Products.create({
      productName,
      productBrand,
      productDesc,
      productImage,
      productCategory,
      productURL,
      productPrice,
      productQuantity,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const productToDelete = await Products.findByPk(req.params.id);
    console.log(productToDelete);
    if (!productToDelete) {
      return res.status(404).json({ message: "Product not found" });
    }

    await productToDelete.destroy();
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
