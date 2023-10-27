const express = require("express");
const mongoose = require("mongoose");

const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
var server = express();
mongoose.connect("mongodb://127.0.0.1/27017");


const User = require("./model/user");

const port = process.env.PORT || 3000;
server.listen(port,()=>{
    console.log("server listening on port",port);
})