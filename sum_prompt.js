var prompt = require('prompt');

var properties = [
  {
    name: 'A',
    type: 'integer',
    validator: /^[0-9]+$/,
    warning: 'Must be a number'
  },
  {
    name: 'B',
    type: 'integer',
    validator: /^[0-9]+$/,
    warning: 'Must be a number'
  }
];

prompt.start();

prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  A: ' + result.A);
  console.log('  B: ' + result.B);
  var sum = (result.A + result.B);
  console.log('  SUM:' + sum);
});

function onErr(err) {
  console.log(err);
  return 1;
}
