"use strict"
//Element
const check = document.querySelector(".check");
const input = document.querySelector(".input-num");
const guessingText =document.querySelector(".guessing-text");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");
// variable
const SECRET_NUM = Math.trunc(Math.random()* 20 +1);
const SCORE = 20;
const HIGH_SCORE = 0;

// checking
check.addEventListener("click", function(){
    const inputNum = Number(input.value)
})
