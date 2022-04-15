const { Category, BlogPost, User } = require('../models');
const validateBlogPost = require('../schemas/blogPostSchema');
const formatError = require('../utils/codeAndMessageError');

const getAll = async (user) => {
  const posts = await BlogPost.findAll({
    where: { userId: user },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

const create = async ({ title, content, categoryIds, userId }) => {
  const { error } = validateBlogPost.validate({ title, content, categoryIds });
  if (error) throw formatError(400, error.message);

  const category = await Promise.all(
    categoryIds.map(async (catId) => {
      const result = await Category.findOne({ where: { id: catId } });
      
      if (!result) throw formatError(400, '"categoryIds" not found');
      return result;
    }),
  );
  
  const newPost = await BlogPost.create({ title, content, userId });
  
  await newPost.addCategory(category);

  return newPost;
};

module.exports = {
  create,
  getAll,
};
