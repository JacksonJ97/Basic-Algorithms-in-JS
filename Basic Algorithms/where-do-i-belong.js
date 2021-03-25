function getIndexToIns(arr, num) {
  const copyArr = [...arr];
  const sortedArr = copyArr.sort((a, b) => a - b);
  let largeIndex = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) {
      largeIndex = i;
      break;
    } else {
      largeIndex = sortedArr.length;
    }
  }

  return largeIndex;
}

getIndexToIns([40, 60], 50);
