var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  for (variable of values) {
    var num = 2;
    var count = 1;
    while (count < +variable) {
      num = num + 1;
      for (var i = 2; i <= num; i++){
          if (num % i == 0) {
            break;
          }
        }
        if ( i == num){
          count = count+1;
        }
    }
  console.log(num);
  }
});

rl.on('close', function() {
  // do something on finish here
});
