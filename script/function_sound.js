let btnPlay = document.querySelector("#letsPlay");
let playMainSound = false;
let letsPlayMain = new Audio("sound/Ambiance.mp3");


function music() {
    playMainSound = !playMainSound;
    if (playMainSound === true) {
        letsPlayMain.play();
    } else if(playMainSound === false) {
        letsPlayMain.pause();
        letsPlayMain.currentTime = 0;
    }
}

btnPlay.addEventListener("click", music);