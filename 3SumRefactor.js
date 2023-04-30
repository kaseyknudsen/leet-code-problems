const sum3 = (arr) => {
  arr.sort((a, b) => a - b);
  const zeroSumArray = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let target = arr[i] * -1;
    for (let j = i + 1; j < arr.length - 1; j++) {
      let k = arr.length - 1;
      while (k > j) {
        let leftValue = arr[j];
        let rightValue = arr[k];
        if (leftValue + rightValue < target) {
          j++;
        } else if (leftValue + rightValue > target) {
          k--;
        } else {
          zeroSumArray.push([target * -1, leftValue, rightValue]);
          while (j < k && arr[j] === arr[j + 1]) {
            j++;
          }
          while (j < k && arr[k] === arr[k - 1]) {
            k--;
          }
          j++;
          k--;
        }
      }
    }
  }

  return zeroSumArray;
};

console.log(sum3([-1, 0, 1, 2, -3, -1, 0, 1]));
