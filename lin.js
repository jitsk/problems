var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  a = (+values[3] - +values[1])/(+values[2] - +values[0]);
  b = +values[1] - (a*+values[0]);
  console.log('a:',a,' b:',b);
});
rl.on('close', function() {
  // do something on finish here
});
