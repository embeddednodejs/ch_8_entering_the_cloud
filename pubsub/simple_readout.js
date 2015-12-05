// simple_readout.js
//

var five = require('johnny-five');

var board = new five.Board({
  port: '/dev/cu.PL2303-00001214',
  repl: false
});

function publish (ev, n) {
    console.log(ev + ': ' + n);
}

board.on('ready', function() {

  var slider = new five.Sensor('A0');
  slider.scale([0, 200]).on('slide', function() {
    publish('slider', this.value);
  });

});
