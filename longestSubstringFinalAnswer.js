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
        delete freqCounter[leftChar];
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(longestSubString3("tmmzuxt"));

