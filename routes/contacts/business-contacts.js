const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model');

// GET route for Business Contacts List View
router.get('/', async (req, res) => {
  try {
    // Fetch all contacts from the database
    const contacts = await Contact.find({});
    res.render('../views/content/business-contacts', { contacts }); // Render the business-contacts view with contacts data
  } catch (err) {
    // Handle error
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
