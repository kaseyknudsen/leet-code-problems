//solution 1
const GoodPairs = () => {
  const arr = [1, 2, 4, 3, 5, 6, 1, 3];
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        pairs++;
      }
    }
  }
  console.log(pairs);
};
GoodPairs();

// const GoodPairs = (nums) => {
//   const freqCounter = {};
//   let pairs = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (freqCounter[nums[i]]) {
//       freqCounter[nums[i]] += 1;
//     } else {
//       freqCounter[nums[i]] = 1;
//     }
//   }
//   const values = Object.values(freqCounter);
//   values.forEach((value) => {
//     value > 1 ? (pairs += 1) : null;
//   });
//   return pairs;
// };


