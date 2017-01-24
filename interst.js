var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var sum = +values[0];
  var count = 0;
  while(sum <= values[1]) {
    sum += Math.round(sum*(+values[2]/100));
    count++;
  }
  console.log(count);
});

rl.on('close', function() {
  // do something on finish here
});
