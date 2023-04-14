const longestSubString = (s) => {
  let max = 0;
  let freqCounter = {};
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right];
    freqCounter[rightChar] = (freqCounter[rightChar] ?? 0) + 1;

    while (freqCounter[rightChar] > 1) {
        let leftChar = s[left]
        left++
        
    }
  }
};
