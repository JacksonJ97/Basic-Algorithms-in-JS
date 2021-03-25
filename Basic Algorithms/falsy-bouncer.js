function bouncer(arr) {
  let newArr = [...arr];
  let booleanArr = [];

  for (let i = 0; i < newArr.length; i++) {
    booleanArr[i] = Boolean(newArr[i]);
  }

  while (booleanArr.indexOf(false) > -1) {
    let falseIndex = booleanArr.indexOf(false);
    booleanArr.splice(falseIndex, 1);
    newArr.splice(falseIndex, 1);
  }

  return newArr;
}

bouncer([7, "ate", "", false, 9]);
