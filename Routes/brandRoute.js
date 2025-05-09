const express = require('express');
const brandController = require('../controllers/brandController');
const router = express.Router();

// Make sure each handler exists in brandController!
router.post('/addBrand', brandController.addBrand);
router.get('/', brandController.getAllBrand);                                                           
router.get('/getProductByBrandID/:ID', brandController.getProductByBrandID);
router.put('/updateBrand', brandController.updateBrand);
router.delete('/deleteBrand', brandController.deleteBrand);
router.post('/addCategory', brandController.addCategory);

module.exports = router;
