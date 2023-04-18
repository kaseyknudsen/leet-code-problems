const sum3 = (arr, num) => {
    arr.sort((a, b) => a - b);
    const zeroSumArray = [];
    const duplicateArrays = {};
    sum = 0
    let left;
    for (let i = 0; i < num; i++) {
        sum += arr[i]
    }
   for (left = 0; left < arr.length - 2; left ++) {
    
   }

    return zeroSumArray;
  };
  
  console.log(sum3([-1, 0, 1, 2, -1, -4]));
  