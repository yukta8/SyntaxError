const express = require("express");
const {
  getBlogsController,
  createBlogController,
} = require("../controllers/blogController");

const router = express.Router();

router.post("/create-blog", createBlogController);
router.get("/blog", getBlogsController);

module.exports = router;
