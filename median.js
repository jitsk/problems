var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  if(+values[0] > +values[1]) {
    swap(values,0,1);
  }
  if(+values[1] > +values[2]) {
    swap(values,1,2);
  }
  if(+values[0] > +values[1]) {
    swap(values,0,1);
  }
  console.log(values[1]);
});

rl.on('close', function() {
  // do something on finish here
});


function swap(values, a, b) {
  var temp = values[a];
  values[a] = values[b];
  values[b] = temp;
}
