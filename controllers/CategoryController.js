const CategoryService = require('../services/CategoryService');

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
  create,
};