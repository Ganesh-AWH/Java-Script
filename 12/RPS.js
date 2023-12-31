/*
Algorithm for rock paper scissors
Select u r move
step-1 : Generate random number
setp-2 : compare with u r moves
step-3 : display the output
*/

//Default operator used here
let score = JSON.parse(localStorage.getItem('localScore')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

/*
if score === null this code will work
if(!score){
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
}
*/

displayScore();
// addEvent Listener
document.querySelector('.js-rock-button')
  .addEventListener('click',() => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click',() => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click',() =>{
    playGame('scissors');
  });

const resetFunction = () => {
  score.wins = 0;
  score.ties = 0;
  score.losses = 0;
  localStorage.removeItem('localScore');
  displayScore();
};
document.querySelector('.js-reset-button')
  .addEventListener('click',() => resetFunction() );


//speacial feature
//r-> rock
//p-> paper
//s-> scissors
document.body.addEventListener('keydown',(event) =>{
  if(event.key ==='r' || event.key ==='R'){
    playGame('rock');
  }else if(event.key === 'p' || event.key === 'P'){
    playGame('paper');
  }else if(event.key === 's' || event.key === 'S'){
    playGame('scissors');
  }else if(event.key === 'Backspace'){
    resetFunction();
  }
});


function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result;
  if(playerMove === 'scissors'){
    if(computerMove === 'scissors'){
      result = 'Tie';
    }else if(computerMove === 'rock'){
      result = 'You Lose';
    }else{
      result = 'You Win';
    }
  }
  
  else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'Tie';
    }else if(computerMove === 'scissors'){
      result = 'You Win';
    }else{
      result = 'You Lose';
    }
  }
  
else if(playerMove === 'paper'){
  if(computerMove === 'paper'){
    result = 'Tie';
  }else if(computerMove === 'scissors'){
    result = 'You Lose';
  }else{
    result = 'You Win';
  }
}

if(result === 'You Win'){
  score.wins += 1;
}else if(result === 'You Lose'){
  score.losses += 1;
}else if(result === 'Tie'){
  score.ties += 1;
}

//It accepts only string
localStorage.setItem('localScore',JSON.stringify(score));

let move = `you ${playerMove} - computer ${computerMove}`; 
displayScore();
document.querySelector('.result')
.innerHTML = `${result}.`;
document.querySelector('.moves')
.innerHTML = `You
<img src="images\\${playerMove}-emoji.png" class="result-move">
<img src="images\\${computerMove}-emoji.png" class="result-move">
Computer`;
}


function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove;
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }else if(randomNumber >=2/3 && randomNumber <= 1){
    computerMove = 'scissors';
  }
  
  return computerMove;
}

function displayScore(){
  document.querySelector('.scores')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//const autoPlay = () => {};
//the above code can also use because of hoisting we use below code.
let isPlaying = false; 
let intervalId;
function autoPlay(){
  //if player is not playing make the as true 
  if(!isPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1500);
    isPlaying = true;
  }
  //if player is playing make them as false
  else{
    clearInterval(intervalId);
    isPlaying = false;
  }
}