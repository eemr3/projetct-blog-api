const { Category } = require('../models');
const validateCategory = require('../schemas/categorySchema');
const formatError = require('../utils/codeAndMessageError');

const create = async ({ name }) => {
  const { error } = validateCategory.validate({ name });

  if (error) throw formatError(400, error.message);

  const category = await Category.create({ name });
  
  return category;
};

module.exports = {
  create,
};