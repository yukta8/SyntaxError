const express = require("express");
const User = require("../model/user");
const { LoginController, RegisterController, LogoutController } = require("../controllers/authController");
const router = express.Router();
router.post("/register", RegisterController);
router.post("/login", LoginController)
router.get("/logout", LogoutController);
module.exports = router;