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

function playRound(event, computerChoice) {
  if (event.target.tagName == "BUTTON") {
    humanChoice = event.target.getAttribute("data-selection");
    const resultDiv = document.querySelector("div.result");
    if (humanChoice === computerChoice) {
      resultDiv.textContent = `You Tied! ${humanChoice} = ${humanChoice}`;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
      resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else {
      resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  }
}

function playGame() {
  computerScore = 0;
  humanScore = 0;
  let humanSelection;
  let computerSelection;
  let message;

  // for (let i = 0; i < 5; i++) {
  //   humanSelection = getHumanChoice();
  //   computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  // }

  if (humanScore > computerScore) {
    message = `You Wins! with a score of ${humanScore} to ${computerScore}`;
  } else if (humanScore < computerScore) {
    message = `You Lose. with a score of ${computerScore} to ${humanScore}`;
  } else {
    message = `Its a Tie!! with a score of ${computerScore} to ${humanScore}`;
  }
  console.log(message);
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", playRound);
// playGame();
