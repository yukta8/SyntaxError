const express = require("express");
const {
  getBlogsController,
  createBlogController,
  searchBlogController,
} = require("../controllers/blogController");
const { requireSignIn } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create-blog", requireSignIn, createBlogController);
router.get("/blog", getBlogsController);
router.get("/search", searchBlogController);

module.exports = router;
