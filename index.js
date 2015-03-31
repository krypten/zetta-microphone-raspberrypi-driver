var util = require('util');
var AutoScout = require('zetta-auto-scout');
var Microphone = require('./microphone_driver');

var GpioScout = module.exports = function(pin) {
  AutoScout.call(this, 'microphone', Microphone, pin);
};
util.inherits(GpioScout, AutoScout);
