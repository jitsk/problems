var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var length = values.length;
  console.log(Math.round(sum(values)/length));
});

rl.on('close', function() {
  // do something on finish here
});

function sum(values) {
  if(values.length == 1) {
    return +values[0];
  }
  var ele = +values[0];
  values.shift();
  return sum(values) + ele;
}
