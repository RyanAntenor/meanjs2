var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./model/user');

var db_host = 'mongodb://db/mean';

//Connect to DB
mongoose.connect(db_host);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"status": "success"});
});

router.get('/users', function(req, res) {
    // User.find({}, function(err, users) {
    //     res.json(users);
    //     next();
    // });
    res.send('test');
});


module.exports = router;
