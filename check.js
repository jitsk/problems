var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var result = 0;
  for (variable of values) {
    result = ((result + +variable) * 113) % 10000007;
  }
  console.log(result);
});

rl.on('close', function() {
  // do something on finish here
});
