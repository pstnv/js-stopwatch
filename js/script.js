const countdown = document.querySelector('#countdown');
const btnStop = document.querySelector('#btnStop');
const btnPlay = document.querySelector('#btnPlay');
const iconPlay = document.querySelector('#iconPlay');

let amountTime = 0;
let timerID;

const btnIcons = ["https://cdn.glitch.global/80505a81-16d1-4725-88f2-9e54bff658cd/icon_play.png?v=1653738282229", "https://cdn.glitch.global/80505a81-16d1-4725-88f2-9e54bff658cd/icon_pause.png?v=1653738290441"];
let timerOn = false;

btnPlay.addEventListener('click', () => {
    if (timerOn === false ) {
        iconPlay.src = btnIcons[1];
        timerOn = !timerOn;
        timerID = setInterval(startTimer, 10);
    }
    else {
        iconPlay.src = btnIcons[0];
        timerOn = !timerOn;
        clearInterval(timerID);    
    }

});

const oneSecond = 1000;
const oneMinute = 60*oneSecond;
const oneHour = 60*oneMinute;

function startTimer () {
    let hours = Math.floor(amountTime/oneHour);
    let minutes = Math.floor((amountTime%oneHour) / oneMinute);
    let seconds = Math.floor((amountTime%oneMinute) / oneSecond);
    let milliSec = Math.floor(amountTime%oneSecond);

    if (milliSec < 10) {
        milliSec = "00" + milliSec;
    }
    else if (milliSec < 100) {
        milliSec = "0" + milliSec;
    };
    seconds < 10 ? seconds = "0" + seconds : seconds;
    minutes < 10 ? minutes = "0" + minutes : minutes;
    hours < 10 ? hours = "0" + hours : hours;
    
    if (hours >= 100) {clearTimer()}
    else {
        countdown.innerText = `${hours}:${minutes}:${seconds}:${milliSec}`;
        amountTime+=10;
    }        
}

btnStop.addEventListener('click', clearTimer);

function clearTimer () {
    clearInterval(timerID);
    amountTime = 0;
    countdown.innerText = `00:00:00:000`;
    timerOn = false;
    iconPlay.src = btnIcons[0];
};

gsap.from("#countdown", {
    duration: 2.5,
    opacity: 0
});

gsap.from("#btnStop", {
    x: -400,
    rotate: -180,
    duration: 1,
    opacity: 0
});

gsap.from("#btnPlay", {
    y: -400,
    rotate: 180,
    duration: 1,
    opacity: 0
});