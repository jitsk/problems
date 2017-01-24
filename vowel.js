var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  for(var letter of line) {
    if(vowelTest(letter)) {
      console.log(letter);
    }
  }
});

rl.on('close', function() {
  // do something on finish here
});


var vowelTest = (function() {
  var re = /^[aeiou]$/i;
  return function(s) {
    return re.test(s);
  }
})();
