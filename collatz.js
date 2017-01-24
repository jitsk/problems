var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  for (variable of values) {
    console.log(collatz(variable));;
  }
});

rl.on('close', function() {
  // do something on finish here
});

function collatz(variable) {
  if(+variable == 1){
    return 0;
  }
  return (+variable % 2) == 0 ? 1 + collatz(+variable / 2) : 1 + collatz((3 * +variable) + 1);
}
