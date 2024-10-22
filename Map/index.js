const array = [1, 2, 3, 4];
const squareFun = (a) => a * a;

const mainFun = (a) => a.map(squareFun); //map will return array
//Map is also an function : map()
//Map takes callback fun as an argument
//we are not doing fun call for squareFun because it takes one element and index at a time
//Also called as call back function
// map will iterate on array and array of objects: but not work with objects

console.log(mainFun(array));

const array2 = ["vishal", "singh", "hi"];

const strFun = (array) => array.map((a) => a.length);

console.log(strFun(array2));

const array3 = [{ name: "vishal" }, { name: "singh" }, { name: "Sonu" }];

const nameFun = (arr) => arr.map(({ name }) => name);
console.log(nameFun(array3));
