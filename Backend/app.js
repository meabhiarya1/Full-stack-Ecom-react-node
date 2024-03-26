const express = require('express');
const sequelize = require("./Utils/database");
const productRoutes = require("./routes/product")


const app = express();

app.use(productRoutes)

const PORT = process.env.PORT || 4000;

sequelize.sync().then((user) => {
    // console.log(user);
    app.listen(PORT, console.log(`Server started on port ${PORT}`))
})
    .catch((err) => {
        console.log(err)
    });
