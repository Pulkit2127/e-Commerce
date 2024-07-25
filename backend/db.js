const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jojosehrawat21:2nb82EUacxSpf9T7@cluster0.r4yw3jl.mongodb.net/eCommerce"
);

const userSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  password: String,
  country: String,
  pincode: Number,
  cartProducts: [
    {
      productid: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    },
  ],
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  productImage: [String],
  price: Number,
  color: String,
  specification: String,
  waranty: String,
  sale: Boolean,
  discount: String,
  category: String,
  availability: Boolean,
});

const reviewsSchema = new mongoose.Schema({
  userid: mongoose.Schema.Types.ObjectId,
  productid: mongoose.Schema.Types.ObjectId,
  rating: Number,
  description: String,
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("Users", userSchema);
const Product = mongoose.model("Products", productSchema);
const Review = mongoose.model("Reviews", reviewsSchema);

module.exports = {
  User,
  Product,
  Review,
};
