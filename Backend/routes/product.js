const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.post("/addproduct", productController.postProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);

module.exports = router;
