var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var bmi = +values[0]/Math.pow(+values[1],2);
  var condition;
  if(bmi < 18.5){
    condition = 'Under';
  } else if (bmi < 30 && bmi > 25 ) {
    condition = 'Over';
  } else if (25 >= bmi && bmi >= 18.5) {
    condition = 'Normal';
  } else {
    condition = 'Obesity';
  }
  console.log(condition);
});

rl.on('close', function() {
  // do something on finish here
});
