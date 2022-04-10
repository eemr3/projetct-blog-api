const express = require('express');
const UserController = require('../controllers/UserController');
const { authMiddleware } = require('../middlewares/AuthenticateMiddleware');

const routes = express.Router();

routes.get('/', authMiddleware, UserController.getAll);
routes.get('/:id', authMiddleware, UserController.getById);
routes.post('/', UserController.create);

module.exports = routes;
