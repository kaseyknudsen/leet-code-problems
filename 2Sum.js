/* given an array of integers and a target,
return indices of the 2 numbers such that they
add up to target

You may assume that each input would have exactly
one solution, and you may not use the same
element twice 

*/

const sum2 = (inputArray, target) => {
  const hashMap = {};
  const pairsArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    let compliment_number = target - inputArray[i];
    if (hashMap[compliment_number] !== undefined) {
      pairsArray.push([hashMap[compliment_number], i]);
    } else {
      hashMap[inputArray[i]] = i;
    }
  }
  return pairsArray;
};

console.log(sum2([1, -1, 0, 0, 3, -2], 0));

/* 
cn = -1
hashmap{1: 0}

cn = 1


*/



/* 

CN = 6 - 1 = 5
CN = 6 - 2 = 4
CN = 6 - 4 = 2
**push 1 & 2 to array
CN = 6 - 5 - 1
**push 0 & 3 to array
CN = 6 - 7 = -1
CN = 6 - 3 = 3

{
  1: 0
  2: 1
  7: 4
  3: 5

}
*/