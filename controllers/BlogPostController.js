const BlogPostService = require('../services/BlogPostService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.data.id;

    const newPost = await BlogPostService.create({ title, content, categoryIds, userId });

    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  create,
};