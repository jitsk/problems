var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  console.log((values[2]/2)*((2*values[0])+((values[2]-1)*values[1])));
});

rl.on('close', function() {
  // do something on finish here
});

function shuffle() {
  var array = [ CA, C2, C3, C4, C5, C6, C7, C8, C9, CT, CJ, CQ, CK, DA, D2, D3, D4, D5, D6, D7, D8, D9, DT, DJ, DQ, DK, HA, H2, H3, H4, H5, H6, H7, H8, H9, HT, HJ, HQ, HK, SA, S2, S3, S4, S5, S6, S7, S8, S9, ST, SJ, SQ, SK ];
}
