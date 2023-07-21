const router = require('express').Router();
let User = require('../models/user.model');

// GET request to /users/
router.route('/').get((req, res) => {
  User.find() // find all users in the MongoDB Atlas database
    .then(users => res.json(users)) // return users in JSON format
    .catch(err => res.status(400).json('Error: ' + err)); // return error if there is one
});