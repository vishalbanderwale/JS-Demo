//It will return first true value: it will not return an array

const array = [1, 3, 4, 5, 20];

const findFun = (arr) => arr.find((a) => a % 2 == 0);

console.log(findFun(array));
