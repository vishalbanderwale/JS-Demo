//Dynamic fields

const obj1 = { key: "vishal" };
console.log(obj1.key);

const age1 = "sonu";
const obj2 = { [age1]: "25" };
console.log(obj2.sonu);

//shorhand obj property

// if var and obj key are same we can remove the one name

const name = "vishal";
const age = 24;

const obj3 = { name, age };
// const obj3={name:name,age:age}
console.log(obj3);

const naam = "singh";
const age3 = 25;
const obj4 = { name: naam, age: age3 };
// const obj3={name:naam,age:age3}
const res = Object.values(obj4);
console.log(res);
console.log(obj4);
console.log(JSON.stringify(obj4)); //JSON.stringify(convert normal obj to string obj)

//Template literal

const greeting = "hello";
console.log("hi " + greeting);

const greeting2 = "hello";
console.log(`hi ${greeting2} how r u`);

//Anonamysus function
const fun = () => "hi hello";

console.log(`${fun()} how r u `);

//Module(means one file)import/export functions

//export default function fun1() {
//return "one";
//}

function fun2() {
  return "two";
}

// there should be only one default function in file
//import fun1 from index.js

// for normal function we use {}
//export {fun2,fun3}
//import {fun2,fun3} from "index.js"

// rename export {fun2 as fun4}: import {fun4 as fun5}

// nullish coalescing operator (??): it provide default value if it is null or undefined ||  similar as OR operator(||):it work if true else give default value (true:1,false:0)

const obj8 = {
  name: "vishal",
  age: null,
};

console.log(obj8.name ?? "singh"); //vishal
console.log(obj8.age ?? 18); //18

//optional chaining: access deeply nested properties of an object without having to explicitly check if each reference in the chain exists If any part of the chain is null or undefined, it returns undefined instead of throwing an runtime error.

const obj9 = {
  name: "vishal",
  age: 25,
  address: {
    street: "ziyaguda",
    area: "basava mandap",
    house: null,
  },
};

console.log(obj9.address?.street);
console.log(obj9.address?.house);
console.log(obj9.address?.pincode);
console.log(obj9.address?.pincode);
