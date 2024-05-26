class Shop {
  constructor(
    id,
    userId,
    name,
    description,
    street,
    city,
    province,
    image_url
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.street = street;
    this.city = city;
    this.province = province;
    this.image_url = image_url;
  }

  getUser(users) {
    return users.find((user) => user.id === this.userId);
  }
}


module.exports = Shop;
