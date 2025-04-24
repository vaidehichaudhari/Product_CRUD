const express = require('express')
const categoryController = require('../controllers/categoryController')

const router = express.Router()

router.get('/getAllCategories',categoryController.getAllCategories)
router.get('/getProductsByCategoryID/:ID',categoryController.getProductsByCategoryID)
router.post('/addCategory',categoryController.addCategory)
router.delete('/deleteCategory/:ID',categoryController.deleteCategory)
router.put('/updateCategory/:ID',categoryController.updateCategory)

module.exports = router;