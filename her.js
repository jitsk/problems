var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var dis1 = Math.sqrt(Math.pow((+values[2] - +values[0]),2) + Math.pow((+values[3] - +values[1]),2));
  var dis2 = Math.sqrt(Math.pow((+values[5] - +values[3]),2) + Math.pow((+values[4] - +values[2]),2));
  var dis3 = Math.sqrt(Math.pow((+values[1] - +values[5]),2) + Math.pow((+values[0] - +values[4]),2));
  var s =(dis1+dis2+dis3)/2;
  console.log(Math.sqrt(s * (s - dis1) * (s - dis2) * (s - dis3)));
});

rl.on('close', function() {
  // do something on finish here
});
