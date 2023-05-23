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

// function currentHand() {
//   let currentRock = document.getElementbyID;
//   if (playerSelection === rock) {
//     document.getElementById("score_card-1").classList.add("score_card-rock");
//     document
//       .getElementById("score_card-2")
//       .classList.add("score_card-scissors");
//     var el = document.getElementById("divID");
//     // Removing class
//     el.classList.remove("my-class");
//   }
// }

function playRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === scissors) {
    document.getElementById("score_card-1").className = "score_card-rock";
    document.getElementById("score_card-2").className = "score_card-scissors";
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML =
      "rock beats scissors, you win!";
    return showWinner();
  } else if (playerSelection === rock && computerSelection === paper) {
    document.getElementById("score_card-1").className = "score_card-rock";
    document.getElementById("score_card-2").className = "score_card-paper";
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "paper beats rock, you lose!";
    return showWinner();
  } else if (playerSelection === paper && computerSelection === scissors) {
    document.getElementById("score_card-1").className = "score_card-paper";
    document.getElementById("score_card-2").className = "score_card-scissors";
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "scissors beats paper, you lose!";
    return showWinner();
  } else if (playerSelection === paper && computerSelection === rock) {
    document.getElementById("score_card-1").className = "score_card-paper";
    document.getElementById("score_card-2").className = "score_card-rock";
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML = "paper beats rock, you win!";
    return showWinner();
  } else if (playerSelection === scissors && computerSelection === rock) {
    document.getElementById("score_card-1").className = "score_card-scissors";
    document.getElementById("score_card-2").className = "score_card-rock";
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "rock beats scissors, you lose!";
    return showWinner();
  } else if (playerSelection === scissors && computerSelection === paper) {
    document.getElementById("score_card-1").className = "score_card-scissors";
    document.getElementById("score_card-2").className = "score_card-paper";
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML =
      "scissors beats paper, you win!";
    return showWinner();
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
    document.getElementById("winner").innerHTML = "You win!";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score_user").innerHTML = playerScore;
    document.getElementById("score_computer").innerHTML = computerScore;
  } else if (computerScore === 5) {
    document.getElementById("winner").innerHTML = "You lose!";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score_user").innerHTML = playerScore;
    document.getElementById("score_computer").innerHTML = computerScore;
  }
}
