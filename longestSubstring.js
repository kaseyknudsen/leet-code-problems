/* Longest Substring Without Repeating Characters 
find the longest string of letters that doesn't not contain repeating letters*/
//we want to use the sliding window pattern
/* sliding window is useful when we have a set of data, like an array or string,
and we're looking for a subset of that data that is continuous*/
//move the window from the left to the right
/* calculate the sum of the current window by subtracting the first element of the previous window and adding the next element of the current window */
// function maxSubArraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum; //6

//   for (let i = num; i < arr.length; i++) {
//     /* here we are taking the previous sum of the 3 numbers, subtracting the 1st value of the 3 nums and adding the the value at the new index */
//     console.log(`tempSum: ${tempSum}, - arr[i-num]: ${arr[i - num]}, + arr[i]: ${arr[i]}`);
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//     console.log(`maxSum: ${maxSum}`);
//   }
//   return maxSum;
// }

// const maxSubArraySum = (arr, num) => {
//   //create 2 variables for the maximum sub and the temporary sum
//   let maxSum = 0;
//   let tempSum = 0;
//   //create the first window
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   //make the tempSum = maxSum
//   tempSum = maxSum;
//   //create the code that takes the temporary sum, subtracts the 1st num and adds the next num
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// };

// console.log(maxSubArraySum([1, 2, 3, 4, 3, 2, 1], 3));

//brute force method. Bad.
const isUnique = (s) => {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return false;
    }
    set.add(s[i]);
  }
  return true;
};

// const longestSubString = (s) => {
//   let max = 0;
//   for (let begin = 0; begin < s.length; begin++) {
//     for (let end = begin; end < s.length; end++) {
//       //this will give us all possible substrings
//       const substring = s.substring(begin, end + 1);
//       if (isUnique(substring)) {
//         max = Math.max(max, substring.length);
//       }
//     }
//   }
//   return max;
// };

// console.log(longestSubString("abcacbacb"));

//optimal solutions
//hash map
const longestSubString = (s) => {
  let max = 0;
  let begin = 0;
  let map = {};
  for (let end = 0; end < s.length; end++) {
    if (map[s[end]] !== undefined && map[s[end]] >= begin) {
      begin = map[s[end]] + 1;
    }
    map[s[end]] = end;
    max = Math.max(max, end - begin + 1);
  }
  return max;
};


console.log(longestSubString("abcacbacb"));

console.log(maxSubArraySum([1, 2, 3, 4, 3, 2, 1], 3));

console.log(lengthOfLongestSubstring('abcabcbb'))