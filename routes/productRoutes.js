// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/createTableProducts', productController.createTable);
router.post('/addProduct', productController.addProduct);
router.put('/product_id/:id', productController.updateProduct);
router.get('/getAllProducts', productController.getAll);
router.get('/getProductById/:id', productController.getById);
router.get('/getProductByName/:name', productController.getByName);
router.get('/getAllProductsDesc', productController.getAllDesc);
router.delete('/deleteProduct/:id', productController.deleteById);

module.exports = router;