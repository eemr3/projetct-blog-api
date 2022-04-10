const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;

const creatToken = (user) => {
  const token = jwt.sign({ data: user }, SECRET_KEY, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

const decoderToken = (token) => {
  try {
    const decoder = jwt.verify(token, SECRET_KEY);
    return decoder;
  } catch (error) {
    return false;
  }
};

module.exports = {
  creatToken,
  decoderToken,
};
