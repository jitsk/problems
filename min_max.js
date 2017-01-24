var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  console.log('Low:'+low(line.split(" ")));
  console.log(' High:'+high(line.split(" ")));
});

rl.on('close', function() {
  // do something on finish here
});

function low(values) {
  if(values.length == 1) {
    return values[0];
  }
  var ele = +values[0];
  values.shift();
  var lowest = +low(values);
  return ele < lowest ? ele : lowest;
}

function high(values) {
  if(values.length == 1) {
    return values[0];
  }
  var ele = +values[0];
  values.shift();
  var highest = +high(values);
  return ele > highest ? ele : highest;
}
