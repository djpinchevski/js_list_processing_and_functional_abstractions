/*
Let's implement a function that takes a list of words as an argument and returns the word with the most characters:
*/

function longestWord(words) {
  let result = words[0];

  words.forEach(function (element) {
    result = longest(result, element);
  });

  return result;
}

var longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
