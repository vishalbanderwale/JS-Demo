

let obj1 = { a: 1, b: 2 }; //memory location-1
let obj2 = { a: 1, b: 2 }; //memory location-2
obj3 = obj1;
console.log(obj1 == obj2);
console.log(obj3 === obj1); //same memory location as 1

const array = [1, 2, 3];
array1 = array;
console.log(array1 === array);


const array3=[1,2]
const array4=[2,3]
 console.log(array3=array4)

// examples from console

// let array1=[1,2,3]
// undefined
// let array2=[4,5,6]
// undefined
// array1=array2
// (3) [4, 5, 6]
// array3=array1
// (3) [4, 5, 6]
// const array4=[1,2,3]
// undefined
// const array5=[5,6,7]
// undefined
// array4=array5
// VM648:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:7
// (anonymous) @ VM648:1Understand this error
// array7=array5
// (3) [5, 6, 7]
// array5=array9
// VM713:1 Uncaught ReferenceError: array9 is not defined
//     at <anonymous>:1:1
