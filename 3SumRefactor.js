const sum3 = (arr) => {
  arr.sort((a, b) => a - b);
  //[-3, -1, -1, 0, 0,  1,  1, 2]

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

// const sum3 = (arr) => {
//   arr.sort((a, b) => a - b);
//   //[-3, -1, -1, 0, 0,  1,  1, 2]
//   const zeroSumArray = [];
//   for (let i = 0; i < arr.length - 2; i++) {
//     let target = arr[i] * -1;
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (j > i + 1 && arr[j] === arr[j - 1]) {
//         continue;
//       }
//       let k = arr.length - 1;
//       while (k > j) {
//         if (k < arr.length - 1 && arr[k] === arr[k + 1]) {
//           k--;
//         } else if (arr[j] + arr[k] < target) {
//           j++;
//         } else if (arr[j] + arr[k] > target) {
//           k--;
//         } else {
//           zeroSumArray.push([target * -1, arr[j], arr[k]]);
//           j++;
//           k--;
//         }
//       }
//     }
//   }

//   return zeroSumArray;
// };

//console.log(sum3([-1, 0, 1, 2, -3, -1, 0, 1]));
//create a hashmap:
/*
 const hashMap = {
  i: {
    '-3': 1
  }
  j: {
    '-1': 1
  }
  k: {
    '2': 1
  }
 }
 */
