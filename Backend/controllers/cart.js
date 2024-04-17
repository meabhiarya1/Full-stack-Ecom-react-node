const Cart = require("../models/cart");
const jwt = require("jsonwebtoken");

exports.addToCart = async (req, res, next) => {
  const { productId, cart, token } = req.body;
  console.log(productId, cart, token);
  try {
    const decoded = jwt.verify(token, "abhishek");
    const userId = decoded.userId;

    const cartItems = await Cart.findAll({ where: { userId: userId } });
    const existingProduct = cartItems.find(
      (item) => item.productId === productId
    );
    // console.log(existingProduct)
    if (existingProduct) {
      existingProduct.cart += 1;
      await existingProduct.save();
    } else {
      await Cart.create({
        cart: cart,
        productId: productId,
        userId: userId,
      });
    }
    const updatedCartItems = await Cart.findAll({ where: { userId: userId } });
    const totalCartValue = updatedCartItems.reduce((acc, item) => acc + item.cart, 0);

    res.status(200).json({ totalCartValue });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
