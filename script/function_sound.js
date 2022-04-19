let btnPlay = document.querySelector("#letsPlay");
let playMainSound = false;
let letsPlayMain = new Audio("sound/Ambiance.mp3");
letsPlayMain.volume = 0.05;

let btnTakeObj = document.querySelector("#takeObj")
let playTakeObj = false
let letsPlayTakeObj = new Audio("sound/iTellMessage.mp3");

let playWalkSound = false
let letsPlayWalk = new Audio("sound/Footsteps.mp3")



function music() {
    playMainSound = !playMainSound;
    if (playMainSound === true) {
        letsPlayMain.play();
    } else if(playMainSound === false) {
        letsPlayMain.pause();
        letsPlayMain.currentTime = 0;
    }
}

function takeObj() {
        letsPlayTakeObj.play();
}

function walkSound(playWalk) {
    if (playWalk && !playWalkSound) {
        letsPlayWalk.play();
        playWalkSound = true;
        letsPlayWalk.loop = true;
    } else if(!playWalk) {
        letsPlayWalk.pause();
        letsPlayWalk.currentTime = 0;
        letsPlayWalk.loop = false;
        playWalkSound = false;
    }
}

const musicButton = document.querySelector("#music-btn");

let soundStatus = false;
musicButton.onclick = () => {
    if (soundStatus == false) {
        soundStatus = true;
        musicButton.style.background = "url('../images/sounds-icon/sound-on.svg')"
        music();
    } else {
        soundStatus = false;
        musicButton.style.background = "url('../images/sounds-icon/sound-off.svg')"
        music();
    }
}
