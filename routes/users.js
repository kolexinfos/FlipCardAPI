var express = require('express');
var router = express.Router();
var UserModel = require('../models/user');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ message:'blast' });
});

router.get('/auth/instagram',
  passport.authenticate('instagram'),
  function(req, res){});
router.get('/auth/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/account');
  });

router.post('/', function(req, res, next){
  var UserObject = req.body;
  UserModel
      .create(UserObject)
      .then(function(User){
        res.status(200).json(User);
      }, function(err){
        res.status(400).json(err)
      })
});

module.exports = router;
