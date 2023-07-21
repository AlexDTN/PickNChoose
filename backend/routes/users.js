const router = require('express').Router();
let User = require('../models/user.model');

// GET request to /users/
router.route('/').get((req, res) => {
  User.find() // find all users in the MongoDB Atlas database
    .then(users => res.json(users)) // return users in JSON format
    .catch(err => res.status(400).json('Error: ' + err)); // return error if there is one
});

// POST request to /users/add
router.route('/add').post((req, res) => {
  const username = req.body.username; 
  const password = req.body.password;
  const email = req.body.email; 

  const newUser = new User({username, password, email});

  newUser.save() // save new user to MongoDB Atlas database
    .then(() => res.json('User added!')) // return message if successful
    .catch(err => res.status(400).json('Error: ' + err)); // return error if there is one
});

module.exports = router;