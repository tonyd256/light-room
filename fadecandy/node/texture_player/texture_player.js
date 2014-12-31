var pixelr = require('pixelr');
var opc = require('./opc');

var client = new opc('light-room.local', 7890);

pixelr.read('images/flames.jpeg', 'jpeg', processImage);

var level = 0;
var leds = 60;
var image;

function processImage(err, img) {
  if (err) return console.log(err);
  image = img;
  setInterval(displayLine, 50);
}

function displayLine() {
  var height = image.height;
  var width = image.width;
  for (var i = 0; i < leds; i++) {
    var index = Math.round((width / (leds + 2)) * (i + 1)) + (level * width);
    var r = image.pixels[index * 3];
    var g = image.pixels[index * 3 + 1];
    var b = image.pixels[index * 3 + 2];
    client.setPixel(i, r, g, b);
  }

  client.writePixels();

  level++;
  if (level >= image.height) {
    level = 0;
  }
}

