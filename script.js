// get computer's choice
function getComputerChoice() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

console.log("Computer chose", getComputerChoice());

