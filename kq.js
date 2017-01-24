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
  return checkLine(sqK, sqQ) || diagonal(sqK, sqQ);
}

function checkLine(sqK, sqQ) {
  if((sqK[0] === sqQ[0]) || (sqK[1] === sqQ[1])) {
    return true;
  }
  return false;
}

function diagonal(sqK, sqQ) {
  if(dir1(sqK, sqQ) || dir2(sqK, sqQ) || dir3(sqK, sqQ) || dir4(sqK, sqQ)) {
    return true;
  }
  return false;
}

function dir1(sqK, sqQ) {
  var p1 = sqK[0];
  var p2 = +sqK[1];
  while(p2 <= 8 && p1 != 'i') {
    if((p1 === sqQ[0]) && (p2 === +sqQ[1])) {
      return true;
    }
    p1 = String.fromCharCode((p1.charCodeAt(0) + 1));
    p2++;
  }
  return false;
}

function dir2(sqK, sqQ) {
  var p1 = sqK[0];
  var p2 = +sqK[1];
  while(p2 > 0 && p1 != '`') {
    if((p1 === sqQ[0]) && (p2 === +sqQ[1])) {
      return true;
    }
    p1 = String.fromCharCode((p1.charCodeAt(0) - 1));
    p2--;
  }
  return false;
}

function dir3(sqK, sqQ) {
  var p1 = sqK[0];
  var p2 = +sqK[1];
  while(p2 > 0 && p1 != 'i') {
    if((p1 === sqQ[0]) && (p2 === +sqQ[1])) {
      return true;
    }
    p1 = String.fromCharCode((p1.charCodeAt(0) + 1));
    p2--;
  }
  return false;
}

function dir4(sqK, sqQ) {
  var p1 = sqK[0];
  var p2 = +sqK[1];
  while(p2 <= 8&& p1 != '`') {
    if((p1 === sqQ[0]) && (p2 === +sqQ[1])) {
      return true;
    }
    p1 = String.fromCharCode((p1.charCodeAt(0) - 1));
    p2++;
  }
  return false;
}
