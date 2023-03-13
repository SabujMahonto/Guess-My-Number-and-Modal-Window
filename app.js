"use strict"
const btns = document.querySelectorAll(".btn");
const modal =document.querySelector(".modal");

const closeBtn = document.querySelector(".close");
const overlay =document.querySelector('.overlay');

function modalVisible(){
    modal.style.visibility = 'visible';
    modal.style.opacity = 1;
}
function modalHidden(){
    modal.style.visibility = 'hidden';
    modal.style.opacity = 0;
}
function overlayVisible(){
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
}
function overlayHidden(){
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",function(){
       modalVisible()
       overlayVisible()
    })
}

closeBtn.addEventListener("click", function(){
   modalHidden()
  overlayHidden()
})

overlay.addEventListener("click", function(){
   modalHidden()
    overlayHidden()
})