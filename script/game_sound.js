const musicButton = document.querySelector("#music-btn");

let soundStatus = false;
musicButton.onclick = () => {
    if (soundStatus == false) {
        soundStatus = true;
        musicButton.style.background = "url('../images/sounds-icon/sound-on.svg')"
    } else {
        soundStatus = false;
        musicButton.style.background = "url('../images/sounds-icon/sound-off.svg')"
    }
}