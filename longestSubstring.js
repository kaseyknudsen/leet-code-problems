/* Longest Substring Without Repeating Characters 
find the longest string of letters that doesn't not contain repeating letters*/
//we want to use the sliding window pattern
/* sliding window is useful when we have a set of data, like an array or string,
and we're looking for a subset of that data that is continuous*/
//move the window from the left to the right
/* calculate the sum of the current window by subtracting the first element of the previous window and adding the next element of the current window */
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; //6

  for (let i = num; i < arr.length; i++) {
    console.log(`tempSum: ${tempSum}, - arr[i-num]: ${arr[i - num]}, + arr[i]: ${arr[i]}`);
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    console.log(`maxSum: ${maxSum}`);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 3, 2, 1], 3));
