const express = require('express');
const BlogPostController = require('../controllers/BlogPostController');
const { authMiddleware } = require('../middlewares/AuthenticateMiddleware');

const routes = express.Router();

routes.post('/', authMiddleware, BlogPostController.create);

module.exports = routes;