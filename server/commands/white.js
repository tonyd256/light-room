var config = require('./config');

module.exports.set = function (level) {
  for (var i = 0; i < config.leds; i++) {
    var p = parseInt(Math.round(2.55 * level), 10);
    config.client.setPixel(i, p, p, p);
    config.client.setPixel(i + 64, p, p, p);
  }
  config.client.writePixels();
}
