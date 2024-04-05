const playerChoice = prompt("Rock, Paper or Scissor").toLowerCase();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(player, computer){
    if(player === 'rock' && computer === 'scissor'){
console.log('Player Wins');
    } else if (){

    }

}