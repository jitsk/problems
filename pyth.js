var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  if(Math.pow(+values[2],2) === (Math.pow(+values[1],2) + Math.pow(+values[0],2))) {
    console.log('R');
  } else if (Math.pow(+values[2],2) > (Math.pow(+values[1],2) + Math.pow(+values[0],2))) {
    console.log('O');
  } else {
    console.log('A');
  }
});

rl.on('close', function() {
  // do something on finish here
});
