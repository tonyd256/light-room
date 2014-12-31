var opc = require('../opc');

module.exports = {
  client: new opc('localhost', 7890),
  leds: 60
};
