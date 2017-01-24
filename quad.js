var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  console.log(root1(+values[0], + values[1], +values[2]), root2(+values[0], + values[1], +values[2]));
});

rl.on('close', function() {
  // do something on finish here
});

function root1(A, B, C) {
  var sq = Math.pow(B, 2) - 4*A*C;
  if(sq < 0) {
    sq = Math.abs(sq);
    return (-B/ (2*A)).toString() + '+' + (Math.sqrt(sq) / (2*A).toString() + 'i');
  }
  return (-B + Math.sqrt(sq)) / (2*A);
}

function root2(A, B, C) {
  var sq = Math.pow(B, 2) - 4*A*C;
  if(sq < 0) {
    sq = Math.abs(sq);
    return (-B/ (2*A)).toString() + '+' + (Math.sqrt(sq) / (2*A).toString() + 'i');
  }
  return (-B - Math.sqrt(sq)) / (2*A);
}
