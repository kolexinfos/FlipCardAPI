var express = require('express');
var router = express.Router();
var UserModel = require('../models/user');
var passport = require('passport');
var Deck = require('../models/deck');

/* GET deck listings. */
router.get('/', function(req, res, next) {
    
    
    Deck.find({}, function(err,result){
        if(err)
        {
            console.log(err);
            return res.status(400).json({ success: false, message: 'An error occurred on trying to pull the Decks ' + err});
        }

        else{
        res.status(201).json({ success: true,result:result, message: 'Successfully pulled the Decks ' });
        }
    })
  
});

router.post('/', function(req, res, next){
 
});

module.exports = router;