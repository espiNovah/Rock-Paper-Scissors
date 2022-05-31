let userWins = 0;
let amakaWins = 0;
let totalRounds = 0;


// This function returns a random choice for Amaka
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

// This function checks user's choice and Amaka's choice
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === 'rock') { 
        if (playerSelection === 'paper'){
            userWins++;
            totalRounds++;
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
            userWins++;
            totalRounds++;
            return "You won! Scissors beats Paper"
        } else if(playerSelection === 'rock'){
            amakaWins++;
            totalRounds++;
            return "You Lose! Paper beats Rock"
        } else if (playerSelection === computerSelection) {
            totalRounds++;
            return "It's a tie!"
        } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
            return "Ops! \"" + playerSelection + "\" isn\'t an option"
        }

    } else if(computerSelection === 'scissors'){
        if (playerSelection === 'rock'){
            userWins++;
            totalRounds++;
            return "You won! Rock beats Scissors"
        } else if(playerSelection === 'paper'){
            amakaWins++;
            totalRounds++;
            return "You Lose! Scissors beats Paper"
        } else if (playerSelection === computerSelection) {
            totalRounds++;
            return "It's a tie!"
        } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
            return "Ops! \"" + playerSelection + "\" isn\'t an option"
        }
    }    
}

// This function starts the game
function startGame() {
    alert('Amaka wants something! Let Rock Paper Scissors help you decide');

}

// This function accepts player input and prints winner of each round.
function nextRound () {
    let playerSelection = prompt('Rock Paper Scissors? Make a choice!');
    let computerSelection = computerPlay();
    console.log(`++ You chose: ${playerSelection} \n++ Amaka chose: ${computerSelection}`);
    console.log(playRound (playerSelection, computerSelection));
    scoreBoard();

}

// This function prints the player scores
function scoreBoard(){
    console.log(`Your score: ${userWins} || Amaka's score: ${amakaWins}`);
    console.log('--------------');
}

// This function prints game result
function whoWins(){
    if (userWins > amakaWins){
        return "Congrats, you just saved some money!"
    } else if ( amakaWins > userWins) {
        return "Yo man, you lost! Ask for her account number"
    } else {
        return "There\'s no winner"
    }
}

// This function loops the game 5 times.
function game() {
    for (let i = 0; i <= 5; i++){
        if (i == 0) {
            startGame();
        } else {
            nextRound();
        }        
    }
    console.log('**************');
    console.log(whoWins());
    scoreBoard();
}

game();