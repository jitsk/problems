var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  console.log(lincon(+values[0], +values[1], +values[2], +values[3], +values[4]));
});

rl.on('close', function() {
  // do something on finish here
});

function lincon(a, c, m, x, n) {
  if(n === 0){
    return x;
  }
  return ((a * lincon(a, c, m, x, n-1) + c) % m);
}
