const express = require("express");
const User = require("../model/user");
const router = express.Router();
router.post("/register", async (req, res) => {
  const { email, password, cpassword, username } = req.body;
  try {
    const getUser = await User.findOne({ email }).exec();
    if (getUser) {
      res.send('<script>alert("User Already exists")</script>');
    } else {
      if (req.body.password === req.body.cpassword) {
        console.log("congo yea");
        const user = await User.create({
          username,
          email,
          password,
        });
        res.send({ user });
      } else {
        res.send('<script>alert("passwords dont match)</script>');
      }
    }
    console.log(getUser);
  } catch (error) {
    console.log(error);
  }
});
router.post("/login", async function (req, res) {
  try {
    const getuser = await User.findOne({ email: req.body.email });
    if (getuser) {
      const result = req.body.password === getuser.password;
      if (result) {
        res.send({ getuser });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
    console.log(getuser);
  } catch (error) {
    res.status(400).json({ error });
  }
});

//Handling user logout
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
});
module.exports = router;