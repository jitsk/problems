var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  var gd = gcd(+values[0], +values[1]);
  var lcm = ((+values[0] * +values[1])/gd);
  console.log('gcd:',gd,' lcm:',lcm);
});
rl.on('close', function() {
  // do something on finish here
});

function gcd(a, b) {
  if(a === b) {
    return a;
  }
  if(a > b){
    return gcd(a-b, b);
  } else if(a < b) {
    return gcd(a, b-a);
  }
}
