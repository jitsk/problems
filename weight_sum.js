var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var digit = (+values[0] * +values[1]) + +values[2];
  console.log(sum(digit));
});

rl.on('close', function() {
  // do something on finish here
});

function sum(digit) {
  if(digit % 10 == digit) {
    return digit;
  }
  return sum(parseInt(digit/10)) + parseInt(digit % 10) * getCount(digit);
}

function getCount(digit) {
  if(digit % 10 == digit) {
    return 1;
  }
  return 1 + getCount(parseInt(digit/10));
}
