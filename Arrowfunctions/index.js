//ES5 function

function sum(a, b) {
  let res = a - b;
  console.log(res);
}

sum(9, 4); //(9,4): arguements are value passed to the functions and parameters a,b are name given to the function arguments

//ES6-arrow functions

const add = (a, b) => {
  let res = a - b;
  console.log(res);
};

add(1, 1);

const isOne = (num) => num == 1;

console.log(isOne(2));

// 1==1 will check only value  But 1===1 it will check data type and value
function isTwo(num) {
  return num == 1;
}

console.log(isTwo(1));

const bigger = (num) => num > 22;
console.log(bigger(45));

function isThree(a) {
  return { value: a };
}

console.log(isThree(2));

const isFour = (a) => ({ value: a });

console.log(isFour(2));

//Default parameters

//passing ony one number when (a,b): fun(6) result:NAN)not a number
//fun(2,):syntax error
//fun(2,undefined): 2+0:2

const fun = (a, b = 0) => a + b;
console.log(fun(6, 2));

//rest:it takes a,b outisde and remaining it keep the all values in one array in rest mode

const restFun = (a, b, ...rest) => {
  console.log(a, b, rest);
};

restFun(1, 2, 3, 4, 5);

// array is collection of anything ex: const array=[1,"2",{a:1,b:3},null]

//spread: takes out value from array it spreads an array

const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8, ...a];
console.log(b);

//destructing

function des({ a, b }) {
  console.log(a, b);
}

des({ a: 2, b: 6 });

const jes = ({ a, b }) => {
  console.log(a, b);
};

jes({ a: 1, b: 3 });

const obj10 = { first: 1, second: 9 };
const { first, second } = obj10;
console.log(first, second);

const array10 = [3, 4];
const [three, four] = array10;
console.log(three, four);

//restructing: remane parameter

const obj11 = { first: 1, second: 9 };
const { first: hi, second: hello } = obj11;
console.log(hi, hello);

// const array11 = [1, 2];
// const [five: vishal, six: singh] = array11;
// console.log(vishal, singh);

// we cannot restruct array becauses ae are not assiging to five and six
