var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function (req, res, next) {
  var dir = path.join(__dirname, '..', 'public', 'images');
  fs.readdir(dir, function (err, files) {
    if (err) return next(err);
    res.send(files);
  });
});

module.exports = router;
