const button = document.querySelector('button');
const frame = document.querySelector('.frame');
const counter = document.querySelector('.counter');
const body = document.querySelector('body');
const sound = document.getElementById("audio");
const startButton = document.querySelector('.start');
const restart = document.querySelector('.restart');
const x = document.getElementById("myAudio");


button.style.visibility='hidden' 
score.style.visibility='hidden';
title.style.visibility='visible';

// when the start button is pressed, play blip SFX
startButton.addEventListener('click',() => {
    function playAudio() { 
        x.play(); 
      } 
playAudio()
let clicks = 0;
// make elements visible/hidden
counter.style.visibility='visible';
start.style.visibility='hidden';
button.style.visibility='visible';
timer.style.visibility='visible';
title.style.visibility='hidden';
score.style.visibility='hidden';
// begin timer 
let timeLeft = 30;
    const elem = document.getElementById('timer');
    const timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        timeup();
      } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
      }
    }
// when the time is up, do this...
    function timeup(){
    console.log("times up" + clicks);
    button.style.visibility='hidden';
    timer.style.visibility='hidden';
    counter.style.visibility='hidden';
    document.getElementById("score").innerHTML = clicks;
    score.style.visibility='visible';  
    start.style.visibility='visible'; 
}
//generate random color for background
button.addEventListener('click',() => {
    audio.play();
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    frame.style.backgroundColor = color;
    let color2 = "#";
    color2 += Math.random().toString(16).slice(2,8);
    button.style.backgroundColor = color2;
    let color3 = "#";
    color3 += Math.random().toString(16).slice(2,8);
    body.style.backgroundColor = color3;
//random color for border
    let color4 = "#";
    color4 += Math.random().toString(16).slice(2,8);
    frame.style.borderColor = color4;
    let color5 = "#";
    color5 += Math.random().toString(16).slice(2,8);
    button.style.borderColor = color5;
// random font color
    let color6 = "#";
    color6 += Math.random().toString(16).slice(2,8);
    counter.style.color = color6;
    let color7 = "#";
    color7 += Math.random().toString(16).slice(2,8);
    timer.style.color = color7;
// random position x 
    let xPos = Math.random()* 80 + "%";
    button.style.left = xPos;

// random position y
    let yPos = Math.random()* 70 + "%";
    button.style.top = yPos;


//counter
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

})
})


