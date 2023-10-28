const express = require("express");
const { getAllBlogs } = require("../controllers/blogController");

const router = express.Router();

router.get("/blog", getAllBlogs);

module.exports = router;