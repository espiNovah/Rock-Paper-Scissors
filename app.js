function computerPlay(){
    let numb = Math.floor(Math.random()*10);
    if (numb%3 === 0 || numb%5 === 0) {
        return 'rock'
    } else if (numb%2 === 0) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === 'rock') { 
        if (playerSelection === 'paper'){
            return "You won! Paper beats Rock"
        } else if(playerSelection === 'scissors'){
            return "You Lose! Rock beats Scissors"
        } else if (playerSelection === computerSelection) {
            return "It's a tie!"    
        } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
            return "Ops! \"" + playerSelection + "\" isn\'t an option"
        }

    } else if(computerSelection === 'paper'){
        if (playerSelection === 'scissors'){
            return "You won! Scissors beats Paper"
        } else if(playerSelection === 'rock'){
            return "You Lose! Paper beats Rock"
        } else if (playerSelection === computerSelection) {
            return "It's a tie!"
        } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
            return "Ops! \"" + playerSelection + "\" isn\'t an option"
        }

    } else if(computerSelection === 'scissors'){
        if (playerSelection === 'rock'){
            return "You won! Rock beats Scissors"
        } else if(playerSelection === 'paper'){
            return "You Lose! Scissors beats Paper"
        } else if (playerSelection === computerSelection) {
            return "It's a tie!"
        } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
            return "Ops! \"" + playerSelection + "\" isn\'t an option"
        }
    }    
}

function startGame() {
    alert('Amaka wants something! Let Rock Paper Scissors help you decide');
    let playerSelection = prompt('Let\'s get started! Rock Paper Scissors?');
    let computerSelection = computerPlay();
    console.log(`++ You chose: ${playerSelection} \n++ Amaka chose: ${computerSelection}`);
    console.log(playRound (playerSelection, computerSelection));
    console.log('--------------');

}

function nextRound () {
    let playerSelection = prompt('Let\'s play again!');
    let computerSelection = computerPlay();
    console.log(`++ You chose: ${playerSelection} \n++ Amaka chose: ${computerSelection}`);
    console.log(playRound (playerSelection, computerSelection));
    console.log('--------------');

}

function game() {
    for (let i = 0; i < 5; i++){
        if (i == 0) {
            startGame();
        } else {
            nextRound();
        }        
    }
}


game();