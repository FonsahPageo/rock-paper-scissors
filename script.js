// get computer's choice
function getComputerChoice() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

console.log("Computer chose", getComputerChoice());

// get human's choice
function getHumanChoice() {
    let humanChoice = prompt("Enter a number from 1 to 3 representing rock, paper, scissors respectively: ");
}

console.log("You chose ", getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie. Play again")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice == "rock") ||
        (humanChoice === "sciccors" && computerChoice === "rock")
    ) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

