var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var sum = 0;

rl.on('line', function(line) {
  var values = line.split(" ");
    if(values.length === 1) {
      sum = +values[0];
    } else {
      sum = op(values[0], values[1], sum);
    }
});

rl.on('close', function() {
  console.log(sum);
});

function op(sign, value, sum) {
  if(sign == "+") {
    return sum + +value;
  } else if (sign == "-") {
    return sum - +value;
  } else if (sign == "*") {
    return sum * +value;
  } else if(sign == "%"){
    return sum % +value;
  }
}
