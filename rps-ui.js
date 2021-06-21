//create a nodelist of all button nodes, for each button add an event listener for click, and run the playRound function
const selections = document.querySelectorAll("button");
selections.forEach(selection => {
    selection.addEventListener("click", playGame);
});

const score = document.querySelector("#score");
const playerCurrentScore = document.querySelector(".player");
const computerCurrentScore = document.querySelector(".computer");
const roundResultBox = document.querySelector("#results");

//generates a random number 1-3
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

//the param is an event object passed into the callback function when called by the eventlistener, we grab the ID so we know which one was pressed
function playRound(playerChoice) {
    let playerSelection = playerChoice.target.id;
    console.log(playerChoice);
    let computerSelection = computerPlay();
    
    
    const paraRoundSelections = document.createElement("p");
    paraRoundSelections.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;
    

    //Checks to determine the round result and displays it
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        
        const paraWin = document.createElement("p");
        paraWin.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
        paraWin.style.color = "green";
        roundResultBox.prepend(paraWin);
        result = "win"; 
        
    }else if (playerSelection == computerSelection) {
        const paraTie = document.createElement("p");
        paraTie.textContent = `It's a tie!`;
        paraTie.style.color = "yellow";
        roundResultBox.prepend(paraTie);
        result = "tie";
        
    }else {
        const paraLose = document.createElement("p");
        paraLose.textContent = `You lost the round! ${playerSelection} loses to ${computerSelection}`;
        paraLose.style.color = "red";
        roundResultBox.prepend(paraLose);
        result = "lose";
        
    }
    roundResultBox.prepend(paraRoundSelections);
    
    return result; 
}
  
let playerScore = 0;
let computerScore = 0;
let gameResult;

function playGame(playerChoice) {
    roundResult = playRound(playerChoice);

    if (roundResult == "win") {
        playerScore += 1;
            
    }else if (roundResult == "lose") {
        computerScore += 1;
    } 
    
    updateScore(playerScore, computerScore);



    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            gameResult = document.createElement("p");
            gameResult.textContent = "GAME OVER! YOU WIN!";
            gameResult.style.color = "green";
            score.appendChild(gameResult);
        }else {
            gameResult = document.createElement("p");
            gameResult.textContent = "GAME OVER! YOU LOSE!";
            gameResult.style.color = "red";
            score.appendChild(gameResult);
        }

        
        resetGame();
        
    }
}
    
function updateScore(playerScore, computerScore) {
    playerCurrentScore.textContent = playerScore;
    computerCurrentScore.textContent = computerScore;
}
  
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    
   
    
}     
     
    
//remove round results + game over display







