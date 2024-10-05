const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function displayRoundResult(resultDiv, humanChoice, computerChoice) {
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

function displayGameResultAfter(resultDiv, span, rounds) {
  if (humanScore + computerScore >= rounds) {
    span.innerText = "";
    if (humanScore > computerScore) {
      resultDiv.innerText = `You Wins! with a score of ${humanScore} to ${computerScore}`;
    } else if (humanScore < computerScore) {
      resultDiv.innerText = `You Lose. with a score of ${computerScore} to ${humanScore}`;
    } else {
      resultDiv.innerText = `Its a Tie!! with a score of ${computerScore} to ${humanScore}`;
    }

    const buttons = document.querySelector(".buttons");
    buttons.addEventListener(
      "click",
      (e) => {
        if (e.target.tagName == "BUTTON") {
          [humanScore, computerScore, span.innerText, resultDiv.innerText] = [
            0,
            0,
            "0 - 0",
            "",
          ];
        }
      },
      { once: true }
    );
  }
}

function playRound(event, computerChoice) {
  if (event.target.tagName == "BUTTON") {
    //get the human choice based on clicked button
    humanChoice = event.target.getAttribute("data-selection");
    //get result displayer elements
    const resultDiv = document.querySelector("div.result");
    const span = document.querySelector("span.score");

    displayRoundResult(resultDiv, humanChoice, getComputerChoice());
    span.innerText = `${humanScore} - ${computerScore}`;
    displayGameResultAfter(resultDiv, span, 5);
  }
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", playRound);
// playGame();
