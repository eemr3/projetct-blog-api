const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const { authMiddleware } = require('../middlewares/AuthenticateMiddleware');

const routes = express.Router();

routes.get('/', authMiddleware, CategoryController.getAll);
routes.post('/', authMiddleware, CategoryController.create);

module.exports = routes;