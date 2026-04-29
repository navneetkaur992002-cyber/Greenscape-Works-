// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,     // Matches "Full Name"
  phone: String,    // Matches "Mobile Number"
  email: String,    // Matches "Email Address"
  address: String,  // Matches "Street Address"
  suburb: String,   // Matches "Suburb"
  city: String,     // Matches "City"
  message: String   // Matches "Describe Your Project"
});

module.exports = mongoose.model('Contact', contactSchema);