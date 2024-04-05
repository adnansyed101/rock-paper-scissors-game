const playerChoice = prompt("Rock, Paper or Scissor").toLowerCase();
const computerChoice = getComputerChoice();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(player, computer) {
  if (player === "rock" && computer === "scissor") {
    return "Player Wins";
  } else if (player === "paper" && computer === "rock") {
    return "Player Wins";
  } else if (player === "scissor" && computer === "paper") {
    return "Player Wins";
  } else if (player === computer) {
    return "Draw";
  } else {
    return "Computer Wins";
  }
}

console.log(`Player: ${playerChoice} \t Computer: ${computerChoice}`);
console.log(playRound(playerChoice, computerChoice));
