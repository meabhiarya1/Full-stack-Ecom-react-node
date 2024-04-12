const Users = require("../models/user");
const bcrypt = require('bcrypt');


exports.postUser = async (req, res, next) => {
    try {
        const { name, email, password, number } = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await Users.create({
            name,
            email,
            password: hashedPassword,
            number
        })
        res.status(201).json("User Created Successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json("Something Wrong")
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email)
        const user = await Users.findOne({ where: { email } })
        // console.log(user)

        if (!user) {
            return res.status(404).json('User not found')
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch)
        if (passwordMatch) {
            if (passwordMatch) {
                return res.status(200).json({ message: 'Login successful', user });
            } else {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
    }
}