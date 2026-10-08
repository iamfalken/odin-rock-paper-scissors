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

const choices = document.querySelector(".choices");
const roundResult = document.querySelector(".round-result");
const score = document.querySelector(".score");

function handleChoice(e) {
  if (e.target.tagName !== "BUTTON") return;
  const humanSelection = e.target.textContent;
  const computerSelection = getComputerChoice();
  roundResult.textContent = playRound(humanSelection, computerSelection);
  score.textContent = `You ${humanScore} - Computer ${computerScore}`;
}

choices.addEventListener("click", handleChoice);
