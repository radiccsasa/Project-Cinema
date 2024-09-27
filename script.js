const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const number = document.getElementById("number");
const bill = document.getElementById("bill");
const seats = document.getElementsByClassName("seat");

let numberOfTickets = 1;
let moviePrice = 10;
console.log(seats);

increase.onclick = function () {
  clearSeats();
  if (numberOfTickets == 64) {
    increase.disabled = true;
  }
  numberOfTickets++;
  number.textContent = numberOfTickets;
  decrease.disabled = false;
  bill.textContent = moviePrice * numberOfTickets + "$";
};
decrease.onclick = function () {
  clearSeats();
  numberOfTickets--;
  if (numberOfTickets == 0) {
    decrease.disabled = true;
    numberOfTickets = 1;
  }

  increase.disabled = false;
  number.textContent = numberOfTickets;
  bill.textContent = moviePrice * numberOfTickets + "$";
};

function clearSeats() {
  const seatsArray = Array.from(seats);
  seatsArray.forEach((e) => {
    if (e.style.backgroundColor == "greenyellow") {
      e.style.backgroundColor = "white";
    }
  });
  selectedSeats = 0;
}

let selectedSeats = 0;

function selectSeat(element) {
  if (selectedSeats == numberOfTickets) {
    if (element.style.backgroundColor == "greenyellow") {
      element.style.backgroundColor = "white";
      selectedSeats--;
    } else return;
  } else if (element.style.backgroundColor == "rgb(255, 94, 94)") {
    return;
  } else if (element.style.backgroundColor == "greenyellow") {
    element.style.backgroundColor = "white";
    selectedSeats--;
  } else {
    element.style.backgroundColor = "greenyellow";
    selectedSeats++;
  }
}

function onSubmit(event) {
  event.preventDefault();
  const divMessage = document.getElementById("divSubmitMessage");
  const submitMessage = document.getElementById("submitMessage");
  const bodyElement = document.body;
  bodyElement.classList.add("blur-active");
  divMessage.style.display = "flex";
  const email = document.getElementById("email");
  let text;
  if (email.value == "") {
    text = "Write email on which you want tickets to be sent!";
  } else {
    text = `Tickets will be sent on this email: ${email.value} \n
    For payment: ${moviePrice * numberOfTickets}$`;
  }
  submitMessage.textContent = text;
  setInterval(() => {
    divMessage.style.display = "none";
    submitMessage.textContent = "";
    bodyElement.classList.remove("blur-active");
  }, 3500);
}
