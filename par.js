var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  for (variable of values) {
    if(+variable === 46) {
      console.log('.');
    }else {
      var s = dec2bin(+variable).split("");
      if(countOne(s) % 2 === 0) {
        console.log(String.fromCharCode(parseInt(+convert(s), 2)));
      }
    }
  }
});


rl.on('close', function() {
  // do something on finish here
});

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function countOne(dec) {
  var count = 0;
  for (variable of dec) {
    if(+variable === 1) {
      count++;
    }
  }
  return count;
}

function convert(s) {
  var str = '';
  str += '0';
  var count = 0;
  for (variable of s) {
    if(s.length === 8 && count === 0 ) {
    } else {
      str += variable;
    }
    count++;
  }
  return str;
}
