require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const User = require("./model/user");
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
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
server.use(
  session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
server.use(
  cookieSession({
    name:'session',
    keys: ['research'],
    maxAge : 24*60*60*100,
  })
);
server.use(passport.initialize());
server.use(passport.session());
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
