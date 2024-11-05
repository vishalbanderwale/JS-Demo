// let two = document.querySelector("#output2");
// two.innerText = "<h1>hello world</h1>";
// two.innerHTML = "<h1>hello world</h1>";

let input = document.querySelector("#text1");
let btnTranslator = document.querySelector("#btn");
let outputText = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/minion.json";

function urlHandler(inp) {
  return url + "?" + "text=" + inp;
  //adding input value
  // converting text : "?" input param , text is key and inp is value
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong");
}

function clickHandler() {
  //taking input
  let x = input.value;
  // console.log(x);

  //calling server

  fetch(urlHandler(x)) //it will return promise object
    // console.log(fetch(urlHandler(x)))
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((json) => {
      console.log(json);
      let z = json.contents.translated;
      outputText.innerText = z;
    })
    .catch(errorHandler);

  //When you call fetch(), it returns a Promise object, and
  // .then() and .catch() are methods available on that Promise object to handle asynchronous operations.
  //.catch(errorHandler(error): error as parameter is not required when error occurs it directly calls fun)
  // but when we write  errorHandler(error) it will call the func when it reaches that line even if error doesnot occurs
}

btnTranslator.addEventListener("click", clickHandler);
