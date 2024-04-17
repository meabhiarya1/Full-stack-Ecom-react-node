const express = require("express");
const cartController = require("../controllers/cart");

const router = express.Router();

router.post("/addtocart", cartController.addToCart);

router.get("/getcart/:userid", cartController.getCart);


module.exports = router;
