const BlogPostService = require('../services/BlogPostService');

const getAll = async (req, res) => {
  const user = req.data.id;
  const posts = await BlogPostService.getAll(user);
  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPostService.getById(Number(id));

    return res.status(200).json(post);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const search = async (req, res) => {
  const { q } = req.query;
  const user = req.data.id;
  const result = await BlogPostService.search(q, user); 

  return res.status(200).json(result);
};

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

const update = async (req, res) => { 
  try {
    const { id } = req.params;
    const user = req.data.id;
    console.log('controller', user);
    const post = await BlogPostService.update(user, id, req.body);

    res.status(200).json(post);
  } catch (error) {
   return res.status(error.status).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.data.id;
    await BlogPostService.deletePost(Number(id), Number(user));

    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  search,
  create,
  update,
  deletePost,
};