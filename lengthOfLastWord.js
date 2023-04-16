//solution 1
const lengthOfLastWord = (s) => s.trim().split(" ").splice(-1).join().length;
console.log(lengthOfLastWord("hello, how are you doing"));

//solution 2
var lengthOfLastWord2 = function (s) {
  const arrWordsWithoutSpaces = s.split(" ").filter((word) => word !== "");
  return arrWordsWithoutSpaces[arrWordsWithoutSpaces.length - 1].length;
};

console.log(lengthOfLastWord2("hello, how are you doing"));
lengthOfLastWord("hello, how are you doing");
