var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('input.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {
  var values = line.split("");
  var val = 0;
  var current = new Array();
  for (variable of values) {
    if(open(variable)) {
      val++;
      current.push(variable);
      console.log(val, current);
    } else if (close(variable) && (isclose(current[current.length - 1]) === variable)) {
      val--;
      current.pop();
      console.log(val, current);
    }
  }
  if(val === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }

});
rl.on('close', function() {
  // do something on finish here
});

function open(char) {
  if(char === '(' || char === '{' || char === '[' || char === '<') {
    return true;
  } else {
    return false;
  }
}

function close(char) {
  if(char === ')' || char === '}' || char === ']' || char === '>') {
    return true;
  } else {
    return false;
  }
}

function isclose(current) {
  switch(current) {
    case '{':
      return '}'
      break;
    case '[':
      return ']';
      break;
    case '(':
      return ')';
      break;
    case '<':
      return '>';
      break;
  }
}
