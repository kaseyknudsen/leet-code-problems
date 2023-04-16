const longestSubString3 = (s) => {
  let max = 0;
  let freqCounter = {};
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right];
    freqCounter[rightChar] = (freqCounter[rightChar] ?? 0) + 1;

    while (freqCounter[rightChar] > 1) {
      leftChar = s[left];
      if (freqCounter[leftChar] > 1) {
        freqCounter[leftChar]--;
      } else {
        freqCounter[leftChar]--
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(longestSubString3("tmmzuxt"));

/* 
   [t m m z u x t ]
//     [
//               ]  
// 
*/
//right: 6
//rightChar: t
//freqCounter: t:1, m:1, z:1, u:1, x:1
//left: 2
//leftChar: m
//max is right - left + 1
//max = 2
