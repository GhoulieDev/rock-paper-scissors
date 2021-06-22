const score = document.querySelector("#score");
const playerCurrentScore = document.querySelector(".player");
const computerCurrentScore = document.querySelector(".computer");
const roundResultBox = document.querySelector("#results");

let playerScore = 0;
let computerScore = 0;
let gameResult;

//create a nodelist of all button nodes, for each button add an event listener for click, and run the playGame function
const selections = document.querySelectorAll("button");
selections.forEach(selection => {
    selection.addEventListener("click", playGame);
});

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

//the param is an event object passed into the callback function when called by the eventlistener, we grab the ID so we know which player selection was pressed
function playRound(playerChoice) {
    let playerSelection = playerChoice.target.id;
    let computerSelection = computerPlay();
    
    //create the output for selections
    const paraRoundSelections = document.createElement("p");
    paraRoundSelections.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;

    const paraRoundResult = document.createElement("p");
    
    //Checks to determine the round result and displays it
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        
        paraRoundResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
        paraRoundResult.style.color = "green";
        roundResultBox.prepend(paraRoundResult);
        result = "win"; 

    }else if (playerSelection == computerSelection) {
        paraRoundResult.textContent = `It's a tie!`;
        paraRoundResult.style.color = "yellow";
        roundResultBox.prepend(paraRoundResult);
        result = "tie";

    }else {
        paraRoundResult.textContent = `You lost the round! ${playerSelection} loses to ${computerSelection}`;
        paraRoundResult.style.color = "red";
        roundResultBox.prepend(paraRoundResult);
        result = "lose";
    }

    roundResultBox.prepend(paraRoundSelections);
    
    return result; 
}
  
function playGame(playerChoice) {
    let roundResult = playRound(playerChoice);

    if (roundResult == "win") {
        playerScore += 1;
    }else if (roundResult == "lose") {
        computerScore += 1;
    } 
    
    updateScore(playerScore, computerScore);

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            gameResult = document.createElement("p");
            gameResult.textContent = "GAME OVER! YOU WIN! PRESS 'R' TO PLAY AGAIN";
            gameResult.style.color = "green";
            score.appendChild(gameResult);
        }else {
            gameResult = document.createElement("p");
            gameResult.textContent = "GAME OVER! YOU LOSE! PRESS 'R' TO PLAY AGAIN";
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
    //remove listeners for buttons to prevent starting another game before reset has finished
    selections.forEach(selection => {
        selection.removeEventListener("click", playGame);
    });
    
    //clears scores and round results and re-enables listeners for buttons
    document.addEventListener("keydown", event => {
        if (event.key == "r"){
            score.removeChild(gameResult);
            playerScore = 0;
            computerScore = 0;
            updateScore(playerScore, computerScore);
            
            while(roundResultBox.firstChild) {
                roundResultBox.removeChild(roundResultBox.firstChild);
            }
            
            selections.forEach(selection => {
                selection.addEventListener("click", playGame);
            });
        }
    });  
}     
  
    







