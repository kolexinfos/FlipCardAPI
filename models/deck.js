const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema defines how the user's data will be stored in MongoDB
const DeckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  _cards:[{
     type: Schema.Types.ObjectId, 
     ref: 'Card' 
  }],
  logs: [{
    type: Schema.Types.ObjectId,
    ref: 'DeckLog'
  }]
  
},{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Deck', DeckSchema);