var express = require('express');
var router = express.Router();
var UserModel = require('../models/user');
var passport = require('passport');
var Card = require('../models/card');

/* GET card listings. */
router.get('/', function(req, res, next) {
    
    
    Card.find({}, function(err,result){
        if(err)
        {
            console.log(err);
            return res.status(400).json({ success: false, message: 'An error occurred on trying to pull the Cards ' + err});
        }

        else{
        res.status(201).json({ success: true,result:result, message: 'Successfully pulled the Cards ' });
        }
    })
  
});

router.post('/', function(req, res, next){
 
});

module.exports = router;