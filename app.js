function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor((Math.random() * 3));

    return choices[randomChoice];
}