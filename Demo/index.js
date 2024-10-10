let a = 10;
let b = 5;
let c = false;
let d = undefined;
let f = null;
console.log(b + a);
let res = a * b;
console.log(res);

let nameFirst = "vishal";
nameFirst = "singh";
console.log(nameFirst);

//hoisting: only var  declartion are hosited at top var result so result is undefined, for let,const result:error
console.log(result);
var result = "name";

//objects

let obj1 = { a: 1, b: 2 };
obj1.a = "singh";
console.log(obj1);

// arrays
// last element of array: array[array.length-1]

let array1 = [1, 2, 3, 4, 5];
array1.push(8);
console.log(array1.length);

//variables: are used to store information(data value) ex:let,const,var
// Always use let for better practice ES6 before we use to have var
//if we dont decalre value to variable than its  undefined
// for variable follow camel case notation  for best practice: firstletter of first word lowercase than uppercase for second word,third...
// 3 types of variable in js : let,const,var
// variable declartion syntax : keyword(let,const,var) variable name(also know as identifiers): let a; than initalize a variable : keyword var name=value : let a=10;
// In let we can  reintialze a value but in constant it will throw an error
// primitive data types/value types : numbers,string, booelan, null,undefined
// Non primitive data types : objects,array,function
// let and const are block scope(only can be accessed inside block) var is functional scope
//hoisting: var variables are hoisted at the top we can access before declartion only decalrtion are hosited at top so value is undefined
// in var we get result: undefined , for let ,const : reference error
