const express = require('express');
const BlogPostController = require('../controllers/BlogPostController');
const { authMiddleware } = require('../middlewares/AuthenticateMiddleware');

const routes = express.Router();

routes.get('/', authMiddleware, BlogPostController.getAll);
routes.get('/search', authMiddleware, BlogPostController.search);
routes.get('/:id', authMiddleware, BlogPostController.getById);
routes.post('/', authMiddleware, BlogPostController.create);
routes.put('/:id', authMiddleware, BlogPostController.update);
routes.delete('/:id', authMiddleware, BlogPostController.deletePost);

module.exports = routes;