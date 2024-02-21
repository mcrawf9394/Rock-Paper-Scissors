
function playGame (){
    let i = 0
    let U = 0
    let C = 0
    do {
        let playerSelection = prompt();
        let choice = getComputerChoice()
        function getComputerChoice() {
            const choices= ["rock", "paper", "scissors"];
            const num = Math.floor(Math.random()*3);
            const computerChoice = choices[num]
            return computerChoice;
        }
        function playRound (playerSelection, choice) {
        let message
        if (playerSelection == choice)
            message = "Draw!"
        else if (playerSelection == "rock" && choice == "paper",i++,C++)
            message = "You Lose! Paper beats rock!"
        else if (playerSelection == "rock" && choice == "scissors",U++,i++)
            message = "You Win! Rock beats scissors!"
        else if (playerSelection == "paper" && choice == "rock", U++,i++)
            message = "You Win! Paper beats rock!"
        else if (playerSelection == "paper" && choice == "scissors", C++,i++)
            message = "You Lose! Scissors beats paper!"
        else if (playerSelection == "scissors" && choice == "paper", U++,i++)
            message = "You Win! Scissors beats paper!"
        else if (playerSelection == "scissors" && choice == "rock",C++,i++)
            message = "You Lose! Rock beats scissors!"
        else 
            message = "Something went wrong!"
        return message;
         } console.log(playRound(playerSelection, choice))
} while (i<5)
    let finalMessage
    if (U = C)
        finalMessage = "It's a tie!"
    else if (U > C)
        finalMessage = "You Win!"
    else
        finalMessage = "You Lose!"
    return finalMessage;
}
console.log(playGame())