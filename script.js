const playerChoices = document.querySelectorAll(".btn");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const choicesUI = document.querySelector("#choicesUI");
const resultsUI = document.querySelector("#resultsUI");

let score = { player: 0, computer: 0 };

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(player, computer) {
  if (player === "Rock" && computer === "Scissor") {
    score.player += 1;
    return "Player Wins";
  } else if (player === "Paper" && computer === "Rock") {
    score.player += 1;
    return "Player Wins";
  } else if (player === "Scissor" && computer === "Paper") {
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

  choicesUI.innerHTML = `
      <div class="col text-center">
        <h3>Player Choice: ${playerChoice}</h3>
      </div>
      <div class="col text-center">
        <h3>Computer Choice: ${computerChoice}</h3>
      </div>
      `;
}
