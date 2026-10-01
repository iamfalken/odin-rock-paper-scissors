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

console.log(getHumanChoice());
