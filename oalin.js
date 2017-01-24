var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  str = line.replace(/[^\w]/g, '').toLowerCase();
  console.log(str);
  if(str === str.split('').reverse().join('')){
    console.log('Y');
  } else {
    console.log('N');
  }
});

rl.on('close', function() {
  // do something on finish here
});
