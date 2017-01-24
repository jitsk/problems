var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  var count = 0;
    for (var i = 0; i < values.length; i++) {
      if(+values[i] > +values[i+1]) {
        var t = values[i];
        values[i] = values[i+1];
        values[i+1] = t;
        swap = true;
        count++;
      }
    }
  console.log(count);
  check(values);
});

rl.on('close', function() {
  // do something on finish here
});

function check(values) {
  var result = 0;
  for (variable of values) {
    result = ((result + +variable) * 113) % 10000007;
  }
  console.log(result);
}
