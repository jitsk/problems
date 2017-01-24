var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  var low = values[0];
  if(low > values[1]) {
    low = values[1];
  }
  console.log(low);
});

rl.on('close', function() {
  // do something on finish here
});
