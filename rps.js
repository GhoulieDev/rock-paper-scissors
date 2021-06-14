function computerPlay() {
    //generates a random number 1-3
    let computerChoice = Math.floor(Math.random()*3)+1;
    if (computerChoice == 1) {
        computerChoice = "rock";
    }else if(computerChoice == 2){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playerPlay() {
    let playerChoice = prompt("Enter your selection:");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    console.log("You Picked: " + playerSelection);
    console.log("Computer Picked: " + computerSelection);
    //Checks for winning condition, then checks for tie, otherwise its a losing condition
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
        result = "win"; 
        return result;
    }else if (playerSelection == computerSelection) {
        console.log("It's a tie!")
        result = "tie";
        return result;
    }else {
        console.log(`You lost the round! ${playerSelection} loses to ${computerSelection}`);
        result = "lose";
        return result;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Rock, Paper, Scissors: 5 round game!")
    for (let roundTotal = 1; roundTotal <= 5; roundTotal++) {
        console.log("Round: " + roundTotal);
        
        let roundOutcome = (playRound(playerPlay(), computerPlay()));

        if (roundOutcome == "win") {
            playerScore++
        }else if (roundOutcome == "lose") {
            computerScore++
        }
        
        console.log(`You: ${playerScore} - ${computerScore} Computer`);
        console.log(" ");
    }
    if (playerScore > computerScore) {
        console.log("Congratulations you win!");
    }else if (playerScore < computerScore) {
        console.log("I'm sorry but you lost this time.");
    }else {
        console.log("Overall tie!");
    }
}

game();

