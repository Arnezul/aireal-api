class User {
  constructor(
    id,
    name,
    email,
    password,
    username,
    gender,
    address,
    phone_number,
    image_url
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.gender = gender;
    this.address = address;
    this.phone_number = phone_number;
    this.image_url = image_url;
  }
}

module.exports = User;
