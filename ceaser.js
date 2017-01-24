var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var linecount = 0;
var code = 0;

rl.on('line', function(line) {
  var values = line.split(" ");
  linecount++;
  if(linecount === 1) {
    code = +values[0];
  }else {
    for (vari of values) {
      var s = vari.split("");
      for (variable of s) {
        var num = variable.charCodeAt(0) - code;
        if(num < 65) {
          num = num + 26;
        } else if(num >86){
          num = num - 26;
        }
        console.log(String.fromCharCode(num));
      }
    }
  }
});

rl.on('close', function() {
  // do something on finish here
});
