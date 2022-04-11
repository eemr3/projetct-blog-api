const { createToken } = require('../auth/UserAuthenticate');
const { User } = require('../models');
const validateLogin = require('../schemas/loginSchema');
const userError = require('../utils/codeAndMessageError');

const login = async (email, password) => {
  const { error } = validateLogin.validate({ email, password });
  if (error) throw userError(400, error.message);
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });
  
  if (!user) throw userError(400, 'Invalid fields');

  const token = createToken(user);
  
   return token;
};

module.exports = {
  login,
};