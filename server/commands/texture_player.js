var pixelr = require('pixelr');
var config = require('./config');

var level = 0;
var image;
var interval;

module.exports.play = function (name, cb) {
  pixelr.read('public/images/' + name + '.jpeg', 'jpeg', function (err, img) {
    if (err) return cb(err);
    image = img;
    interval = setInterval(displayLine, 50);
    cb();
  });
}

module.exports.stop = function () {
  clearInterval(interval);
  image = null;
  level = 0;
}

function displayLine() {
  var height = image.height;
  var width = image.width;
  for (var i = 0; i < config.leds; i++) {
    var index = parseInt(Math.round((width / (config.leds + 2)) * (i + 1)), 10) + (level * width);
    var r = image.pixels[index * 3];
    var g = image.pixels[index * 3 + 1];
    var b = image.pixels[index * 3 + 2];
    config.client.setPixel(i, r, g, b);
    config.client.setPixel(i + 64, r, g, b);
  }

  config.client.writePixels();

  level++;
  if (level >= image.height) {
    level = 0;
  }
}

