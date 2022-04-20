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


let genderChoice = "none";
let playerName = "";

female.onclick = () => {
    male.style.display = "none";
    genderChoice = "character_profile/female_player.png"
    console.log(genderChoice)
}

male.onclick = () => {
    female.style.display = "none"
    genderChoice = "character_profile/male_player.png"
    console.log(genderChoice)
}

let loadingStatus = false;

confirm.onclick = () => {
    playerName = document.getElementById("player-name").value;
    console.log(playerName)
    console.log(genderChoice)
    if (genderChoice != "none" && playerName != "") {
        localStorage.setItem("name", playerName);
        localStorage.setItem("gender", genderChoice);
        startMenu.style.display = "none"
        loadingContain.style.display = "flex";
        startLoading();
        // window.location = "game.html";
    }
    
}

cancel.onclick = () => {
    male.style.display = "block"
    female.style.display = "block"
    genderChoice = "none";
    playerName = "";
}

let x = 0;
let j = 0;

function startLoading() {
    let loading = setInterval(loadingAnimation, 45);
    let changePage = setInterval(counter, 45);

    function loadingAnimation() {
        x += 5;
        if (x == 200) {
            clearTimeout(loading); 
        } 
        
        loadingBar.style.width = x + "px";

        console.log(x)
        console.log(j)
    }

    function counter() {
        j += 5;
        if (j == 250) {
            clearTimeout(changePage);
            window.location = "game.html";
        }
    }

}