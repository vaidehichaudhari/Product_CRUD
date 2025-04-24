const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.get('/getAllProducts',productController.getAllProducts)
router.get('/getProductID/:ID',productController.getProductByID)
router.post('/addProduct',productController.addProduct)
router.delete('/deleteProduct/:ID',productController.deleteProduct)
router.put('/updateProduct/:ID',productController.updateProduct)
router.get('/getProductsByQuery',productController.getProductsByQuery)

module.exports = router;