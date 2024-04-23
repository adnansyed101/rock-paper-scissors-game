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


  if (score.player > score.computer) {
    return "Player has won the game";
  } else if (score.player < score.computer) {
    return "Computer has won the game";
  } else {
    return "Draw";
  }
}

console.log(score);
