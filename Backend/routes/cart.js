const express = require("express");
const cartController = require("../controllers/cart");

const router = express.Router();

router.post("/addtocart", cartController.addToCart);


module.exports = router;
