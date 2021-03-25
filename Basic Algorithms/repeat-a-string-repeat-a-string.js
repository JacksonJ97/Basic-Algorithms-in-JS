function repeatStringNumTimes(str, num) {
  let strArray = [];

  if (num < 0) {
    return "";
  }

  for (let i = 0; i < num; i++) {
    strArray[i] = str;
  }

  return strArray.join("");
}

repeatStringNumTimes("abc", 3);
