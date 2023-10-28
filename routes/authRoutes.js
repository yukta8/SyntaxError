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
router.get("/google/login/success", (req, res) => {
  res.status(200).json({
    error: false,
    message: "Login success",
  });
});
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "login/success",
    failureRedirect: "auth/login/failed",
  }),
  (req, res) => {
   
    console.log("Successful authentication");
    console.log("Redirecting to /login/success");
    res.redirect("/login/success");
  }
);
router.get('/google',passport.authenticate("google",["profile","email"]))
module.exports = router;