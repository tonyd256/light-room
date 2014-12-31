var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
  fs.readdir('public/images', function (err, files) {
    if (err) return next(err);
    res.send(files);
  });
});

module.exports = router;
