require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const User = require("./model/user");
const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
var userProfile;
var server = express();
server.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(bodyParser.json());
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:1947/auth/google/callback",
      scope:["profile","email"],
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

server.use(
  session({
    secret: "okay-we-live",
    resave: false,
    saveUninitialized: true,
  })
);
server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
}); 
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


server.use("/api", apiRoutes);
server.use("/auth", authRoutes);
server.use("/community", blogRoutes);

const port = process.env.PORT || 1947;
server.listen(port, () => {
  console.log("server listening on port", port);
});