const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 1) {
    document.getElementById("score_card-2").className = "score_card-rock";
    return rock;
  } else if (randomNumber === 2) {
    document.getElementById("score_card-2").className = "score_card-scissors";
    return scissors;
  } else {
    document.getElementById("score_card-2").className = "score_card-paper";
    return paper;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === scissors) {
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML =
      "Rock beats scissors, you win!";
    document.getElementById("summary").style.color = "hsl(120, 80%, 55%)";
  } else if (playerSelection === rock && computerSelection === paper) {
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "Paper beats rock, you lose!";
    document.getElementById("summary").style.color = "hsl(0, 80%, 55%)";
  } else if (playerSelection === paper && computerSelection === scissors) {
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "Scissors beats paper, you lose!";
    document.getElementById("summary").style.color = "hsl(0, 80%, 55%)";
  } else if (playerSelection === paper && computerSelection === rock) {
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML = "Paper beats rock, you win!";
    document.getElementById("summary").style.color = "hsl(120, 80%, 55%)";
  } else if (playerSelection === scissors && computerSelection === rock) {
    document.getElementById("score_computer").innerHTML = ++computerScore;
    document.getElementById("summary").innerHTML =
      "Rock beats scissors, you lose!";
    document.getElementById("summary").style.color = "hsl(0, 80%, 55%)";
  } else if (playerSelection === scissors && computerSelection === paper) {
    document.getElementById("score_user").innerHTML = ++playerScore;
    document.getElementById("summary").innerHTML =
      "Scissors beats paper, you win!";
    document.getElementById("summary").style.color = "hsl(120, 80%, 55%)";
  } else {
    document.getElementById("summary").innerHTML = "Draw!";
    document.getElementById("summary").style.color = "#00FFFF";
  }
}

const getRockBtn = document.querySelector("#rock_btn");
getRockBtn.addEventListener("click", () => {
  document.getElementById("score_card-1").className = "score_card-rock";
  computerSelection = getComputerChoice();
  playerSelection = rock;
  return playRound(playerSelection, computerSelection);
});

const getScissorsBtn = document.querySelector("#scissors_btn");
getScissorsBtn.addEventListener("click", () => {
  document.getElementById("score_card-1").className = "score_card-scissors";
  computerSelection = getComputerChoice();
  playerSelection = scissors;
  return playRound(playerSelection, computerSelection);
});

const getPaperBtn = document.querySelector("#paper_btn");
getPaperBtn.addEventListener("click", () => {
  document.getElementById("score_card-1").className = "score_card-paper";
  computerSelection = getComputerChoice();
  playerSelection = paper;
  return playRound(playerSelection, computerSelection);
});

document.getElementById("score_user").innerHTML = playerScore;
document.getElementById("score_computer").innerHTML = computerScore;
