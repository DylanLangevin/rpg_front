let body = document.querySelector('body');
let canvasBackground = document.getElementById('canvas-background');
const ctxBackground = canvasBackground.getContext('2d');

let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Récupération des images en background (test)
let img = document.getElementById('img');

// Dessin de l'image de background
ctxBackground.drawImage(img, 0, 0,1024,640);

// Orientation du personnage, la ligne qui correspond à l'image de base
let directionUp = 0;
let directionLeft = 1;
let directionDown = 2;
let directionRight = 3;

// Mouvement du personnage
let moveCharacter;

let previousMoveOrientation;

// Position de la zone de l'image source (le coin supérieur gauche de la frame)
let spriteSheetPosX = 0;
let spriteSheetPosY = 128;

// Taille de l'image qui comporte les sprite, width 576/9 = 64 et height 268/4  = 67
let spriteWidth = 576;
let spriteHeight = 268;

// Nombre de frame
let frameCols = 9;
let frameRows = 4;

// Width de chaque frame 
let frameWidth = spriteWidth/frameCols;
let frameHeight = spriteHeight/frameRows;

// Index de la frame
let currentFrame = 0;

let scaleDivider = 1.5;

let offsetX = 10;
let offsetY = 6;

let hitboxWidth = 30 / scaleDivider;
let hitboxHeight = 50 / scaleDivider;

// Initialisation de l'ojet player
let player = new Player("Player", 'character_profile/male_player.png', {x:600, y:400}, 5, []);//position et inventaire à définir, ajouter des fonctions ect

console.log(player.position);

// Test initialisation d'un PNJ
body.onload = function() {

    // On dessine le caractère
    ctx.drawImage(player.character, spriteSheetPosX, spriteSheetPosY,frameWidth, frameHeight, player.position.x, player.position.y, frameWidth / scaleDivider, frameHeight / scaleDivider);

    // drawPlayerHitbox();
    // drawAllSolidCollisionsBox();

}

function drawPlayerHitbox(){

    ctx.fillStyle = "rgba(255,0,0,0.3)";
    ctx.fillRect(player.position.x + offsetX, player.position.y + offsetY, hitboxWidth,hitboxHeight);
}

// Dessiner le caractère à l'arrêt lorsqu'on arrête d'avancer
function stopMovingCharacter(whichDirection) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    spriteSheetPosX = 0;
    spriteSheetPosY = whichDirection * frameHeight;

    // On dessine le caractère
    ctx.drawImage(player.character, spriteSheetPosX, spriteSheetPosY,frameWidth, frameHeight, player.position.x, player.position.y, frameWidth / scaleDivider, frameHeight / scaleDivider);
    // drawPlayerHitbox();
    // drawAllSolidCollisionsBox();

}


// Choisir la bonne frame
function updateFrame() {

    console.log("pos X" + player.position.x);
    console.log("pos Y" + player.position.y);

    // modulo permet d'obtenir la bonne frame (1, 2, 3, 4...), ça permet d'update l'index de la frame
    currentFrame = ++currentFrame % frameCols;
    console.log("frame", currentFrame);

    // Choisir le point de départ de la frame
    spriteSheetPosX = currentFrame * frameWidth;

    // Mouvement du personnage selon le choix effectué par l'user
    switch (moveCharacter) {
        case "up":
            player.position.y -= player.speed;

            // Va permettre de définir la direction du mouvement

            if(previousMoveOrientation == "down" || previousMoveOrientation == "left" || previousMoveOrientation == "right")
            {
                player.position.y += player.speed;
            }

            spriteSheetPosY = directionUp * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionUp);
            }
            break;

        case "down":
            player.position.y += player.speed;

            if(previousMoveOrientation == "up" || previousMoveOrientation == "left" || previousMoveOrientation == "right")
            {
                player.position.y -= player.speed;
            }

            spriteSheetPosY = directionDown * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionDown);
            } 
            break;

        case "left":
            player.position.x -= player.speed;

            spriteSheetPosY = directionLeft * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionLeft);
            }
            break;

        case "right":
            player.position.x += player.speed;

            spriteSheetPosY = directionRight * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionRight);
            }
            break;

        case "moonWalk":
            player.position.x += player.speed;
            spriteSheetPosY = directionLeft * frameHeight;
            body.onkeyup = event => {
                stopMovingCharacter(directionLeft);
            }
            break;
      
        default:
            break;
    }

    // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(player.character, spriteSheetPosX, spriteSheetPosY,frameWidth, frameHeight, player.position.x, player.position.y, frameWidth / scaleDivider, frameHeight / scaleDivider);

    // drawPlayerHitbox();
    // drawAllSolidCollisionsBox();

    console.log(moveCharacter);
    console.log(previousMoveOrientation);

}


body.onkeydown = event => {
    previousMoveOrientation = moveCharacter;

    switch(event.key) {
        case "ArrowUp":
            moveCharacter = "up";
            updateFrame();
            checkAllSolidCollisions();
            checkCanvasEdgesCollisions();
            break;
            
        case "ArrowDown":
            moveCharacter = "down";
            updateFrame();
            checkAllSolidCollisions();
            checkCanvasEdgesCollisions();
            break;

        case "ArrowLeft":
            moveCharacter = "left";
            updateFrame();
            checkAllSolidCollisions();
            checkCanvasEdgesCollisions();
            break;

        case "ArrowRight":
            moveCharacter = "right";
            updateFrame();
            checkAllSolidCollisions();
            checkCanvasEdgesCollisions();
            break;
        case "m":
            moveCharacter = "moonWalk";
            updateFrame();
            checkAllSolidCollisions();
            checkCanvasEdgesCollisions();
            break;
    }
}