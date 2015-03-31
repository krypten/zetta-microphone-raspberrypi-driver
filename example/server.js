var zetta = require('zetta');
var Microphone = require('../index');

zetta()
  .use(Microphone)
  .listen(1337);
