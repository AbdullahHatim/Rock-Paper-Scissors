const choices = ["Rock", "Paper", "Scissors"];
let computerScore;
let humanScore;

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

function playGame() {
  computerScore = 0;
  humanScore = 0;
  let humanSelection;
  let computerSelection;
  let message;

  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    message = `You Wins! with a score of ${humanScore} to ${computerScore}`;
  } else if (humanScore < computerScore) {
    message = `You Lose. with a score of ${computerScore} to ${humanScore}`;
  } else {
    message = `Its a Tie!! with a score of ${computerScore} to ${humanScore}`;
  }
  console.log(message);
}

playGame();
