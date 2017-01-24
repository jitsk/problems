var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var str = values[1].split("");
  console.log(str.slice(+values[0]).toString() +','+ str.slice(0, +values[0]).toString());;
});

rl.on('close', function() {
  // do something on finish here
});
