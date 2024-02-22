let i = 0
let U = 0
let C = 0

let playerSelection = prompt ()
let choice = getComputerChoice()
        function getComputerChoice() {
            const choices= ["rock", "paper", "scissors"];
            const num = Math.floor(Math.random()*3);
            const computerChoice = choices[num]
            return computerChoice;
        }
        function playRound (playerSelection, choice) {
        let message
        if (playerSelection == choice){
            message = "Draw!";
          }
        else if (playerSelection == "rock" && choice == "paper"){
            C++;  
            message = "You Lose! Paper beats rock!";
          }
        else if (playerSelection == "rock" && choice == "scissors"){
            U++;            
            message = "You Win! Rock beats scissors!";
          }
        else if (playerSelection == "paper" && choice == "rock"){
            U++;
            message = "You Win! Paper beats rock!";
          }
        else if (playerSelection == "paper" && choice == "scissors"){
            C++;
            message = "You Lose! Scissors beats paper!"
          }
        else if (playerSelection == "scissors" && choice == "paper"){
            U++;
            message = "You Win! Scissors beats paper!";
          }
        else if (playerSelection == "scissors" && choice == "rock"){
            C++;
            message = "You Lose! Rock beats scissors!";
          }
        else {
            message = "Something went wrong!";
          }
        return message;
         } 
         console.log(playRound(playerSelection, choice))
         playerSelection = prompt();
         choice = getComputerChoice()
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
         playerSelection = prompt();
         choice = getComputerChoice()
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
         playerSelection = prompt();
         choice = getComputerChoice()
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
         playerSelection = prompt();
         choice = getComputerChoice()
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
    let finalMessage
    function finalPlay (){
    if (U == C)
        finalMessage = "It's a tie!"
    else if (U > C)
        finalMessage = "You Win!"
    else
        finalMessage = "You Lose!"
    return finalMessage;
    }
    console.log(finalPlay())
    console.log(C)