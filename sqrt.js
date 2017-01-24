var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var r = 1;
  for(var i = 0; i < +values[1]; i++) {
    r = (r + (+values[0]/r))/2;
  }
  console.log(r);
});

rl.on('close', function() {
  // do something on finish here
});
