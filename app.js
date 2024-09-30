const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function getHumanChoice() {
  let humanChoice =
    +prompt("Select an option:\n1. Rock\n2. Paper\n3. Scissors") - 1;

  if (humanChoice > 2 || humanChoice < 0 || isNaN(humanChoice)) {
    alert("I'll choose for you then...");
    humanChoice = Math.floor(Math.random() * 3);
  }

  return choices[humanChoice];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`You Tied! ${humanChoice} = ${humanChoice}`);
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
