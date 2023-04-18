const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Logout
router.get('/', (req, res) => {
  // Perform logout actions, e.g., clearing session data, etc.
  req.session.destroy(() => {
    res.redirect('/login?msg=logout_success');
  });
});

module.exports = router;
