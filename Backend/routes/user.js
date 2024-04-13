const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/adduser", userController.signupUser);

router.post("/login", userController.loginUser);

router.post("/verify", userController.verifyUser);

module.exports = router;
