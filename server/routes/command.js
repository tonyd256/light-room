var express = require('express');
var router = express.Router();
var TexturePlayer = require('../commands/texture_player');
var White = require('../commands/white');

router.post('/', function(req, res, next) {
  switch (req.body.command) {
    case 'texture':
      TexturePlayer.stop();
      TexturePlayer.play(req.body.name || 'flames', function (err) {
        if (err) return next(err);
        res.send();
      });
      break;

    case 'white':
      TexturePlayer.stop();
      White.set(req.body.level || 0);
      res.send();
      break;

    default:
      res.status(404).send();
      break;
  }
});

module.exports = router;
