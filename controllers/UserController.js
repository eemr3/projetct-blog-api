const { creatToken } = require('../auth/UserAuthenticate');
const UserService = require('../services/UserService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await UserService.create({ displayName, email, password, image });
    const token = creatToken(displayName, email);
    return res.status(201).json(token);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  create,
};
