const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { collection: 'users' }); // Set the collection name to 'users'

const User = mongoose.model('User', userSchema);

module.exports = User;