const express = require("express");
const mongoose = require("mongoose");

const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const User = require("./model/user");
const apiRoutes = require("./routes/apiRoutes")
const cors = require("cors")
const passportLocalMongoose = require("passport-local-mongoose");
var server = express();

mongoose.connect("mongodb://127.0.0.1/27017");

server.use(cors());
server.use(express.json());

server.use("/api/v1/api", apiRoutes);


const port = process.env.PORT || 3000;
server.listen(port,()=>{
    console.log("server listening on port",port);
})