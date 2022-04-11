const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const { authMiddleware } = require('../middlewares/AuthenticateMiddleware');

const routes = express.Router();

routes.post('/', authMiddleware, CategoryController.create);

module.exports = routes;