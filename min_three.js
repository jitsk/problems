var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  console.log(low(+values[0], low(+values[1], +values[2])));
});

rl.on('close', function() {
  // do something on finish here
});

function low(val1, val2) {
  var low = val1;
  if(low > val2) {
    low = val2;
  }
  return low;
}
