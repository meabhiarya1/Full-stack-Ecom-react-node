const express = require("express");
const sequelize = require("./Utils/database");
const productRoutes = require("./routes/product");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(productRoutes);

const PORT = process.env.PORT || 4000;

sequelize
  .sync({ force: true })
  .then((user) => {
    // console.log(user);
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
