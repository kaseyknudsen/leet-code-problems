const sum3 = (arr) => {
  arr.sort((a, b) => a - b);
  const zeroSumArray = [];
  const duplicateArrays = {}
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          const stringFromArray = [arr[i], arr[j] , arr[k]].join(',')
          if (!duplicateArrays[stringFromArray]) {
            duplicateArrays[stringFromArray] = true
            console.log(duplicateArrays)
            zeroSumArray.push([arr[i], arr[j], arr[k]])
          }
          
        }
      }
    }
  }
  return zeroSumArray;
};

console.log(sum3([-1, 0, 1, 2, -1, -4]));

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
