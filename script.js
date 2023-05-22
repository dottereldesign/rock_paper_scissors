const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore = 0;
let computerScore = 0;

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
  if (playerSelection === rock && computerSelection === scissors) {
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML =
      "rock beats scissors, you win!";
    return console.log(playerScore);
  } else if (playerSelection === rock && computerSelection === paper) {
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "paper beats rock, you lose!";
  } else if (playerSelection === paper && computerSelection === scissors) {
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "scissors beats paper, you lose!";
  } else if (playerSelection === paper && computerSelection === rock) {
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML = "paper beats rock, you win!";
  } else if (playerSelection === scissors && computerSelection === rock) {
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "rock beats scissors, you lose!";
  } else if (playerSelection === scissors && computerSelection === paper) {
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML =
      "scissors beats paper, you win!";
  } else {
    document.getElementById("summary").innerHTML = "Draw!";
  }
}

const getRockBtn = document.querySelector("#rock_btn");
getRockBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = rock;
  return playRound(playerSelection, computerSelection);
});

const getScissorsBtn = document.querySelector("#scissors_btn");
getScissorsBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = scissors;
  return playRound(playerSelection, computerSelection);
});

const getPaperBtn = document.querySelector("#paper_btn");
getPaperBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = paper;
  return playRound(playerSelection, computerSelection);
});

document.getElementById("score_user").innerHTML = playerScore;
document.getElementById("score_computer").innerHTML = computerScore;

function showWinner() {
  if (playerScore === 5) {
    winner = getElementById.("#winner");
    
  }
}

// function game() {
//   let gameLength = 5;
//   for (let i = 0; i < gameLength; i++) {
//     playerSelection = prompt("rock, paper, or Scissors?");
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(playerScore, computerScore);
//   }
// }
