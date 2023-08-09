let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();

let isAutoPlaying=false;
let intervalId;

//const autoPlay=()=>{
  //};

function autoPlay(){
  if(!isAutoPlaying){
   intervalId= setInterval(()=>{
      const playerMove=pickComputerMove();
      playGame(playerMove);
     },1000);
     isAutoPlaying=true;
  }
  else{
  clearInterval(intervalId);
  isAutoPlaying=false;
  }  
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('scissors');
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  }
  else if(event.key==='p'){
    playGame('paper');
  }
  else if(event.key==='s'){
    playGame('scissors');
  }
});

function playGame(playerMove){
  
const computerMove=pickComputerMove();
let result= '';

if(playerMove==='scissors'){
if(computerMove==='rock'){
 result='you lose.';
}
else if(computerMove==='paper'){
 result='you win.';}
else if(computerMove==='scissors'){
 result='Tie.';}
}

 else if(playerMove==='rock'){
  if(computerMove==='rock'){
result='Tie.';
}
else if(computerMove==='paper'){
result='you lose.';}
else if(computerMove==='scissors'){
result='you win.';}
 }
 
 else if(playerMove==='paper'){
  if(computerMove==='rock'){
 result='you win.';
}
else if(computerMove==='paper'){
 result='Tie.';}
else if(computerMove==='scissors'){
 result='you lose.';}
 
 }

 if(result==='you win.'){
  score.wins++;
 }
 else if(result==='you lose.'){
  score.losses++;
 }
 else if(result==='Tie.'){
  score.ties++;
 }

 localStorage.setItem('score',JSON.stringify(score));

 updateScoreElement();

 document.querySelector('.js-result').innerHTML=result;

 document.querySelector('.js-moves').innerHTML=` you
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score')
.innerHTML=`wins : ${score.wins},losses : ${score.losses},Ties : ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber>=0 && randomNumber<1/3){
    computerMove = 'rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove = 'paper';
  }
  else if(randomNumber>=2/3 && randomNumber<1){
    computerMove = 'scissors';
  }

  return computerMove;
}