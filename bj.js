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
    sum += getVal(variable, sum);
  }
  if(sum <=21) console.log(sum);
  else {
    console.log("Bust");
  }
});

rl.on('close', function() {
  // do something on finish here
});

function getVal(v, s) {
  switch (v) {
    case 'T':
    case 'J':
    case 'Q':
    case 'K':
      return 10;
    case 'A':
      if((21 - s) > 11) {
        return 11;
      } else {
        return 1;
      }
    default:
      return +v;
  }
}
