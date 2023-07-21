const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  company: {
    type: String,
    required: true,
  }, 
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive'],
  },
  image: {
    type: String,
    required: true,
  }, 
  }, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
