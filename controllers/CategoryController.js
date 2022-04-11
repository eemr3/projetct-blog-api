const CategoryService = require('../services/CategoryService');

const getAll = async (req, res) => {
  const categories = await CategoryService.getAll();
  return res.status(200).json(categories);
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await CategoryService.create({ name });

    return res.status(201).json(category);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  create,
};