
function getComputerChoice() {
    const choices= ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random()*3);
    const computerChoice = choices[num]
    return computerChoice;
}
let choice = getComputerChoice()
let playerSelection = prompt();
playerSelection.toLowerCase
function playRound (playerSelection, choice) {
    let message
    if (playerSelection == choice)
        message = "Draw!"
    else if (playerSelection == "rock" && choice == "paper")
        message = "You Lose! Paper beats rock!"
    else if (playerSelection == "rock" && choice == "scissors")
        message = "You Win! Rock beats scissors!"
    else if (playerSelection == "paper" && choice == "rock")
        message = "You Win! Paper beats rock!"
    else if (playerSelection == "paper" && choice == "scissors")
        message = "You Lose! Scissors beats paper!"
    else if (playerSelection == "scissors" && choice == "paper")
        message = "You Win! Scissors beats paper!"
    else if (playerSelection == "scissors" && choice == "rock")
        message = "You Lose! Rock beats scissors!"
    else 
        message = "Something went wrong!"
    return message;
}
console.log(playRound(playerSelection, choice))