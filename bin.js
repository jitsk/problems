var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  console.log(bin(+values[0], +values[1], +values[2], +values[3], 0 ,100));
});

rl.on('close', function() {
  // do something on finish here
});

function bin(a, b, c, d, low, high) {
  if(eqn(a, b, c, d, (high+low)/2) === 0) {
    return (high+low)/2;
  }
  else if(eqn(a, b, c, d, (high+low)/2) < 0) {
    return bin(a, b, c, d, (high+low)/2, high);
  } else {
    return bin(a, b, c, d, low, (high+low)/2);
  }
}


function eqn(a, b, c, d, x) {
  return ((a * x) + (b * Math.sqrt(Math.pow(x, 3))) - (c * Math.exp(-x / 50)) - d);
}
