const array = [1, 2, 3, 4, 5, 6];

//call back fun: must return booelan (true and false)
//filter will return array with only true values
const filterFun = (arr) => arr.filter((a) => a % 2 != 0);

console.log(filterFun(array));

const array2 = [1, 10, 20, 30];

const filterFun2 = (arr2) => arr2.filter((a) => a > 10);
console.log(filterFun2(array2));
