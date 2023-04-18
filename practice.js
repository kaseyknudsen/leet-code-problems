const array = [1, 3, 1, 2, 2];
//map function is creating an array of objects
//each object has a value and it's associated index
const sortedArray = array
  .map((value, index) => ({
    value,
    index,
  }))
  //the sort method is sorting each object by it's value
  .sort((a, b) => a.value - b.value);

console.log(sortedArray);



