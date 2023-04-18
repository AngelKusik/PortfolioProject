const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Registration', page: 'registration', displayName: '' }); // Render registration.ejs
});  

// Register a new user
router.post('/', async (req, res) => {
  try {
    
    const { firstName, lastName, email, username, password } = req.body;
    const displayName = firstName + ' ' + lastName
    const newUser = new User({displayName, email, username, password });
    const savedUser = await newUser.save();
    //res.status(201).json(savedUser);
    res.redirect('/login');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
