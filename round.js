var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  console.log(Math.round(+values[0]/+values[1]));
});

rl.on('close', function() {
  // do something on finish here
});
