let U = 0
let C = 0
let playerSelection
let choice
let uChoice
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.value, getComputerChoice());
  })
})
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random() * 3);
  const computerChoice = choices[num]
  return computerChoice;
}
function playRound(playerSelection, choice) {
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
  console.log("Your Score= " + U, "Computer Score= " + C)
  return message;
} 