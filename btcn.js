var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  for (variable of values) {
    var count=0;
    while(variable != 0){
      variable = variable & (variable - 1);
      count++;
    }
    console.log(count);;
  }
});

rl.on('close', function() {
});
