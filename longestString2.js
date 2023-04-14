const longestSubString = (s) => {
    let max = 0;
    let windowStart = 0;
    let freqCount = {}
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd]
        freqCount[rightChar] = freqCount[rightChar] + 1 || 1
    }
    while (freqCount[rightChar] > 1) {
        let leftChar = freqCount[windowStart]
    }
}

longestSubString('abcbdba')