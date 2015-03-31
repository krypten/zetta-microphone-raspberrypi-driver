#Monitor a Micophone using Zetta and Raspberry Pi

This is a microphone device for use in the Zetta platform.

##Installation

`npm install zetta-microphone-raspberrypi-driver`

##Usage

```javascript
var zetta = require('zetta');
var Microphone = require('zetta-microphone-raspberrypi-driver');

zetta()
  .use(Microphone, 0) // User LED on GPIO Pin 0
  .listen(1337)
```

### Hardware

###Streams

#####amplitude
