const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model');

// GET route for Business Contacts List View
router.get('/', async (req, res) => {
  // first check if user is logged in
  const user = req.session.user;
  if (!user) {
    // if not, redirect to login page
    return res.render('index', { title: 'Login Page', page: 'login', displayName: '', error: 'You must login to access the business contacts page'});
  }else{
    try {
      // Fetch all contacts from the database
      const contacts = await Contact.find({});
      //res.render('../views/content/business-contacts', { contacts }); // Render the business-contacts view with contacts data
      res.render('index', { title: 'Business Contacts List', page: 'business-contacts', displayName: '', contacts, error: null }); // Render the business-contacts view with contacts data
    } catch (err) {
      // Handle error
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  
});

module.exports = router;




