const mongoose = require('mongoose');


// Schema defines how the user's data will be stored in MongoDB
const BadgeSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  }
  
},{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Badge', BadgeSchema);