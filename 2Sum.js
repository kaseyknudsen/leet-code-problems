/* given an array of integers and a target,
return indices of the 2 numbers such that they
add up to target

You may assume that each input would have exactly
one solution, and you may not use the same
element twice 

*/

const sum2 = (inputArray, target, nums) => {
  const pairsArray = [];
  const pairsObj = {};
  const sortedArray = inputArray.sort((a, b) => a - b);
  for (let i = 0; i <= sortedArray.length - nums; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      let pairs = [sortedArray[i], sortedArray[j]];
      if (sortedArray[i] + sortedArray[j] === target) {
        pairsObj[pairs] = (pairsObj[pairs] || 0) + 1;
        if (pairsObj[pairs] < 2) {
          pairsArray.push(pairs);
        }
      }
    }
  }
  return pairsArray;
};

console.log(sum2([1, 3, 1, 2, 2], 4, 2));
