let btnPlay = document.querySelector("#letsPlay");
let playMainSound = false;
let letsPlayMain = new Audio("sound/Ambiance.mp3");

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
    playTakeObj = !playTakeObj;
    if (playTakeObj === true) {
        letsPlayTakeObj.play();
        // letsPlayTakeObj.loop = true;
    } else if(playTakeObj === false) {
        letsPlayTakeObj.pause();
        letsPlayTakeObj.currentTime = 0;
        // letsPlayTakeObj.loop = false;
    }
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

btnTakeObj.addEventListener("click", takeObj);
btnPlay.addEventListener("click", music);