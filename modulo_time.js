var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  var date1 = values.slice(0,4);
  var date2 = values.slice(4);
  calcDay(convert(date2) - convert(date1));
});

rl.on('close', function() {
  // do something on finish here
});

function convert(date) {
  return +date[0]*24*60*60 + +date[1]*60*60 + +date[2]*60 + +date[3];
}

function calcDay(diff) {
  console.log('Day:' + Math.floor(diff / (24*60*60)));
  calchour(diff % (24*60*60));
}

function calchour(diff) {
  console.log('Hour:' + Math.floor(diff / (60*60)));
  calcMin(diff % (60*60));
}

function calcMin(diff) {
  console.log('Minute:' + Math.floor(diff / (60)));
  calcSec(diff % (60));
}

function calcSec(diff) {
  console.log('Second:' + Math.floor(diff));
}
