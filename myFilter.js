/*
Write a Function that's similar to Array.prototype.filter. It takes an array and a function as arguments, and returns an array whose values are only those that the function passed returns as true.
*/
function myFilter(array, func) {
  var i;
  var result = [];
  for (i = 0; i < array.length; i += 1) {
    if (func(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

var isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
