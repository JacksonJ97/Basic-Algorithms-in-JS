function confirmEnding(str, target) {
  let targetLength = target.length;
  let stringLength = str.length;
  let stringEnd = str.slice(stringLength - targetLength);

  if (stringEnd === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
