const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/products', productController.getAll);
router.post('/products', productController.create);
router.get('/products/:id', productController.getById);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

module.exports = router;
