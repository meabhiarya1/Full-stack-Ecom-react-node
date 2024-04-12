const express = require("express");
const sequelize = require("./Utils/database");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user")
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use(productRoutes);
app.use(userRoutes)

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
