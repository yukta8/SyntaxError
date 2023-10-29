const Blog = require("../model/blogs");
const searchBlogController = async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const blogs = await Blog.find({
      title: { $regex: searchQuery, $options: "i" },
    });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to search for blogs" });
  }
};

const createBlogController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user._id;
    const votes = 0;
    if (!title) {
      return res.send({ success: false, message: "Title is required" });
    }
    if (!content) {
      return res.send({ success: false, message: "content is required" });
    }

    if (!author) {
      return res.send({
        success: false,
        message:
          "You need to sign up/Log in to be able to contribute to discussion forum",
      });
    }

    const blog = await Blog.create({
      title,
      author,
      content,
      meta: {
        votes,
      },
    });
    res.status(201).send({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating blog",
    });
  }
};

const getBlogsController = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  try {
    const blogs = await Blog.find()
      .sort({ timestamp: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .populate("author", "name");

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

module.exports = {
  getBlogsController,
  createBlogController,
  searchBlogController,
};
