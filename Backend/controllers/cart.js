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


exports.getCart = async (req, res, next) => {
  const id = req.params.userid;
  try {
    const cartData = await Cart.findAll({ where: { userId: id } });
    console.log(cartData)
    
    if (cartData.length === 0) {
      // If no cart data found for the user, send an appropriate response
      return res.status(404).json({ message: 'Cart not found for the user' });
    }
    
    // Assuming each user has only one cart, we access the first cart in the array
    const cart = cartData[0].cart;

    const productIds = cartData.map(item => item.productId);
    
    // Send the array of productIds to the frontend
    
    // Send the cart data and productId to the frontend
    res.status(200).json({ cart, productIds });
  } catch (error) {
    console.log(error);
    // If an error occurs during the process, send an internal server error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
