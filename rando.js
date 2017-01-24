var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

rl.on('line', function(line) {
  var values = line.split(" ");
  for (variable of values) {
    console.log(num(+variable));
  }
});
rl.on('close', function() {
});

function num(variable) {
  var arr = [variable];
  var reslt = ((Math.round((Math.pow(variable,2))/100))%10000);
  while(true) {
    console.log(reslt);
    if(arr.indexOf(reslt) === -1) {
      arr.push(reslt);
    }else {
      return arr.length;
    }
    reslt = ((Math.round((Math.pow(reslt,2))/100))%10000);
  }
}
