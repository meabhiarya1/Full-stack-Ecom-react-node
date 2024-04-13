const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signupUser = async (req, res, next) => {
  try {
    const { name, email, password, number } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
      number,
    });
    const token = jwt.sign({ userId: user.id }, "abhishek");
    res
      .status(201)
      .json({ message: "User Created Successfully", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Wrong");
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    const user = await Users.findOne({ where: { email } });
    // console.log(user)

    if (!user) {
      alert("User not found");
      return res.status(404).json("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    // console.log(passwordMatch);
    if (passwordMatch) {
      if (passwordMatch) {
        const token = jwt.sign({ userId: user.id }, "abhishek");

        return res
          .status(200)
          .json({ message: "Login successful", token: token });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

exports.verifyUser = async (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return res.status(500).json("User not Authorized !!!");
  }
  try {
    const decoded = jwt.verify(token, "abhishek");
    const userId = decoded.userId;

    res.json({ userId });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
