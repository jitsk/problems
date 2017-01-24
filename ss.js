var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  sort(values);
});

rl.on('close', function() {
  // do something on finish here
});

function sort(values) {
  if(values.length === 1) {
    return values;
  }
  var highest = +values[0];
  var position = 0;
  for (var i=1; i < values.length; i++) {
    if(+values[i] > highest) {
      highest = values[i];
      position = i;
    }
  }
  console.log(position);
  values[position] = values[values.length - 1];
  return sort(values.slice(0, values.length - 1)).concat(highest);
}
