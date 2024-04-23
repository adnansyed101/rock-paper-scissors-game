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
  for (let i = 1; i <= 5; i++) {
    const playerChoice = prompt("Rock, Paper or Scissor").toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i}`);
    console.log(`Player: ${playerChoice} \t Computer: ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
  }

  if (score.player > score.computer) {
    return "Player has won the game";
  } else if (score.player < score.computer) {
    return "Computer has won the game";
  } else {
    return "Draw";
  }
}

console.log(score);
