function reverseString(str) {
  let stringCharacterArray = [];
  let combined;

  for (let i = 0; i < str.length; i++) {
    stringCharacterArray[i] = str[str.length - 1 - i]; // put the characters in reverse order into an array
  }

  combined = stringCharacterArray.join(""); // converts the array elements into a string and joins them
  return combined;
}

reverseString("hello");
