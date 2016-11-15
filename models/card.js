const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
      type: String,
      required: true
  },
  _deck:{
     type: Number, 
     ref: 'Deck' 
  },
  logs: [{
    type: Schema.Types.ObjectId,
    ref: 'CardLog'
  }]
  
},{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Card', CardSchema);