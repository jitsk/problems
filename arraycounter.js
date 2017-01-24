var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var linecount = 0;
var numbers = 0;

rl.on('line', function(line) {
  var values = line.split(" ");
  linecount++;
  if(linecount == 1) {
    numbers = +values[0];
  } else {
    var array = new Array(numbers).fill(0);
    for (variable of values) {
      array[+variable - 1]++;
    }
  }
  console.log(array);
});

rl.on('close', function() {
  // do something on finish here
});
