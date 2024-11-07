let x = document.querySelector("#bill");
let y = document.querySelector("#amount");
let z = document.querySelector("#btn");

function cashManger() {
  if (x.value > y.value) {
    console.log("enter cash  greater than bill amount");
  } else {
    console.log(y.value);
  }
}

z.addEventListener("click", cashManger);


bill:100
amount:200

res:200-100=100