const playerChoices = document.querySelectorAll(".btn");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const choicesUI = document.querySelector("#choicesUI");
const resultsUI = document.querySelector("#resultsUI");

let score = { player: 0, computer: 0 };
console.log(playGame());

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(player, computer) {
  if (player === "rock" && computer === "scissor") {
    score.player += 1;
    return "Player Wins";
  } else if (player === "paper" && computer === "rock") {
    score.player += 1;
    return "Player Wins";
  } else if (player === "scissor" && computer === "paper") {
    score.player += 1;
    return "Player Wins";
  } else if (player === computer) {
    return "Draw";
  } else {
    score.computer += 1;
    return "Computer Wins";
  }
}

function playGame() {
  const computerChoice = getComputerChoice();
  const playerChoice = e.target.id;

  playRound(playerChoice, computerChoice);

  playerScore.textContent = score.player;
  computerScore.textContent = score.computer;

 
}
