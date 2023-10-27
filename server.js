require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const User = require("./model/user");
const apiRoutes = require("./routes/apiRoutes")
const authRoutes = require("./routes/authRoutes");
const cors = require("cors")
var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(
  require("express-session")({
    secret: "my bestf is cool no",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(passport.initialize());
server.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

server.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB");
});
db.on("error", (err) => {
  console.error("MongoDB Atlas connection error:", err);
});

server.use(cors());
server.use(express.json());

server.use("/api/v1/api", apiRoutes);
server.use("/auth",authRoutes)

const port = process.env.PORT || 3000;
server.listen(port,()=>{
    console.log("server listening on port",port);
})