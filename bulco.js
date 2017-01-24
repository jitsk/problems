var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var linec = 0;
var guess;
var zero;
var one;

rl.on('line', function(line) {
  linec++;
  if(linec === 1) {
    guess = +line;
  } else {
    var values = line.split(" ");
    console.log(qwe(guess, values), '-', qaz(guess, values));
  }


});

rl.on('close', function() {
  // do something on finish here
});

function qwe(guess, values) {
  var count = 0;
  while (guess >= 1) {
      if(((guess % 10) - (+values % 10)) === 0) {
        count++;
      }
      guess = Math.floor(guess / 10);
      values = Math.floor(+values / 10);
    }
  return count;
}

function qaz(guess, values) {
  var count = 0;
  while (guess >= 1) {
      if(inVal(guess %10, values)) {
        count++;
      }
      guess = Math.floor(guess / 10);
    }
    console.log(count);
  return count;
}

function inVal(num, variables) {
  var val = variables.toString().split("");
  for (variable of val) {
    if(num === +variable) {
      return true;
    }
  }
  return false;
}
