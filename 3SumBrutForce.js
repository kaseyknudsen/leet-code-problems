const sum3 = (arr) => {
  arr.sort((a, b) => a - b);
  const zeroSumArray = [];
  const duplicateArrays = {};
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          const stringFromArray = [arr[i], arr[j], arr[k]].join(",");
          if (!duplicateArrays[stringFromArray]) {
            duplicateArrays[stringFromArray] = true;
            console.log(duplicateArrays);
            zeroSumArray.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
  }
  return zeroSumArray;
};

console.log(sum3([-1, 0, 1, 2, -1, -4]));
