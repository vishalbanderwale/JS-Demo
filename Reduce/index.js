//array.reduce((acc,curr,current index)=>{},inital value)
//current value: curr element
//accumulator:first value of array(prev value of curr) if we dont mention inital value|| inital value
//acc is name of variable
//reduce:iterate over every element array
//reduce returns value

const array = [1, 2, 3, 4];

const reduceFun = (a) => a.reduce((acc, curr) => acc + curr, 0);
//acc takes updated value after addition: 0+1:1 ,1+2:3

console.log(reduceFun(array));

//sum of all odd numbers

const array1 = [1, 2, 3, 4, 5, 6, 7]; //16

const reduceFun2 = (a) =>
  a.reduce((acc, curr) => {
    console.log(acc, curr); //(0,1), (1,2),(1,3),(4,4),(4,5),(9,6),(9,7)
    if (curr % 2 != 0) {
      acc = acc + curr; //(0+1=1:acc), (1+3=4:acc) (4+5=9:acc) (9+7:16)
    } else {
      return acc;
    }
    return acc;
  }, 0);

console.log(reduceFun2(array1));

//sum of pages

const books = [
  { title: "vishal", pages: 100 },
  { title: "singh", pages: 100 },
  { title: "sonu", pages: 100 },
];

const reduceFun3 = (a) => a.reduce((acc, { pages }) => acc + pages, 0);

console.log(reduceFun3(books));
