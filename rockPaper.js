/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
// */

const totalScore = {
   playerScore : 0 , 
   computerScore : 0
  };
  
 
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

function getComputerChoice() {
  let rspChoices = ['Rock', 'Paper', 'Scissors'];
  let computerChoice = rspChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}
 
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult( playerChoice , computerChoice){
  let score;
  if ( playerChoice === computerChoice){
    score = 0;
  } 
  else if ( playerChoice === ' Rock' && computerChoice === 'Scissors'){
    score = 1 

}
else if ( playerChoice === 'Paper' && computerChoice=== 'Rock'){
  score = 1;
}
else if ( playerChoice === 'Scissors' && computerChoice === 'Paper'){
  score = 1;
}
else {
  score = -1;
}
return score;
}


 
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

function showResult( score ,playerChoice ,computerChoice){
  let resultDiv = document.getElementById('result');
  let handDev  = document.getElementById('hands');
  let playerScoreDev = document.getElementById('player-score');
  let computerScoreDev = document.getElementById('computer-score');

  if ( score === 1){
    resultDiv.innerText = ' Great!, You Win!😍';
  }
  else if ( score === -1){
    resultDiv.innerText = ' Computer wins!😫 '

  }
  else {
    resultDiv.innerText = "It's a Tie!😲"
  }

  handDev.innerText = `👱${playerChoice} vs  ${computerChoice}🤖`
  playerScoreDev.innerText = `Your score : ${totalScore['playerScore']}`;
  computerScoreDev.innerText = `Computer score : ${totalScore['computerScore']}`;

} 

// ** Calculate who won and show it on the screen **


function onClickRPS( playerChoice) {
   let addComputratorScore = getComputerChoice()
   let totalScoreAdd = getResult(playerChoice, addComputratorScore);
   totalScore['playerScore'] += totalScoreAdd;
   totalScore['computerScore'] -= totalScoreAdd;
   showResult(totalScoreAdd, playerChoice, addComputratorScore);
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
 let rpsButtons = document.querySelectorAll('.rpsButton');
 rpsButtons.forEach(button => {
  button.onclick = () => onClickRPS(button.value)
 })
  
  let endGameButton = document.getElementById('endGameButton') 
  endGameButton.onclick = () => endGame(totalScore);

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  

}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
  let resultDiv = document.getElementById('result');
  let handDev = document.getElementById('hands');
  let playerScoreDev = document.getElementById('player-score');
  let computerScoreDev = document.getElementById('computer-score');

  resultDiv.innerText = '';
  handDev.innerText = '';
  playerScoreDev.innerText = '';
  computerScoreDev.innerText = ''
}

playGame()