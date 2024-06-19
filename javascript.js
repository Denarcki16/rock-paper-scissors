//Welcome section and input
const welcomeMessage = alert('Welcome to the Rock Paper and Scissor game! The game wil start once you click on OK.')
const userInput = prompt('Choose between Rock Paper and Scissor', )

//Function human input
function getHumanChoice() {
    let resultHuman = '';
    input = userInput;
    resultHuman = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    console.log(resultHuman);
}

//Function computer choice
function getComputerChoice() {
    const textArray = ['Rock', 'Paper', 'Scissor'];
    let resultComputer = '';
    resultComputer = textArray[Math.floor(Math.random() * textArray.length)];
    console.log(resultComputer);

}

const humanScore = 0;
const computerScore = 0

// function playRound(HumanChoice, computerChoice) {
//     if (resultHuman === resultComputer) {
//         console.log('Try again, its a tie!');
//     } else
//         console.log('test');
// }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
