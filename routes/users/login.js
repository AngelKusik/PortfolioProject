const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('../views/content/login'); // Render login.ejs
});

// Login
router.post('/', async (req, res) => {
 const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      // Redirect back to login page with error message
      return res.render('../views/content/login', { error: 'Invalid username or password' });
    }

    // Set user session
    //req.session.user = user;
    res.redirect('/business-contacts'); // Redirect to Business Contacts List View
  } catch (err) {
    // Handle error
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
