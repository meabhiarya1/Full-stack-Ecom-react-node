const Products = require("../models/product");
const Data = require("../controllers/jsondata");

exports.getAllProducts = async (req, res, next) => {
  try {
    // console.log(Data);
    const product = await Products.findAll();
    res.status(200).json({
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getProductDetail = async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.productId);
    // console.log(product)
    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addProduct = async (req, res, next) => {
  const {
    productName,
    productBrand,
    productDesc,
    productImage,
    productCategory,
    productPrice,
    productQuantity,
  } = req.body;
  // console.log(Data);
  try {
    // let product;
    // for (const data of Data) {
    //   // console.log(data);
    //   product = await Products.create({
    //     productName: data.productName || data.title,
    //     productBrand: data.productBrand || data.brand,
    //     productDesc: data.productName || data.title,
    //     productImage: data.productImageUrl || data.image,
    //     productCategory: "Jeans",
    //     productPrice: data.productPrice || data.price,
    //     productQuantity: "5",
    //   });
    //   // console.log(data)
    //   // break;
    // }

    const product = await Products.create({
      productName,
      productBrand,
      productDesc,
      productImage,
      productCategory,
      productPrice,
      productQuantity,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const productToDelete = await Products.findByPk(req.params.id);
    // console.log(productToDelete);
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
