const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add product
router.post('/', productController.createProducts);

// Search by name - placed BEFORE :id to prevent conflicts
router.get('/search', productController.searchProducts);

// Filter by price range
router.get('/filter/price', productController.filterByPriceRange);

// filter category
router.get('/filter/category/:categoryId', productController.filterByCategory);

// Get all products
router.get('/', productController.getProducts);

// Get single product by ID
router.get('/:id', productController.getProductsById);

// Update product
router.put('/:id', productController.updateProduct);

// Delete product
router.delete('/:id', productController.deleteProduct);

module.exports = router;