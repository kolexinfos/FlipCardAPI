var express = require('express');
var router = express.Router();
var UserModel = require('../models/User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ message:'blast' });
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
