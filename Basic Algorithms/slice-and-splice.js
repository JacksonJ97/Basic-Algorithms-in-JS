function frankenSplice(arr1, arr2, n) {
  const copyArr1 = [...arr1];
  const copyArr2 = [...arr2];

  copyArr2.splice(n, 0, ...copyArr1);

  return copyArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
