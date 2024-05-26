const Product = require('../models/product');
const Category = require('../models/category');
const Shop = require('../models/shop');

let categories = [
  new Category(1, 'Electronics'),
  new Category(2, 'Books'),
];

let shops = [
  new Shop(1, 'Shop A', '123 Main St'),
  new Shop(2, 'Shop B', '456 Elm St'),
];

let products = [
  new Product(1, 1, 1, 'Laptop', 999.99, 'A high-end laptop', 'A high-end laptop with 16GB RAM and 512GB SSD', 10),
  new Product(2, 2, 2, 'Book', 19.99, 'A bestselling book', 'A bestselling book with great reviews', 50),
];

exports.getAll = (req, res) => {
  res.json(products); 
};

exports.create = (req, res) => {
  const { id, categoryId, shopId, name, price, description, longdescription, stock } = req.body;
  const product = new Product(id, categoryId, shopId, name, price, description, longdescription, stock);
  products.push(product);
  res.status(201).json(product);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  res.status(200).json(product);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  const { categoryId, shopId, name, price, description, longdescription, stock } = req.body;
  const updatedProduct = new Product(id, categoryId, shopId, name, price, description, longdescription, stock);
  products[productIndex] = updatedProduct;
  res.json(updatedProduct);
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  const deletedProduct = products.splice(productIndex, 1);
  res.status(200).json(deletedProduct[0]);
};

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.createCategory = (req, res) => {
  const { id, name } = req.body;
  const category = new Category(id, name);
  categories.push(category);
  res.status(201).json(category);
};

exports.getShops = (req, res) => {
  res.json(shops);
};

exports.createShop = (req, res) => {
  const { id, name, address } = req.body;
  const shop = new Shop(id, name, address);
  shops.push(shop);
  res.status(201).json(shop);
};
