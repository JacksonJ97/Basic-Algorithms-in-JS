function titleCase(str) {
  const lowerCaseStr = str.toLowerCase();
  const strArray = lowerCaseStr.split(" ");

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }

  const newArray = strArray.join(" ");

  return newArray;
}

titleCase("I'm a little tea pot");
