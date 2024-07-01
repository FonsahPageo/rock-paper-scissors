// get computer's choice
function getComputerChoice() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// get human's choice
function getHumanChoice() {
    let humanChoice = prompt("Pick Rock, Paper or Scissors").toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("You chose ", humanChoice);
    console.log("Computer chose", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie. Play again")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice == "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        console.log("You won this round!");
    } else {
        computerScore += 1;
        console.log("Computer won this round!");
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if (computerScore > humanScore) {
        console.log("Computer won with " + computerScore + " points");
    } else if(humanScore > computerScore){
        console.log("You won with" + humanScore + "points");
    } else {
        alert("It's a tie, both scored " + humanScore + " points");
    }
}

playGame();