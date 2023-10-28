require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const User = require("./model/user");
const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
var server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(bodyParser.json());
server.use(
  require("express-session")({
    secret: "my bestf is cool no",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(passport.initialize());
server.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


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

server.use("/api", apiRoutes);
server.use("/auth", authRoutes);
server.use("/community", blogRoutes);

const port = process.env.PORT || 1947;
server.listen(port, () => {
  console.log("server listening on port", port);
});
