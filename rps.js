var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var count = 0;
  for (variable of values) {
    var val = variable.split("");
    count += high(val[0], val[1]);
  }
  var winner;
  if(count > 0) winner = 1;
  else winner = 2;
  console.log(winner);
});

rl.on('close', function() {
  // do something on finish here
});

function high(val1, val2) {
  switch(val1) {
    case 'R':
      if(val2 === 'S') return 1;
      if(val2 === 'P') return -1;
    case 'P':
      if(val2 === 'R') return 1;
      if(val2 === 'S') return -1;
    case 'S':
      if(val2 === 'P') return 1;
      if(val2 === 'R') return -1;
    default:
      return 0;
      break;
  }
}
