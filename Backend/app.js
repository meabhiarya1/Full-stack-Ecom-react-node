const express = require("express");
const sequelize = require("./Utils/database");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Cart = require("../Backend/models/cart");
const Product = require("../Backend/models/product");
const User = require("../Backend/models/user");

app.use(bodyParser.json());
app.use(cors());

app.use(productRoutes);
app.use(userRoutes);
app.use(cartRoutes);

Cart.belongsTo(User);
User.hasOne(Cart);

Cart.belongsToMany(Product, { through: "CartProduct" });
Product.belongsToMany(Cart, { through: "CartProduct" });

const PORT = process.env.PORT || 5000;

sequelize
  .sync({ force: false })
  .then((user) => {
    // console.log(user);
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
