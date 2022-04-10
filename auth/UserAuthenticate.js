const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;

const creatToken = (email) => {
  const token = jwt.sign({ email }, SECRET_KEY, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

module.exports = {
  creatToken,
};
