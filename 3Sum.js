/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
*/
/* 
nums[i]
nums[j]
nums[k]

input [-1, 0, 1, 2, -1, -4]
          [
                       ]

zero-th loop
left: 0
right: 2
Sum: 0
check if sum is 0
array of valid triplets = [[-1, 0, 1], ]
sum = sum - arr[left] + arr[right + 1]
increment right

1st loop
left = 0
right = 3
sum = sum - arr[left] + arr[right] //3
check if sum is 0
increment left and right

2nd loop
left = 1
right = 4
sum = sum - arr[left] + arr[right] //2
check if sum is zero
increment left and right

3rd loop
left = 2
right = 5
sum = sum - arr[left] + arr[right] //-3
check if sum is zero
increment left and right 
*/

const sum3 = (arr, num) => {
  let sum = 0;
  let zeroSumArray = [];
  let rightBottomLoop = num;
  let left = 0;
  let duplicateArrays = {};
  for (let right = 0; right < num; right++) {
    sum += arr[right];
  }
  if (sum === 0) {
    zeroSumArray.push(arr.slice(0, num));
  }

  while (rightBottomLoop < arr.length) {
    for (let i = rightBottomLoop - 1; i < arr.length; i++) {
      sum = sum - arr[left] + arr[i + 2];
      if (sum === 0) {
        zeroSumArray.push([arr[left], arr[i], arr[i + 1]]);
      }
    }
    left++;
    rightBottomLoop++;
  }
  return zeroSumArray;
};

console.log(sum3([0, 0, 0, 0, 0, 0, 0], 3));

//try for [0,0,0,0]
