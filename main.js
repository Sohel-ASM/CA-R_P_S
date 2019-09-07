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
