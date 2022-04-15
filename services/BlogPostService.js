const { Category, BlogPost, User } = require('../models');
const { validateBlogPost, validateBlogPostUpdate } = require('../schemas/blogPostSchema');
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

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) throw formatError(404, 'Post does not exist');

  return post;
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

const update = async (user, id, body) => {
  const { title, content } = body;
  
  if (body.categoryIds) throw formatError(400, 'Categories cannot be edited');

  const { error } = validateBlogPostUpdate.validate({ title, content });
  if (error) throw formatError(400, error.message);
  const userIdBP = await BlogPost.findByPk(id);
  console.log(userIdBP);
  if (userIdBP.dataValues.userId !== Number(user)) {
    throw formatError(401, 'Unauthorized user');
  }
  await BlogPost.update({ title, content }, { where: { userId: user, id } });
  const postUpedated = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  return postUpedated;
};

const deletePost = async (id, user) => {
  const userIdPost = await BlogPost.findByPk(id);
  if (!userIdPost) throw formatError(404, 'Post does not exist');
  if (userIdPost.dataValues.userId !== Number(user)) throw formatError(401, 'Unauthorized user');

  await BlogPost.destroy({ where: { id, userId: user } });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deletePost,
};
