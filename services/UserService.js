const { User } = require('../models');
const userValidate = require('../schemas/userSchema');
const userError = require('../utils/userError');

const create = async ({ displayName, email, password, image }) => {
  const { error } = userValidate.validate({ displayName, email, password, image });
  if (error) throw userError(400, error.message);
  const userEmail = await User.findOne({ where: { email } });
  
  if (userEmail) throw userError(409, 'User already registered');

  const user = await User.create({ displayName, email, password, image });

  return user;
};

module.exports = {
  create,
};