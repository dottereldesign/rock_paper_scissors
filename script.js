ngeru = "Ngeru";
kaumatua = "Kaumātua";
piwakawaka = "Pīwakawaka";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 1) {
    return ngeru;
  } else if (randomNumber === 2) {
    return piwakawaka;
  } else {
    return kaumatua;
  }
}

const getNgeruBtn = document.querySelector("#ngeru_btn");
getNgeruBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = ngeru;
  return playRound(playerSelection, computerSelection);
});

const getPiwakawakaBtn = document.querySelector("#piwakawaka_btn");
getPiwakawakaBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = piwakawaka;
  console.log(playRound(playerSelection, computerSelection));
  return playRound(playerSelection, computerSelection);
});

const getKaumatuaBtn = document.querySelector("#kaumatua_btn");
getKaumatuaBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = kaumatua;
  return playRound(playerSelection, computerSelection);
});

function myFunction1() {
  document.getElementById("score_user").innerHTML += playerScore;
}

function myFunction2() {
  document.getElementById("score_computer").innerHTML += computerScore;
}

myFunction1();
myFunction2();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    document.getElementById("summary").innerHTML = "Draw!";
  } else if (playerSelection === ngeru && computerSelection === piwakawaka) {
    document.getElementById("score_user").innerHTML = playerScore++;
    document.getElementById("summary").innerHTML =
      "Ngeru beats Pīwakawaka, you win!";
  } else if (playerSelection === ngeru && computerSelection === kaumatua) {
    document.getElementById("score_computer").innerHTML = computerScore++;
    document.getElementById("summary").innerHTML =
      "Kaumātua beats Ngeru, you lose!";
  } else if (playerSelection === kaumatua && computerSelection === piwakawaka) {
    document.getElementById("score_computer").innerHTML = computerScore++;
    document.getElementById("summary").innerHTML =
      "Pīwakawaka beats Kaumātua, you lose!";
  } else if (playerSelection === kaumatua && computerSelection === ngeru) {
    document.getElementById("score_user").innerHTML = playerScore++;
    document.getElementById("summary").innerHTML =
      "Kaumātua beats Ngeru, you win!";
  } else if (playerSelection === piwakawaka && computerSelection === ngeru) {
    document.getElementById("score_user").innerHTML = computerScore++;
    document.getElementById("summary").innerHTML =
      "Ngeru beats Pīwakawaka, you lose!";
  } else if (playerSelection === piwakawaka && computerSelection === kaumatua) {
    document.getElementById("score_user").innerHTML = playerScore++;
    document.getElementById("summary").innerHTML =
      "Pīwakawaka beats Kaumātua, you win!";
  }
}

// function game() {
//   let gameLength = 5;
//   for (let i = 0; i < gameLength; i++) {
//     playerSelection = prompt("Ngeru, Kaumatua, or Scissors?");
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(playerScore, computerScore);
//   }
// }
