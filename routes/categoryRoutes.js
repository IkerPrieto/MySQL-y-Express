// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories');

router.get('/createTableCategories', categoryController.createTable);
router.post('/addCategory', categoryController.addCategory);
router.put('/category_id/:id', categoryController.updateCategory);
router.get('/getAllCategories', categoryController.getAll);
router.get('/getCategoryById/:id', categoryController.getById);
router.get('/getProductsByCategories', categoryController.getProductsByCategories);

module.exports = router;