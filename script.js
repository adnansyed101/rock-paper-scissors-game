const playerChoices = document.querySelectorAll(".btn");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const choicesUI = document.querySelector("#choicesUI");
const resultsUI = document.querySelector("#resultsUI");
const resetBtn = document.querySelector("#resetBtn");
const winner = document.querySelector("#winner");

playerChoices.forEach((choice) => {
  choice.addEventListener("click", playGame);
});

let score = { player: 0, computer: 0 };

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(player, computer) {
  if (player === "Rock" && computer === "Scissor") {
    score.player += 1;
    resultsUI.textContent = "Player Wins";
  } else if (player === "Paper" && computer === "Rock") {
    score.player += 1;
    resultsUI.textContent = "Player Wins";
  } else if (player === "Scissor" && computer === "Paper") {
    score.player += 1;
    resultsUI.textContent = "Player Wins";
  } else if (player === computer) {
    resultsUI.textContent = "Draw";
  } else {
    score.computer += 1;
    resultsUI.textContent = "Computer Wins";
  }
}

function declareWinner() {
  if (score.player === 5) {
    winner.textContent = "Player has won the game";
    gameOver();
  } else if (score.computer === 5) {
    winner.textContent = "Computer has won the game";
    gameOver();
  }
}

function gameOver() {
  playerChoices.forEach((choice) => {
    choice.disabled = true;
  });
  
  const button = document.createElement("button");
  button.setAttribute("onclick", "document.location.reload()");
  button.textContent = "Reset";
  button.classList = "btn btn-success";
  resetBtn.appendChild(button);
}

function playGame(e) {
  const computerChoice = getComputerChoice();
  const playerChoice = e.target.id;

  playRound(playerChoice, computerChoice);

  declareWinner();

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
