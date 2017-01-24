var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  console.log(killer(+values[0], +values[1]));
});

rl.on('close', function() {
});

function killer(n, k) {
  if (n == 1)
    return 1;
  else
    return (killer(n - 1, k) + k-1) % n + 1;
}
