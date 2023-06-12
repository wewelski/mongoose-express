const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true //these booleans are mainly for validation purposes
  },
  phone: {
    type: Number,
    required: true
  },
  relationship: {
    type: String,
    lowercase: true,
    enum: ['author','family','friend','colleague']
  }
});

const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;