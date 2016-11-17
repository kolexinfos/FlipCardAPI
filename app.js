// Include our packages in our main server file
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
var fbAuth = require('./config/passport');
var User = require('./models/user');


const config = require('./config/main');
const cors = require('cors');
const port = 3000;

//Enable CORS
app.use(cors());


// serialize and deserialize
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user._id);
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    console.log(user);
      if(!err) done(null, user);
      else done(err, null);
    });
});



var users = require('./routes/users');
//var badges = require('./routes/badges');
var cards = require('./routes/cards');
//var decks = require('./routes/badges');


// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Log requests to console
app.use(morgan('dev'));

// Home route. We'll end up changing this to our main front end index later.
app.get('/', function(req, res) {
  res.json('Welcome to the FlipCard API.');
});

// Connect to database
mongoose.connect(config.database);


app.use('/users', users);
app.use('/cards', cards);


module.exports = app;
