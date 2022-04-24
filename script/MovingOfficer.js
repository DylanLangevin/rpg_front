const OfficerCanvas = document.querySelector('#canvas-over')

const OfficerCtx = OfficerCanvas.getContext('2d');

let speed = 4;

let hitboxOfficierVisionWidth = 120;
let hitboxOfficierVisionheight = 40;

let officierFramePosLeft = directionRight * frameHeight;
let officierFramePosRight = directionLeft * frameHeight;

let offsetHitboxX = (frameWidth / scaleDivider) / 2;

let officierCurrentAnimeFrame = 0;

let offsetRecthitBoxX = 15;

let cityOfficierMovingSolidObjectCollision = [

];

let coffeeOfficierMovingSolidObjectCollision = [

];

let parcRightOfficierMovingSolidObjectCollision = [

    { posX: 730, posY: 90, stopLeft: 820, stopRight: 720, officierDirection: 3 },
    { posX: 730, posY: 290, stopLeft: 820, stopRight: 720, officierDirection: 3 },
    { posX: 230, posY: 370, stopLeft: 320, stopRight: 220, officierDirection: 3 }
];

let parcLeftOfficierMovingSolidObjectCollision = [
    { posX: 200, posY: 80, stopLeft: 290, stopRight: 190, officierDirection: 3 },
    { posX: 200, posY: 290, stopLeft: 290, stopRight: 190, officierDirection: 3 },
    { posX: 530, posY: 380, stopLeft: 620, stopRight: 520, officierDirection: 3 }
];

let parcOfficierMovingSolidObjectCollision = [
    { posX: 120, posY: 515, stopLeft: 210, stopRight: 110, officierDirection: 3 },
    { posX: 530, posY: 235, stopLeft: 620, stopRight: 520, officierDirection: 3 },
    { posX: 600, posY: 295, stopLeft: 690, stopRight: 590, officierDirection: 3 },
    { posX: 730, posY: 70, stopLeft: 820, stopRight: 720, officierDirection: 3 }
];

let libraryOfficierMovingSolidObjectCollision = [

];


let librarySecondOfficierMovingSolidObjectCollision = [

];

let mapsOfficierObjectsCollisions = [cityOfficierMovingSolidObjectCollision, coffeeOfficierMovingSolidObjectCollision, parcRightOfficierMovingSolidObjectCollision, parcLeftOfficierMovingSolidObjectCollision, parcOfficierMovingSolidObjectCollision, libraryOfficierMovingSolidObjectCollision, librarySecondOfficierMovingSolidObjectCollision]


function movingOfficer() {
    OfficerCtx.clearRect(0, 0, 1024, 640);

    if (hitboxToggle) {
        drawHitBoxOfficer();
    }

    checkOfficerMovingSolidCollisions();
    checkOfficerVisionCollisions();

    mapsOfficierObjectsCollisions[currentMap].forEach(element => {

        if (element.posX <= element.stopRight) {
            speed = 4;
            officerCurrentPos = officierFramePosLeft - 5;
            hitboxOfficierVisionWidth = 120;
            element.officierDirection = 3;
            offsetRecthitBoxX = 15
        }
        else if (element.posX >= element.stopLeft) {
            speed = -4;
            officerCurrentPos = officierFramePosRight - 5;
            hitboxOfficierVisionWidth = -120;
            element.officierDirection = 1;
            offsetRecthitBoxX = 8
        }

        // On incrémente la vitesse
        element.posX += speed;

        // Animation du policier
        if (officierCurrentAnimeFrame < 512) {
            officierCurrentAnimeFrame += frameWidth;
        }
        else {
            officierCurrentAnimeFrame = 0;
        }

        // On dessine la hitbox
        OfficerCtx.fillStyle = 'rgba(150,150,0,0.2';
        OfficerCtx.fillRect(element.posX + offsetHitboxX, element.posY, hitboxOfficierVisionWidth, hitboxOfficierVisionheight);

        // On dessine le caractère
        OfficerCtx.drawImage(police.character, officierCurrentAnimeFrame, element.officierDirection * frameHeight, frameWidth, frameHeight, element.posX, element.posY, frameWidth / scaleDivider, frameHeight / scaleDivider);
    });
};

setInterval(() => { movingOfficer() }, 100);

function drawHitBoxOfficer() {
    OfficerCtx.fillStyle = "rgba(200,0,0,0.2)"
    mapsOfficierObjectsCollisions[currentMap].forEach(element => {

        OfficerCtx.fillRect(element.posX + offsetRecthitBoxX, element.posY, 20, 40)

    });
};


function checkOfficerMovingSolidCollisions() {
    mapsOfficierObjectsCollisions[currentMap].forEach(element => {
        if (player.position.x + offsetX + hitboxWidth > element.posX + offsetRecthitBoxX && player.position.x + offsetX < element.posX + offsetRecthitBoxX + 20 && player.position.y + offsetY + hitboxHeight > element.posY && player.position.y + offsetY < element.posY + 40) {

            if (player.position.x + offsetX + hitboxWidth > element.posX + offsetRecthitBoxX + 20) {
                player.position.x += 10;
                player.position.y += 5;
                updateFrame();
            }
            else if (player.position.x + offsetX < element.posX + offsetRecthitBoxX) {
                player.position.x -= 10;
                player.position.y += 5;
                updateFrame();
            }
        }
    });
}

function checkOfficerVisionCollisions() {
    mapsOfficierObjectsCollisions[currentMap].forEach(element => {

        if (element.officierDirection == 3) {
            if (player.position.x + offsetX + hitboxWidth > element.posX + offsetHitboxX && player.position.x + offsetX < element.posX + offsetHitboxX + 120 && player.position.y + offsetY + hitboxHeight > element.posY && player.position.y + offsetY < element.posY + 40) {
                ctxBackground.clearRect(0, 0, 1024, 640);
                ctxBackground.drawImage(cityMapImg, 0, 0, 1024, 640);
                currentMap = 0;
                player.position.x = 920;
                player.position.y = 570;
                updateFrame();
                OfficerCatchPlayerLoadingScreen();
                loadingBar.style.width = 0;
            }
        }
        else {
            if (player.position.x + offsetX + hitboxWidth > (element.posX - 120) + offsetHitboxX && player.position.x + offsetX < (element.posX - 120) + offsetHitboxX + 120 && player.position.y + offsetY + hitboxHeight > element.posY && player.position.y + offsetY < element.posY + 40) {
                ctxBackground.clearRect(0, 0, 1024, 640);
                ctxBackground.drawImage(cityMapImg, 0, 0, 1024, 640);
                currentMap = 0;
                player.position.x = 920;
                player.position.y = 570;
                updateFrame();
                OfficerCatchPlayerLoadingScreen();
                loadingBar.style.width = 0;

            }
        }
    });
}

function OfficerCatchPlayerLoadingScreen(){
    // Animations Loading screen catch policier
    walkSound(false);
    barSize = 0;
    loadingContain.style.display = "flex";
    document.querySelector("#canva-div").style.display = "none";
    document.querySelector("#inventory").style.display = "none";
    loading = setInterval(loadingAnimation, 45);
    setTimeout( () => {loadingContain.style.display = "none";
                        document.querySelector("#canva-div").style.display = "block";
                        document.querySelector("#inventory").style.display = "flex";
                    },3000);
}