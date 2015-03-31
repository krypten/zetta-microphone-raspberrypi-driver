var util = require('util');
var Device = require('zetta-device');
var gpio = require('rpi-gpio');

var SAMPLE_TIME = 100; //ms

var Microphone = module.exports = function(pin, interval) {
  Device.call(this);
  this.pin =  pin || 0;
  this.interval = interval || 25;
};
util.inherits(Microphone, Device);

Microphone.prototype.init = function(config) {
  config
    .type('microphone')
    .name('Microphone')
    .monitor('volume')

  var startTime = 0;
  var maxValue = 0;
  var minValue = 0;
  function reset() {
    startTime = new Date().getTime();
    maxValue = 0;
    minValue = 100;
  }

  reset();
  var self = this;
  setInterval(function() {
    var value = self.ReadPin(self.pin);

    if (value > maxValue) {
      maxValue = value;
    }

    if (value < minValue) {
      minValue = value;
    }

    if (new Date().getTime() - startTime > SAMPLE_TIME) {
      self.volume = (maxValue - minValue);
      reset();
    }
  }, this.interval);
};

Microphone.prototype.ReadPin = function(pin) {
	gpio.setup(pin, gpio.DIR_IN, read);

	function read() {
      gpio.read(pin, function(err) {
        if (err) throw err;
        console.log('Read from pin ' + pin);
      });
  }
}
