function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex === 0) {
    return "rock";
  } else if (randomIndex === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt("Do you choose rock, paper or scissors?");
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return `It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${humanChoice}`;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore, computerScore);
