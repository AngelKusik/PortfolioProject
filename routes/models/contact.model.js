const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { collection: 'contacts' }); // Set the collection name to 'contacts'

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;