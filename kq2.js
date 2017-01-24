var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  if(findMatch(values[0], values[1])) {
    console.log('Y');
  } else {
    console.log('N');
  }
});

rl.on('close', function() {
  // do something on finish here
});

function findMatch(pos1, pos2) {
  var sqK = pos1.split("");
  var sqQ = pos2.split("");
  return checkDist(sqK, sqQ);
}

function checkDist(sqK, sqQ) {
  var numdiff = distNum(+sqK[1], +sqQ[1]);
  var letdiff = distLet(sqK[0], sqQ[0]);
  if(numdiff === letdiff || numdiff === 0 || letdiff === 0) {
    return true;
  }
  return false;
}

function distNum(num1, num2) {
  return Math.abs(num1 - num2);
}

function distLet(let1, let2) {
  return Math.abs(let1.charCodeAt(0) - let2.charCodeAt(0));
}
