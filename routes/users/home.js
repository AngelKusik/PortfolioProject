const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('../views/content/home'); 
});

module.exports = router;
