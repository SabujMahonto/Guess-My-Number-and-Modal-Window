"use strict"
//Element
const check = document.querySelector(".check");
const input = document.querySelector(".input-num");
const guessingText =document.querySelector(".guessing-text");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");
const correctAns = document.querySelector(".game-correct-ans");
// variable
const SECRET_NUM = Math.trunc(Math.random()* 20 +1);
let SCORE = 20;
let HIGH_SCORE = 0;

// display text 
function displayGuessingTest(text){
    guessingText.textContent = text;
}

// checking
check.addEventListener("click", function(){
    const inputNum = Number(input.value)
    console.log(inputNum);
    //when there is no input
    if(!inputNum) displayGuessingTest('input a valid Number !')

    else if(inputNum === SECRET_NUM){
        displayGuessingTest("Correct Ans!")
        correctAns.textContent = SECRET_NUM;
        correctAns.style.backgroundColor = "#222";
        document.body.style.backgroundColor = "teal"

        if(SCORE > HIGH_SCORE){
           HIGH_SCORE = SCORE;
            highScore.textContent = HIGH_SCORE;
            console.log(highScore);
        }

    }
    // when guess is wrong
    else if (inputNum !== SECRET_NUM){
        if(SCORE > 1){
            displayGuessingTest(inputNum > SECRET_NUM ? "Too High" : "Too Low");
        SCORE --
        score.textContent = SCORE;
        }
        else{
            displayGuessingTest("game over")
         score.textContent = 0;
         input.value = ""
        }
        
    }
    
})

// play again 
playAgain.addEventListener("click", function(){
SCORE = 20;
const SECRET_NUM = Math.trunc(Math.random()* 20 +1);
displayGuessingTest("start guessing ...")
document.body.style.backgroundColor = "#222";
correctAns.style.backgroundColor = "teal"
correctAns.textContent = "?"
score.textContent = SCORE;
input.value = ""
})
