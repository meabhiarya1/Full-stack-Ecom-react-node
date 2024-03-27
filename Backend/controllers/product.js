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

// exports.deleteProduct = async (req, res, next) => {
//   try {
//     await Products.findByPk(req.params.id).then((productTodelete) => {
//       productTodelete.destroy().then(() => {
//         res.status(200).json({ message: "Deleted" });
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.deleteProduct = async (req, res, next) => {
  try {
    
    const productToDelete = await Products.findByPk(req.params.id);
    console.log(productToDelete)
    // Check if productToDelete is null
    if (!productToDelete) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If product is found, delete it
    await productToDelete.destroy();
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
