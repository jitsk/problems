var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  var arr = line.split(" ");
  sort(arr);
  for (variable of arr) {
    console.log(values.indexOf(variable)+1);
  }
});
rl.on('close', function() {
  // do something on finish here
});

function sort(values) {
  do {
    var swap = false;
    for (var i = 0; i < values.length; i++) {
      if(+values[i] > +values[i+1]) {
        var t = values[i];
        values[i] = values[i+1];
        values[i+1] = t;
        swap = true;
      }
    }
  } while (swap);
}
