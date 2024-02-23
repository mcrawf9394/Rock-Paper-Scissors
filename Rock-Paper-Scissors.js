let U = 0
let C = 0
let playerSelection
let choice
function player (){
  const uChoice = prompt();
  uChoice.toLowerCase;
  return uChoice;
}
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random() * 3);
  const computerChoice = choices[num]
  return computerChoice;
}
function playRound() {
  playerSelection = player ()
  choice = getComputerChoice ()
  let message
  if (playerSelection == choice) {
    message = "Draw!";
  }
  else if (playerSelection == "rock" && choice == "paper") {
    C++;
    message = "You Lose! Paper beats rock!";
  }
  else if (playerSelection == "rock" && choice == "scissors") {
    U++;
    message = "You Win! Rock beats scissors!";
  }
  else if (playerSelection == "paper" && choice == "rock") {
    U++;
    message = "You Win! Paper beats rock!";
  }
  else if (playerSelection == "paper" && choice == "scissors") {
    C++;
    message = "You Lose! Scissors beats paper!"
  }
  else if (playerSelection == "scissors" && choice == "paper") {
    U++;
    message = "You Win! Scissors beats paper!";
  }
  else if (playerSelection == "scissors" && choice == "rock") {
    C++;
    message = "You Lose! Rock beats scissors!";
  }
  else {
    message = "Something went wrong!";
  }
  console.log(message)
  return message;
} 
function playGame(){
  let finalMessage
  while (U < 5 && C < 5){
  playRound ()
  }
  if (U = 5 && C != 5){
    finalMessage = "You win the game!"
  }
  else if (C = 5 && U != 5){
    finalMessage = "You lose the game!"
  }
  else {
    finalMessage = "NOT COUNTED CORRECTLY"
  }
  console.log(finalMessage)
  return finalMessage
}
playGame ()
console.log("Your Score= " + U, "Computer Score= " + C)