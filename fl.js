var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var sum = 0;
  for (variable of values) {
    sum += Math.pow(+variable,2);
  }
  console.log(sum);
});

rl.on('close', function() {
  // do something on finish here
});
