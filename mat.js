var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var linecount = 0;
var code = 0;

rl.on('line', function(line) {
  var values = line.split(" ");
  var array = new Array();
  var arry = new Array();
  for (variable of values) {
    if(!(variable in array)) {
      array[variable] = 1;
    } else {
      arry.push(variable);
    }
  }
  arry.sort();
  console.log(arry);
});

rl.on('close', function() {
  // do something on finish here
});
