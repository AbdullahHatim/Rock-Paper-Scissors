const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
}

function getHumanChoice() {
  let humanChoice = +prompt(
    "Select an option:\n1. Rock\n2. Paper\n3. Scissors"
  );

  //Patch me!
  return choices[humanChoice - 1];
}
