/*
Write a Function named myForEach that is similar to the built-in Array.prototype.forEach method. Your Function should take an array and another Function as arguments. The Function passed to myForEach should mutate a variable in the outer scope. In the code fragment below, the Function passed to myForEach mutates the min variable.
*/
function myForEach(array, func) {
  var i;

  for (i = 0; i < array.length; i += 1) {
    func(array[i]);
  }
}

var min = Infinity;
var getMin = function (value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin);    // undefined
console.log(min);                        // 3
