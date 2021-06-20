//create a nodelist of all button nodes, for each button add an event listener for click, and run the playRound function
const selections = document.querySelectorAll("button");
selections.forEach(selection => {
    selection.addEventListener("click", playRound);
});


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

//the param is an event object passed into the callback function when called by the eventlistener, we grab the ID so we know which one was pressed
function playRound(playerChoice) {
    let playerSelection = (playerChoice.target.id);
    let computerSelection = computerPlay();
    
    //create reference to parent, create a <p> and assign it some text and then append it to parent
    const roundResultBox = document.querySelector("#results");
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

//TO DO: add scoring and 5 round loop, add some hover/animations to the buttons, maybe add changing images based on selections


