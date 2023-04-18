const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model');

// Get all contacts
router.get('/', async (req, res) => {
    
  try {
    const contacts = await Contact.find();
    //res.json(contacts);
    res.render('index', { title: 'Contacts', page: 'contacts', displayName: '' }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    res.render('index', { title: 'Contacts', page: 'contacts', displayName: '', contact }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific contact by ID
router.get('/update/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    res.render('index', { title: 'Contacts', page: 'contacts', displayName: '', contact }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    //res.status(201).json(savedContact);
    res.redirect('/home');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update a new contact
router.post('/update/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    //res.json(updatedContact);
    res.redirect('/home');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a contact
router.post('/delete/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    //res.json({ message: 'Contact deleted' });
    res.redirect('/business-contacts');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
