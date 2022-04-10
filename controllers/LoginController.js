const LoginService = require('../services/LoginService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await LoginService.login(email, password);

    return res.status(200).json(token);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  login,
};