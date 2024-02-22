function getPlayerChoice (){
  let option
  option = prompt()
  return option;
  }
function getComputerChoice() {
  const choices= ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random()*3);
  const computerChoice = choices[num]
  return computerChoice;
}
function playRound (playerSelection, choice) {
  let message
  if (playerSelection == choice){
    return message = "Draw!";
  }
  else if (playerSelection == "rock" && choice == "paper"){
    C++;
    return message = "You Lose! Paper beats rock!";
  }
  else if (playerSelection == "rock" && choice == "scissors"){
    U++;
    return message = "You Win! Rock beats scissors!";
  }
  else if (playerSelection == "paper" && choice == "rock"){
    U++;
    return message = "You Win! Paper beats rock!";
  }
  else if (playerSelection == "paper" && choice == "scissors"){
    C++;
    return message = "You Lose! Scissors beats paper!";
  }
  else if (playerSelection == "scissors" && choice == "paper"){
    U++;
    return message = "You Win! Scissors beats paper!";
  }
  else if (playerSelection == "scissors" && choice == "rock"){
    C++;
    return message = "You Lose! Rock beats scissors!";
  }
  else { 
    return message = "Something went wrong!";
  }
}
function playGame (){
  for (let i = 0; i < 5; i++) {
     let playerSelection = getPlayerChoice();
     let choice = getComputerChoice ();
     console.log(playRound(playerSelection, choice));
  }
  if (U > C){
    console.log("You have won the game!");
  }
  else if (C > U){
    console.log("You have lost the game!");
  }
  else
    console.log("No one wins!")
}