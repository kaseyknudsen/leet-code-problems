/* given an array of integers and a target,
return indices of the 2 numbers such that they
add up to target

You may assume that each input would have exactly
one solution, and you may not use the same
element twice 

*/

const sum2 = (inputArray, target, nums) => {
  const pairsArray = [];
  const freqCounter = {};
  const sortedInputArray = inputArray
    .map((value, index) => {
      value, index;
      console.log(value, index)
    })
    .sort((a, b) => a.value - b.value);
  for (let i = 0; i <= inputArray.length - nums; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (sortedInputArray[i] + sortedInputArray[j] === target) {
        let pairs = [sortedInputArray[i], sortedInputArray[j]];
        freqCounter[pairs] = (freqCounter[pairs] || 0) + 1;
        if (freqCounter[pairs] < 2) {
          pairsArray.push([i, j]);
        }
      }
    }
  }
  return pairsArray;
};

console.log(sum2([1, 3, 1, 2, 2], 4, 2));
//should return ([0, 1], [1, 2], [3, 4])
