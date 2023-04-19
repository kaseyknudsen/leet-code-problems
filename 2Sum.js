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
  console.log(hashMap);
  return pairsArray;
};

console.log(sum2([1, 2, 4, 5, 7, 3], 6));

/* 
compliment number = 6 - 1 = 5
{
  1: 0
}
compliment number = 6 - 2 = 4
{
  1: 0
  2: 1
}
compliment number = 6 - 4 = 2
{
  1: 0
  2: 1 -- we have a match!
}
push 1, 2 to the array

compliment number = 6 - 5 = 1
there is a 1 in the hashMap, so we push 0 & 3 to the array
{
  1: 0
  2: 1 -- we have a match!

}
*/