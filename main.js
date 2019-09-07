const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
        return userInput;
    } else {
        console.log('Invalid choice');
    }
};
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Game Tie';
    }
    if (userChoice === 'bomb') { // cheat code
        return 'You won';
    } else if (userChoice === 'rock') {
        return (computerChoice === 'paper') ? 'Computer won' : 'You won';
    } else if (userChoice === 'paper') {
        return (computerChoice === 'scissors') ? 'Computer won' : 'You won';
    } else if (userChoice === 'scissors') {
        return (computerChoice === 'rock') ? 'Computer won' : 'You won';
    }

}
const playGame = (user) => {
    let userChoice = getUserChoice(user);
    let computerChoice = getComputerChoice();
    console.log('Your pick: ' + userChoice);
    console.log('Computer\'s pick: ' + computerChoice);
    let winner = determineWinner(userChoice, computerChoice);
    console.log(winner);
}

playGame('Bomb');
