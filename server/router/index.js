const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    const user = {
      username: 'Admin',
      permissions: ['admin']
    };
    req.session.user = user;
    res.send(user);
  } else {
    res.status(401).send({
      error: 'Invalid user or password'
    });
  }
});

router.get('/api/logout', (req, res) => {
  req.session = null;
  res.send({});
});

router.get('/api/whoami', (req, res) => {
  res.send(req.session.user);
});

router.get('/check/pg', async (req, res) => {
    try {
      const users = await Users.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
})

router.post('/create', async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, username, password, role } = req.body;
    console.log(name, username, password, role)
    // Create a new user in the database
    const newUser = await Users.create({
      name,
      username,
      password,
      role,
    });

    // Return a success response with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    // Handle any errors that occur during user creation
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user' });
  }
});

module.exports = router;
