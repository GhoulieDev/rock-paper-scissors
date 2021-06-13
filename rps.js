function computerPlay() {
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
    let playerChoice = prompt("Enter your selection:")
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
}

playRound(playerPlay(), computerPlay());