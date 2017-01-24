var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split(" ");
  var suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  for (variable of values) {
    console.log(ranks[+variable % 13] + ' of ' + suits[Math.floor(+variable / 13)]);
  }
});

rl.on('close', function() {
  // do something on finish here
});
