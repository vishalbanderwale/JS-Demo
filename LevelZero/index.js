let input = document.querySelector("#text1");
let btnTranslator = document.querySelector("#btn");
let ouput = document.querySelector("#output");

// let two = document.querySelector("#output2");
// two.innerText = "<h1>hello world</h1>";
// two.innerHTML = "<h1>hello world</h1>";

var url = "https://api.funtranslations.com/translate/minion.json";

function translatorFun() {
  output.innerText = "hello" + input.value;
}

btnTranslator.addEventListener("click", translatorFun);

//callback function: if one function goes as input of other function
