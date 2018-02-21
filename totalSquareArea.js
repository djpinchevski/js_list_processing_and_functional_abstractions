/*
Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.
*/

function totalArea(rectangles) {
  var areas = rectangles.map(function (element) {
    return element[0] * element[1];
  });

  return areas.reduce(function (acc, element) {
    return acc + element;
  });
}

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function (element) {
    return element[0] === element[1];
  })

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));
