function octalToDecimal(numberString) {

  var digits = numberString.split('').map(function (num) {
    return Number(num);
  }).reverse();

  return digits.map(function (digit, index) {
    return digit * Math.pow(8, index);
  }).reduce(function (sum, value) {
    return sum + value;
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
