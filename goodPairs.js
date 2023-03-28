//solution 1
const GoodPairs = (nums) => {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        pairs++;
      }
    }
  }
  console.log(pairs);
};
GoodPairs([1, 1, 2, 2, 3, 3, 4, 4]);
