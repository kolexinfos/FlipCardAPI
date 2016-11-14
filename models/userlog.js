const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema defines how the user's data will be stored in MongoDB
const UserLogSchema = new mongoose.Schema({
  logname: {
    type: String,
    required: true
  }
  
},{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('UserLog', UserLogSchema);