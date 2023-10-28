const User = require("../model/user");
const jwt = require("jsonwebtoken");

const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in auth middleware",
    });
  }
};

module.exports = {requireSignIn};