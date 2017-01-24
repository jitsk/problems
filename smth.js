var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  smth(values);
});

rl.on('close', function() {
  // do something on finish here
});

function smth(values) {
  console.log(values[0]);
  for(var i = 1; i < values.length - 1; i++) {
    console.log((+values[i-1] + +values[i] + +values[i+1])/3);
  }
  console.log(values[values.length - 1]);
}
