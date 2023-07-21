const router = require('express').Router();
let User = require('../models/user.model');

// GET request to /users/
router.route('/').get((req, res) => {
  User.find() // find all users in the MongoDB Atlas database
    .then(users => res.json(users)) // return users in JSON format
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET request to /users/:id
router.route('/:id').get((req, res) => {
  User.findById(req.params.id) // find user with the given id
    .then(user => res.json(user)) // return user in JSON format
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST request to /users/add
router.route('/add').post((req, res) => {
  const username = req.body.username; 
  const password = req.body.password;
  const email = req.body.email; 

  const newUser = new User({username, password, email});

  newUser.save() // save new user to MongoDB Atlas database
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE request to /users/:id
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id) // find user with the given id and delete
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST request to /users/update/:id
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id) // find user with the given id
    .then(user => {
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.email; 

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;