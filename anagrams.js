function anagram(word, list) {
  var result = [];
  var sortedWordChars = sortLowerCaseWord(word);

  result = list.filter(function (element) {
    var listSortedWordChars = sortLowerCaseWord(element);
    return checkForSameChars(sortedWordChars, listSortedWordChars);
  });

  return result;
}

function checkForSameChars(chars1, chars2) {
  var i;

  if (chars1.length !== chars2.length) { return false; }

  for (i = 0; i < chars1.length; i += 1) {
    if (chars1[i] !== chars2[i]) {
      return false;
    }
  }

  return true;
}

function sortLowerCaseWord(word) {
  return word.toLowerCase().split('').sort();
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
