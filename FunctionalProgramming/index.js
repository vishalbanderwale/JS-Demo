//Immutability:Dont change(mutate) any data given to you like in obj1 :always make a new copy obj2 and make changes in obj2

const obj1 = { name: "vishal", age: 25 };
const obj2 = obj1; //make a copy of obj1 for obj2:any changes in obj2 will reflect in obj1 also because both pointing to same memory location
obj2.age = 20;
obj2.gender = "male";
console.log(obj1); //20 It will return  a copy of obj : donot change anything in original  data
console.log(obj2); //20

const vishalObj = { age: 25 };
const vishalObj1 = { ...vishalObj, age: vishalObj.age - 5, name: "vis" }; //created a new obj with copy of vishalObj using spread operator

vishalObj.age = 45;
console.log(vishalObj);
console.log(vishalObj1);

const array = ["v", "i", "s", "h", "a", "l"];
const array2 = [...array, "s", "i", "n", "g", "h"];

console.log(array);
console.log(array2);

//pure functions: same input  the output will always be same
//not all functions are pure function

//sample-1: Better practice
const person = { name: "vishal", age: 25 };
const birthday = (obj) => ({ ...obj, age: obj.age + 1 });

console.log(birthday(person));

//sample-2
const person1 = { name: "vishal", age: 50 };
const birthday1 = ({ age }) => ({ age: age + 1 });
//if i destructure only age than it will take age as an argument from person1 obj
console.log(birthday1(person1));

const product = { name: "book", quantity: 20 };
const productFun = (pro) => ({ ...pro, quantity: pro.quantity + 5 });
console.log(productFun(product));

// function add(a, b) {
//   return [a, b];
// }

// console.log(add(3, 4));

// const add1 = (a, b) => {
//   return a + b;
// };
// const add2=(a,b)=>a+b;
// console.log(add1(1, 1));
