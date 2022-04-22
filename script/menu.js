const playButton = document.querySelector("#play-button");
const playBlock = document.querySelector("#play-block");
const returnPlay = document.querySelector("#return-play");

const optionsButton = document.querySelector("#options-button");
const optionsBlock = document.querySelector("#options-block");
const returnOptions = document.querySelector("#return-options");

const creditsButton = document.querySelector("#credits-button");
const creditsBlock = document.querySelector("#credits-block");
const returnCredits = document.querySelector("#return-credits");

const female = document.querySelector("#female");
const male = document.querySelector("#male");

const confirm = document.querySelector("#confirm");
const cancel = document.querySelector("#cancel");

const startMenu = document.querySelector(".start-menu");
const loadingContain = document.querySelector(".loading-contain");
const loadingBar = document.querySelector(".loading-bar");


let genderChoice = "none";
let playerName = "";

let loading;
let timeLoading;

let barSize = 0;
let timeCounter = 0;

function displayBlock(BlockTarget) {
    BlockTarget.style.display = 'block';
}

function displayNone(BlockTarget) {
    BlockTarget.style.display = 'none';
}

playButton.onclick = () => {
    displayBlock(playBlock);
}
returnPlay.onclick = () => {
    displayNone(playBlock);
}

optionsButton.onclick = () => {
    displayBlock(optionsBlock);
}
returnOptions.onclick = () => {
    displayNone(optionsBlock);
}

creditsButton.onclick = () => {
    displayBlock(creditsBlock);
}
returnCredits.onclick = () => {
    displayNone(creditsBlock);
}

female.onclick = () => {
    male.style.display = "none";
    genderChoice = "character_profile/female_player.png"
    console.log(genderChoice)
}

male.onclick = () => {
    female.style.display = "none"
    genderChoice = "character_profile/male_player.png"
}

confirm.onclick = () => {
    playerName = document.getElementById("player-name").value;
    if (genderChoice != "none" && playerName != "") {
        localStorage.setItem("name", playerName);
        localStorage.setItem("gender", genderChoice);
        startMenu.style.display = "none"
        loadingContain.style.display = "flex";
        loading = setInterval(loadingAnimation, 45);
        timeLoading = setInterval(counter, 45);  
        // window.location = "game.html";
    }
}

cancel.onclick = () => {
    male.style.display = "block"
    female.style.display = "block"
    genderChoice = "none";
    playerName = "";
}

function loadingAnimation() {
    barSize += 5;
    if (barSize == 200) {
        clearTimeout(loading); 
    } 

    loadingBar.style.width = barSize + "px";
}
    
function counter() {
    timeCounter += 5;
    if (timeCounter == 250) {
        clearTimeout(timeLoading); 
        window.location = "game.html";
    }
}
