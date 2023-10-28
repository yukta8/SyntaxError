require('dotenv').config();
const User = require("../model/user");
const jwt = require("jsonwebtoken");

const RegisterController = async (req,res)=>{
    const { email, password, cpassword, name } = req.body;
    try {
      const getUser = await User.findOne({ email }).exec();
      if (getUser) {
        res.send('<script>alert("User Already exists")</script>');
      } else {
        if (req.body.password === req.body.cpassword) {
          console.log("congo yea");
          const user = await User.create({
            name,
            email,
            password,
          });
          const token =  jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            {
              expiresIn: "1d",
            }
          );
          const sendd = { user, token };
          res.json(sendd);
        } else {
          res.send('<script>alert("passwords dont match)</script>');
        }
      }
    } catch (error) {
      console.log(error);
    }
};
const LoginController = async function (req, res) {
  try {
    const getuser = await User.findOne({ email: req.body.email });
    if (getuser) {
      const result = req.body.password === getuser.password;
      if (result) {
        const token = jwt.sign(
          { _id: getuser._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
        const sendd = { getuser, token };
        res.json(sendd);
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
const LogoutController = (req, res) =>{
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
};


module.exports = {
  RegisterController,
  LoginController,
  LogoutController
};