class Product {
  constructor(
    id,
    categoryId,
    shopId,
    name,
    price,
    description,
    longdescription,
    stock
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.shopId = shopId;
    this.name = name;
    this.price = price;
    this.description = description;
    this.longdescription = longdescription;
    this.price = price;
    this.stock = stock;
  }

  getCategory(categories) {
    return categories.find((category) => category.id === this.categoryId);
  }

  getShop(shops) {
    return shops.find((shop) => shop.id === this.shopId);
  }
}

module.exports = Product;
