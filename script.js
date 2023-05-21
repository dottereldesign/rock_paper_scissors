rock = "Rock";
paper = "Paper";
scissors = "Scissors";

playerScore = 0;
computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 1) {
    return rock;
  } else if (randomNumber === 2) {
    return scissors;
  } else {
    return paper;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === rock && computerSelection == scissors) {
    playerScore++;
    return "Rock beats Scissors, you win!";
  } else if (playerSelection === rock && computerSelection == paper) {
    computerScore++;
    return "Paper beats Rock, you lose!";
  } else if (playerSelection === paper && computerSelection == scissors) {
    computerScore++;
    return "Scissors beats Paper, you lose!";
  } else if (playerSelection === paper && computerSelection == rock) {
    playerScore++;
    return "Paper beats Rock, you win!";
  } else if (playerSelection === scissors && computerSelection == rock) {
    computerScore++;
    return "Rock beats Scissors, you lose!";
  } else if (playerSelection === scissors && computerSelection == paper) {
    playerScore++;
    return "Scissors beats Paper, you win!";
  }
}

const computerSelection = getComputerChoice();

const getNgeruBtn = document.getElementById("Ngeru_btn");
getNgeruBtn.addEventListener("click", chooseNgeru);

function chooseNgeru() {
  let playerSelection = rock;
  return playerSelection;
}

const getPiwikawakaBtn = document.getElementById("Piwikawaka_btn");
getPiwikawakaBtn.addEventListener("click", choosePiwikawaka);

function choosePiwikawaka() {
  let playerSelection = paper;
  return playerSelection;
}

const getKaumatuaBtn = document.getElementById("Kaumatua_btn");
getKaumatuaBtn.addEventListener("click", chooseKaumatua);

function chooseKaumatua() {
  let playerSelection = scissors;
  return playerSelection;
}

function myFunction1() {
  document.getElementById("result").innerHTML += playerScore;
}

myFunction1();

// function game() {
//   let gameLength = 5;
//   for (let i = 0; i < gameLength; i++) {
//     playerSelection = prompt("Rock, Paper, or Scissors?");
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(playerScore, computerScore);
//   }
// }

// game();

// Ngeru(Cat) -> Piwakawaka(Fantail) -> Kaumatua(Elder)
