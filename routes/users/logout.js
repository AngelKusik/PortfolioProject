const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Logout
router.post('/', (req, res) => {
  // Perform logout actions, e.g., clearing session data, etc.
  res.json({ message: 'Logout successful' });
});

module.exports = router;
