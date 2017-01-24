var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
if(+line === 0) {
  console.log(0);
}
else {
  var i =	Math.round((Math.log(+line) + (Math.log(5)/2))/(Math.log((Math.sqrt(5)+1)/2)));
  console.log(i);
}
});
rl.on('close', function() {
  // do something on finish here
});
