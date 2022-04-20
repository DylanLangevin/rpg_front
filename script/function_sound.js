let musicButton = document.querySelector("#music-btn");
let soundStatus = false;
let playMainSound = false;
let letsPlayMain = new Audio("sound/Ambiance.mp3");
letsPlayMain.volume = 0.05;

let letsPlayTakeObj = new Audio("sound/iTellMessage.mp3");

let playWalkSound = false;
let letsPlayWalk = new Audio("sound/Footsteps.mp3");

let letsPlayDoor = new Audio("sound/openDoor.mp3");

let letsPlayTree = new Audio("sound/tree.mp3");

let playStillDre = false;
let letsPlayDre = new Audio("sound/stillDre.mp3");



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

function OpenDoor() {
    letsPlayDoor.play();
}

function treeContact() {
    letsPlayTree.play();
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

function stillDre() {
    if (playMainSound === true) {
        letsPlayMain.pause();
        letsPlayMain.currentTime = 0;
        playMainSound = false;
        soundStatus = false;
        musicButton.style.background = "url('../images/sounds-icon/sound-off.svg')"
    }
    letsPlayDre.play();
}


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