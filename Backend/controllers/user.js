const Users = require("../models/user");

exports.postUser = async (req, res, next) => {
    try {
        const { name, email, password, number } = req.body;
        await Users.create({
            name,
            email,
            password,
            number
        })
        res.status(201).json("User Created Successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json("Something Wrong")
    }
}