'use strict';
const resetButtonEl = document.querySelector('.btn.again')
const guessEl = document.querySelector('.guess')
const checkButton = document.querySelector('.btn.check')
const messageEl = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const highscoreEl = document.querySelector('.highscore')
const bodyEl = document.querySelector('body')
const numberEl = document.querySelector('.number')
let highscore = 20;
let score =20;
let randomChoice = 0;
updateRandomChoice()

checkButton.addEventListener('click',handleGuess)
resetButtonEl.addEventListener('click',reset)
 
 

function handleGuess(){
    const guess = +guessEl.value; 
    if(!guess ){ 
        displayMessage( "☠️ Invalid input!")
     }
    if(score<=0){ 
        displayMessage( "💥 Game Over!")
    }
    else if(guess===randomChoice){
         highscore = score;
         displayMessage("🎉 Correct number!") 
         bodyEl.style.backgroundColor ='#60b347'
         highscoreEl.innerText = highscore
         numberEl.innerText = guess
    }
    else if(guess!==randomChoice){
        displayMessage(  guess>randomChoice?"📈 Too heigh!":"📉 Too low!") 
        decreaseScore()
       
    } 
    
}


function updateRandomChoice(){
    randomChoice = Math.floor(Math.random()*21) ;
}

function decreaseScore(){
    score--
    scoreEl.innerText = score;
}

function reset(){
    score =20;
    numberEl.innerHTML ="?"
    bodyEl.style.backgroundColor = '#222'
    guessEl.value =0
    scoreEl.innerText = 0
    updateRandomChoice()
    displayMessage("Start guessing...")
}

function displayMessage(message){
    messageEl.innerHTML  = message
}