const mongoose = require('mongoose');



const CardLogSchema = new mongoose.Schema({
  logname: {
    type: String,
    required: true
  }
},{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('CardLog', CardLogSchema);