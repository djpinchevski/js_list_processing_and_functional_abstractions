/*
There are problems with this data, though, so we first have to clean it up before we can use it:

The band countries are wrong: all the bands should have 'Canada' as the country.
The band name should have all words capitalized.
Remove all dots from the band names.
Write a function that can process the input band Array and return an Array that contains the fixed information:
*/
var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  changeCountry(data, 'Canada');
  capitalizeNames(data);
  eliminateDots(data);
  return data;
}

function capitalizeNames(array) {
  var splitWords;

  array.forEach(function (element, index1, array1) {
    splitWords = element.name.split(' ');
    splitWords.forEach(function (word, index2, array2) {
      array2[index2] = word.slice(0, 1).toUpperCase() + word.slice(1);
    });

    element.name = splitWords.join(' ');
  });
}

function eliminateDots(array) {
  array.forEach(function (element) {
    element.name = element.name.replace('.', '');
  });
}

function changeCountry(array, country) {
  array.forEach(function (element) {
    element.country = country;
  });
}

console.log(processBands(bands));
/*
// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/
