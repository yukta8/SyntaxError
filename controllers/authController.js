require('dotenv').config();
const User = require("../model/user");
const jwt = require("jsonwebtoken");

const RegisterController = async (req,res)=>{
    const { email, password, cpassword, name } = req.body;
    try {
      const getUser = await User.findOne({ email }).exec();
      if (getUser) {
        res.status(200).send({
          success: false,
          message: "Already Registered! Login to continue",
        });
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
          res.status(201).send({
            success: true,
            message: "Registration successful!",
            sendd,
          });
        } else {
          res.status(500).send({
            success: false,
            message: "Passwords don't match", 
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error",
        error,
      });
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
        res.status(200).send({
          success: true,
          message: "Login Successful",
          sendd,
          token,
        });
      }
      else{
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
    } else {
       return res.status(404).send({
         success: false,
         message: "Email is not registered, Register to Continue",
       });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
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