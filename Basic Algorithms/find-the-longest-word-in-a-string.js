function findLongestWordLength(str) {
  let wordsArray = str.split(" ");
  let elementLength = [];

  for (let i = 0; i < wordsArray.length; i++) {
    elementLength[i] = wordsArray[i].length;
  }

  return Math.max(...elementLength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
