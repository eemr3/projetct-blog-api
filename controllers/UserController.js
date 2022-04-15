const { createToken } = require('../auth/UserAuthenticate');
const UserService = require('../services/UserService');

const getAll = async (_req, res) => {
    const users = await UserService.getAll();

    return res.status(200).json(users);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await UserService.getById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await UserService.create({ displayName, email, password, image });
    
    const token = createToken(user);
    return res.status(201).json(token);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const user = req.data.id;
  await UserService.deleteUser(user);
  return res.status(204).end();
};
module.exports = {
  create,
  getAll,
  getById,
  deleteUser,
};
