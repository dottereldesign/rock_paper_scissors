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

// const getNgeruBtn = document.getElementById("Ngeru_btn");
// getNgeruBtn.addEventListener("click", playRound);

function chooseNgeru() {
  playerSelection = rock;
  return console.log(playerSelection);
}

let playerSelection;

const getNgeruBtn = document.querySelector("#ngeru_btn");
getNgeruBtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = rock;
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
    return "Draw";
  } else if (playerSelection === rock && computerSelection == scissors) {
    document.getElementById("score_user").innerHTML = playerScore++;
    document.getElementById("summary").innerHTML =
      "Rock beats Scissors, you win!";
    return "Rock beats Scissors, you win!";
  } else if (playerSelection === rock && computerSelection == paper) {
    computerScore++;
    document.getElementById("summary").innerHTML =
      "Paper beats Rock, you lose!";
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
