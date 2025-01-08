let random = parseInt(Math.random()*100+1);

const guessSlot = document.querySelector('.guesses')
const userInput = document.querySelector("#guessField");
const submitButton = document.querySelector('#subt');
const remainingGuess = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
let para = document.createElement('p');
const resultParas = document.querySelector('.resultParas')


let guessNum = 1;
let prevGuesses = [];
let playGame = true;

if(playGame){
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    LowOrHi.setAttribute('id','wrong')
    if(isNaN(guess)){
        displayMessage(`Please Enter a valid number`);
    }
    else if(guess < 1 || guess > 100){
        displayMessage(`Please Enter a number between 1 and 100`);
    }
    else{
        if(guessNum === 10){
            displayMessage(`Game Over ! The number was ${random}`);
            endGame();
        }
        else{
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
 
}

function displayGuesses(guess){
    prevGuesses.push(guess);
    
    userInput.value = ''
    guessNum++;
    remainingGuess.innerHTML = `${11-guessNum}`
    guessSlot.innerHTML += `${guess},`;
    console.log(guessSlot);
    console.log(guessNum);
}

function checkGuess(guess){
    if(guess === random){
        LowOrHi.setAttribute('id','right')
        displayMessage(`You got it right! The number was ${random}`);
        endGame();
    }
   else if(guess > random){
        displayMessage(`Too high! Try a lower number`);
    }
    else{
        displayMessage(`Too low! Try a higher number`);
    }
}



function displayMessage(msg){
    LowOrHi.innerHTML= msg;
    
}
function endGame(){
    //game over
    
    playGame = false;
    userInput.value = ''
    userInput.setAttribute('disabled','');
    para.classList.add('button');
    para.innerHTML = `<h2 id='newgame'> Start New Game</h1>`;
    resultParas.appendChild(para)
    
    para.addEventListener('click',(e)=>{
        newGame()
    })
}
function newGame(){
    displayMessage('')
    playGame =true;
    prevGuesses = [];
    guessNum = 1;
    random = parseInt(Math.random()*10+1);
    userInput.removeAttribute('disabled')
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${11-guessNum}`;
    resultParas.removeChild(para)
}

