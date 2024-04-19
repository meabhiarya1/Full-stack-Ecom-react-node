const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/productdetail/:productId", productController.getProductDetail);
router.get("/getuserproduct/:userId", productController.getUserProduct)
router.post("/addproduct", productController.addProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);

module.exports = router;
