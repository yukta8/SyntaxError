const getAllBlogs = async(req,res)=>{
  const searchQuery = req.query.q;
  try {
    const blogs = await Blog.find({
      title: { $regex: searchQuery, $options: 'i' }, 
    });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search for blogs' });
  }
};

module.exports = {
  getAllBlogs,
};
