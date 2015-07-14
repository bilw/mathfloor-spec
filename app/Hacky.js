var numToRound = '978.345';

var rounder = function(num) {
  if(num === '') {
    console.log('please enter a number');
  }
  else if(num == 0) {
    console.log('need a number greater than 0');
  }
  else if(isNaN(num)) {
    console.log('please enter a number or fraction using digits');
  }
  else
    console.log('The number rounds down to: ' + Math.floor(num));
};

rounder(numToRound);