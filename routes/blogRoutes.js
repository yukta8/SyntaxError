const express = require("express");
const {
  getBlogsController,
  createBlogController,
  searchBlogController,
} = require("../controllers/blogController");

const router = express.Router();

router.post("/create-blog", createBlogController);
router.get("/blog", getBlogsController);
router.get("/search", searchBlogController);

module.exports = router;
