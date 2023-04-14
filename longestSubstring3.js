const longestSubString3 = (s) => {
  let max = 0;
  let freqCounter = {};
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right];
    freqCounter[rightChar] = (freqCounter[rightChar] ?? 0) + 1;
    if (freqCounter[rightChar] > 1) {
      max = Math.max(max, right - left);
    }
    while (freqCounter[rightChar] > 1) {
      leftChar = s[left];
      if (freqCounter[leftChar] > 1) {
        freqCounter[leftChar]--;
      }
      left++;
    }
  }
  return max;
};

console.log(longestSubString3("abcbaef"));

/* right = 0
rightChar = a
a: 1
right = 1
rightChar = b
b: 1
right = 2
rightChar = c
c: 1
right = 3
rightChar = b
b: 2
max is equal to 3 - 0

*/
