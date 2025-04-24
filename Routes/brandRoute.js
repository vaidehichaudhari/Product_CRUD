const express = require('express')
const brandController = require('../controllers/brandController')
const router = express.Router()

router.post('/addBrand',brandController.addBrand)
router.post('/getAllBrand',brandController.getAllBrand)
router.post('/getProductByBrandID/:ID',brandController.getProductByBrandID)
router.post('/updateBrand',brandController.updateBrand)
router.post('/deleteBrand',brandController.deleteBrand)

module.exports = router