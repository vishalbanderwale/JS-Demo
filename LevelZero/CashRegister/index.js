let x = document.querySelector("#bill");
let y = document.querySelector("#amount");
let z = document.querySelector("#btn");

let notes = document.querySelectorAll(".no-of-notes");

let paragraph = document.querySelector("#para");

const arr = [2000, 500, 200, 100, 20, 10, 1];

function cashManger() {
  const billAmount = Number(x.value);
  const cashGiven = Number(y.value);
  if (billAmount > 0) {
    if (cashGiven > billAmount) {
      const cashToBeReturned = cashGiven - billAmount; //2800-300=2500
      console.log(cashToBeReturned);
      calculationAmount(cashToBeReturned);
    } else {
      showMessage("cash must be greater than bill amount");
    }
  } else {
    showMessage("invalid bill amount");
  }
}

function calculationAmount(cashToBeReturned) {
  for (let i = 0; i < arr.length; i++) {
    let noOfNotes = Math.trunc(cashToBeReturned / arr[i]); // iteration-1:2500/2000:1(1 note of 2000) //iteration 2:500/500:1
    console.log(noOfNotes);

    //updating the remaining amount after calculating the no of notes
    cashToBeReturned = cashToBeReturned % arr[i]; //500%2000:500(remaining amount) // 500%500:0

    //updating the no of notes in table
    notes[i].innerText = noOfNotes; //it will return an array
  }
}

function showMessage(err) {
  paragraph.innerHTML = err;
}

z.addEventListener("click", cashManger);
