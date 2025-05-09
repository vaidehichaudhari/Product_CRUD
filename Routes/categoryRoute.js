
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Define the routes
router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);  // Make sure this is correct
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
