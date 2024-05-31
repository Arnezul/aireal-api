const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const shopController = require('../controllers/shop');
const categoryController = require('../controllers/category');
const productController = require('../controllers/product');

router.get('/users', userController.getAll);
router.post('/users', userController.create);
router.get('/users/:id', userController.getById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

router.get('/shops', shopController.getAll);
router.post('/shops', shopController.create);
router.get('/shops/:id', shopController.getById);
router.put('/shops/:id', shopController.update);
router.delete('/shops/:id', shopController.delete);

router.get('/categories', categoryController.getAll);
router.post('/categories', categoryController.create);
router.get('/categories/:id', categoryController.getById);
router.put('/categories/:id', categoryController.update);
router.delete('/categories/:id', categoryController.delete);

router.get('/products', productController.getAll);
router.post('/products', productController.create);
router.get('/products/:id', productController.getById);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

module.exports = router;
