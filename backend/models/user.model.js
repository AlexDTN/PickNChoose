const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true, // required field
    unique: true, // unique field
    trim: true, // trim whitespace
    minlength: 3, // minimum length
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, {
  timestamps: true, // automatically create fields for when user is created/updated
});

const User = mongoose.model('User', userSchema);

module.exports = User;

