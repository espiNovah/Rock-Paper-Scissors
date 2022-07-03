let playerWins = 0;
let compWins = 0;
let totalRounds = 1;

let countRound= document.createElement('div');
let playerChoice = document.createElement('div');
let compChoice = document.createElement('div');
let outCome = document.createElement('div');



let rockBtn = document.querySelector('.rockBtn');
let paperBtn = document.querySelector('.paperBtn');
let scissorsBtn = document.querySelector('.scissorsBtn');
let scoreBoard = document.querySelector('.displayScore');
let playerScoreValue = document.querySelector('.playerScore');
let compScoreValue = document.querySelector('.compScore');


const option = document.querySelector('.playerCard');
const container = document.querySelector('.container');

rockBtn.addEventListener('click', playRound)
paperBtn.addEventListener('click', playRound)
scissorsBtn.addEventListener('click', playRound)


function computerPlay(){
    let numb = Math.floor(Math.random()*3);
    console.log(numb);
    if (numb === 0) {
        return 'rock'
    } else if (numb === 1) {
        return 'paper'
    } else if (numb === 2) {
        return 'scissors'
    }
}

function playRound(e) {
    let computerSelection = computerPlay(); 
    let playerSelection = e.target; 

    let gameLogic = () => {
    let pSec = playerSelection.textContent.toLowerCase();
    if (computerSelection === 'rock') { 
            if (playerSelection == paperBtn){
                playerWins++;
                totalRounds++;
                return "You won! Paper beats Rock";

            } 
            else if(playerSelection == scissorsBtn){
                compWins++;
                totalRounds++;
                return "You Lose! Rock beats Scissors";
            } 
            else if (pSec == computerSelection) {
                totalRounds++;
                return "It's a tie!";
            }
        } 
    else if(computerSelection === 'paper'){
            if (playerSelection == scissorsBtn){
                playerWins++;
                totalRounds++;
                return "You won! Scissors beats Paper";
            } 
            else if(playerSelection == rockBtn){
                compWins++;
                totalRounds++;
                return "You Lose! Paper beats Rock";
            } 
            else if (pSec == computerSelection) {
                totalRounds++;
                return "It's a tie!";
            }
        } 
    else if(computerSelection === 'scissors'){
            if (playerSelection == rockBtn){
                playerWins++;
                totalRounds++;
                return "You won! Rock beats Scissors";
            } else if(playerSelection == paperBtn){
                compWins++;
                totalRounds++;
                return "You Lose! Scissors beats Paper";
            } else if (pSec == computerSelection) {
                totalRounds++;
                return "It's a tie!";
            }
        
        }
        
    }

    scoreBoard.textContent = ' ';
    playerChoice.textContent = `You chose: ${playerSelection.textContent}`;
    compChoice.textContent = `Amaka chose: ${computerSelection.toUpperCase()}`;
    countRound.textContent = ` Round ${totalRounds} `;
    countRound.style.cssText = 'border-bottom: 6px solid #ffffff; margin-bottom: 20px';
    outCome.textContent = gameLogic();
    outCome.style.cssText = 'background-color: #000000; padding: 10px; border-radius: 10px';
    playerScoreValue.textContent = playerWins;
    compScoreValue.textContent = compWins;

    let callWinner = document.querySelector('.rspOutcome');
    callWinner.style.backgroundColor = 'white';

    
    if (playerWins == 5|| compWins == 5) {
        callWinner.textContent = endGame();
        function endGame() {
            if (playerWins > compWins){
                callWinner.style.backgroundColor = 'green';
                playerWins = 0;
                compWins = 0;
                totalRounds = 1;
                return "You won the game!"
            } else if ( compWins > playerWins) {
                callWinner.style.backgroundColor = 'red';
                playerWins = 0;
                compWins = 0;
                totalRounds = 1;
                return "You lost the game!"
            } 
        }


    }

    scoreBoard.appendChild(countRound);
    scoreBoard.appendChild(playerChoice);
    scoreBoard.appendChild(compChoice);
    scoreBoard.appendChild(outCome);

}






