const Products = require("../models/product");

exports.getAllProducts = async (req, res, next) => {
    try {
        const product =  await Products.findAll()
        res.status(200).json({
            product
        })
    } catch (error) {
        console.log(error)
    }
}


