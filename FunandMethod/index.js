/* 
fetch is a function in JavaScript, specifically part of the Fetch API. It is not a method because it is not tied to any specific object—it’s a global function available on the window object in the browser.

Function vs. Method
Function: A block of code that performs a task and is independent of any object. In the browser, functions like fetch, alert, and console.log are available globally, and you can call them directly.

Method: A function that is a property of an object. For example, .log() is a method of the console object, and .querySelector() is a method of the document object.
So, fetch() is a global function, and we call it directly without needing to refer to an object.
*/

//Why .then() and .catch() are Methods
//Method Definition: A method is a function associated with an object,
// and in this case, that object is a Promise.

//Promise Methods: When you call fetch(), it returns a Promise object, and
// .then() and .catch() are methods available on that Promise object to handle asynchronous operations.

//Explanation of .then() and .catch() on a Promise
//.then(callback): This method registers a callback function that executes
//when the Promise resolves successfully.
//.catch(callback): This method registers a callback function to handle
// any errors if the Promise is rejected.
