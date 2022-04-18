let btnPlay = document.querySelector("#letsPlay");
let playMainSound = false;
let letsPlayMain = new Audio("sound/Ambiance.mp3");

let btnTakeObj = document.querySelector("#takeObj")
let playTakeObj = false
let letsPlayTakeObj = new Audio("sound/iTellMessage.mp3");

let playWalkSound = false
let letsPlayWalk = new Audio("sound/walk.mp3")


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

function walkSound() {
    playWalkSound = !playWalkSound;
    if (playWalkSound === true) {
        letsPlayWalk.play();
        // letsPlayWalk.loop = true;
    } else if(playWalkSound === false) {
        letsPlayWalk.pause();
        letsPlayWalk.currentTime = 0;
        // letsPlayWalkSound.loop = false;
    }
}

btnTakeObj.addEventListener("click", takeObj);
btnPlay.addEventListener("click", music);