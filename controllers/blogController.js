const Blog = require("../model/blogs");

const createBlogController = async (req, res) => {
  try {
    const { title, author, timestamp, content } = req.body;
    if (!title) {
      return res.send({ message: "Title is required" });
    }
    if (!content) {
      return res.send({ message: "content is required" });
    }

    const blog = await Blog.create({
      title,
      author,
      timestamp,
      content,
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
    const blogs = await Blog.find({})
};

module.exports = {
  getBlogsController,
  createBlogController,
};
