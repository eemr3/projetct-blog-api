const { User } = require('../models');
const userValidate = require('../schemas/userSchema');
const userError = require('../utils/codeAndMessageError');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  
  return users;
};

const getUserForAuth = async (userEmail) => {
  const user = await User.findOne({ where: { email: userEmail } });

  return user;
 };

const getById = async (id) => {
  const user = await User.findByPk(Number(id)); 
  if (!user) throw userError(404, 'User does not exist');
  
  return user;
};
 
const create = async ({ displayName, email, password, image }) => {
  const { error } = userValidate.validate({ displayName, email, password, image });
  if (error) throw userError(400, error.message);
  
  const userEmail = await User.findOne({ where: { email } });
  
  if (userEmail) throw userError(409, 'User already registered');

  const user = await User.create({ displayName, email, password, image });

  return user;
};

const deleteUser = async (user) => {
  await User.destroy({ where: { id: user } });
};

module.exports = {
  create,
  getAll,
  getUserForAuth,
  getById,
  deleteUser,
};
