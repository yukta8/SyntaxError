const express = require("express");
const passport = require("passport");
const User = require("../model/user");
const {
  LoginController,
  RegisterController,
  LogoutController,
  
} = require("../controllers/authController");
const router = express.Router();
router.post("/register", RegisterController);
router.post("/login", LoginController)
router.get("/logout", LogoutController);
router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        error: true,
        message: "Login failed",
    });
});
router.get("/google/callback", 
passport.authenticate("google",{
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
}))
router.get('/google',passport.authenticate("google",["profile","email"]))
module.exports = router;