const sum3 = (arr) => {
  const newArray = arr.sort((a, b) => a - b);
  const zeroSumArray = [];
  for (let i = 0; i < newArray.length - 2; i++) {
    if (i > 0 && newArray[i] === newArray[i - 1]) {
      continue;
    }
    let target = newArray[i] * -1;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (j > i + 1 && newArray[j] === newArray[j - 1]) {
        continue;
      }
      for (let k = newArray.length - 1; k > j; k--) {
        if (k < newArray.length - 1 && newArray[k] === newArray[k + 1]) {
          continue;
        }
        if (newArray[j] + newArray[k] < target) {
          j++;
        } else if (newArray[j] + newArray[k] > target) {
          k--;
        } else {
          zeroSumArray.push([(target * -1), newArray[j], newArray[k]]);
        }
      }
    }
  }

  return zeroSumArray;
};

console.log(sum3([-1, 0, 1, 2, -1, -4, -3, -2, 3]));

/* 
  num = 0
          [ -1, 0, 1, 2, -1, -4, -3, -2, 3 ]
  sorted: [ -4, -3, -2, -1, -1, 0, 1, 2, 3 ]
[ -4, -3, -2, -1, -1, 0, 1, 2, 3 ]
                     [i]
                        [j]
                            [k]


-4 * -1 = 4

j (-3) + k (3) does not equal 4, so j++ if the combo is less than the target. If it's  more than the target, we decrement k
check that j does not equal j - 1
j (-2) + k (3) does not equal 4, and it's less than the target, so j++
check that j does not equal j - 1. 
j (-1) + k (3) does not equal 4 and it's less than the target, so j++
check that j does not equal j - 1. It does, so we skip it...
check that j does not equal j - 1
j (0) + k (3) does not equal 4 and it's less than the target, so j++
check that j does not equal j - 1
j (1) + k (3) does equal 4, so we update the zeroSumArray with i * -1, j, k [-4, 1, 3]
check that j does not equal j - 1
if j is more than it's previous value, it will be more than the target. So do we skip?
j is now at the end of it's range, so we increment i. if i is === to i - 1, we skip it
flip -3 to 3
does j (-2) + k (3) = 3? No, and it's less than the target, so j++
does j === j - 1? No...
does j (-1) + k (3) = 3? No, and it's less than the target, so we increment j
does j === j - 1? yes, so we skip it
does j (0) + k (3) = 3? No, yes, so we add it to the zeroSumArray: [[4, 1, 3], [-3, 0, 3]]
if j is more than it's previous value, it will be more than the target. So do we skip?
i++

is i === to i -1? No...
flip -2 to 2
does j (-1) + k (3) equal 2? Yes, so we add it to the zeroSumArray
[[4, 1, 3], [-3, 0, 3], [-2, -1, 3]]
if j is more than it's previous value, it will be more than the target. So do we skip?
i++
is i === to i -1? No...
flip -1 to 1
is j (0) + k (3) equal to 1? No, it's equal to 3, which is more than 1, so we decrement k
is k === to k + 1? No...
does j (0) + k (2) = 1? No, it equals 2, which is more than 1, so we decrement k
is k === to k + 1? No...
is j(0) + k(1) = to 1? Yes, so we add it to zeroSumArray
[[4, 1, 3], [-3, 0, 3], [-2, -1, 3], [-1, 0, 1]]
k is now at the end of the range, so we increment i
flip i (0 still becomes 0)
is i === to i - 1? yes, so we skip it...
is i === to i - 1? no...
is j(1) + k(3) === to 0? No, and it's more, so we decrement k
is k === to k + 1? No...
is j (1) + k (2) = 0? No, and it's more, but k is out of range so now we are done

[[4, 1, 3], [-3, 0, 3], [-2, -1, 3], [-1, 0, 1]] 
  */

/* 
  -find all possible combinations of 3 numbers that add up to the target
  -triplets cannot repeat
  -you can't use the same index twice in one triplet
  1) sort the newArrayay (cost is nLogN)
  2) create an newArrayay to update with the triplets
  (we need 3 pointer: one at the beginning, one at the end, and one that moves in between
    j & k will act like 2 sum, with the target being the value at i with a flipped operator becase
    if you flip the operator from negative to positive, and the other 2 nums add up to the positie number
    then the 2 together will equal zero)
    3) create an outer for loop for i
    4) create 2 in
  */

//-4 +
