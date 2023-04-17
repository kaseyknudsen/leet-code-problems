const sum3 = (arr) => {
  arr.sort((a, b) => a - b);
  const zeroSumArray = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let threeNums = [arr[i], arr[j], arr[k]].join(" ");
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === 0 && zeroSumArray.indexOf(threeNums) === -1) {
          zeroSumArray.push(threeNums);
        }
      }
    }
  }
  return zeroSumArray;
};

console.log(sum3([0, 0, 0, 0]));

/* 
let zeroSumArray = [];
  let sum = 0;
  let rightIndex;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
    if (sum === 0) {
      zeroSumArray.push(arr.slice(0, num));
    }
  }
    for (let leftIndex = 0; leftIndex <= arr.length - num; leftIndex++) {
      for (rightIndex = leftIndex + 1; rightIndex < arr.length; rightIndex++) {
        sum = sum - rightIndex[2] + rightIndex[3]
      }
    } */
