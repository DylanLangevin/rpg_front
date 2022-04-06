// Initialisation du canvas
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


// Sélection du body
let body = document.querySelector('body');

// Orientation du personnage, la ligne qui correspond à l'image de base
let directionUp = 0;
let directionLeft = 1;
let directionDown = 2;
let directionRight = 3;

// Mouvement du personnage
let moveUp = false;
let moveDown = false;
let moveRight = false;
let moveLeft = false;

// Position où le dessin sera dessiné sur le canvas
let dx = 0;
let dy = 0;

// Position de la zone de l'image source (le coin supérieur gauche de la frame)
let sx;
let sy;

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
let currentFrame = 0

// Récupérer l'image
let character = new Image();
character.src = 'img/lea.png';


// Mouvement du personnage selon la touche du clavier choisie
function characterMove() {
    body.onkeydown = event => {
        switch(event.key) {
            case "ArrowUp":
                moveUp = true;
                onkeyup = event => {
                    moveUp = false
                }
                moveDown = false;
                moveRight = false;
                moveLeft = false;
                break;
                
            case "ArrowDown":
                moveDown = true;
                onkeyup = event => {
                    moveDown = false
                }
                moveRight = false;
                moveLeft = false;
                moveUp = false;
                break;

            case "ArrowLeft":
                moveLeft = true;
                onkeyup = event => {
                    moveLeft = false
                }
                moveUp = false;
                moveDown = false;
                moveRight = false;
                break;

            case "ArrowRight":
                moveRight = true;
                onkeyup = event => {
                    moveRight = false
                }
                moveUp = false;
                moveDown = false;
                moveLeft = false;
                break;
        }
    }
}

// Choisir la bonne frame
function updateFrame() {
    // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // modulo permet d'obtenir la bonne frame (1, 2, 3, 4...), ça permet d'update l'index de la frame
    currentFrame = ++currentFrame % frameCols; 

    // Choisir le point de départ de la frame
    sx = currentFrame * frameWidth;

    // Mouvement du personnage selon le choix effectué par l'user
    characterMove()
    if (moveUp) {
        dy -= 5
        // Va permettre de définir la direction du mouvement
        sy = directionUp * frameHeight;
        console.log(moveUp)
    }
    if (moveDown) {
        dy += 5
        sy = directionDown * frameHeight;
    }
    if (moveLeft) {
        dx -= 5
        sy = directionLeft * frameHeight;
    }
    if (moveRight) {
        dx +=5
        sy = directionRight * frameHeight;
    } 
}

// Dessiner le caractère
function drawCharacter() {
    // On update d'abord la frame
    updateFrame();
    // On dessine le caractère
    ctx.drawImage(character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight)
    console.log(dx, dy);
}

// La fonction drawCharacter sera appelée toutes les 100ms
setInterval(function() {
    drawCharacter();
}, 100)


// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// Cette fonction prend la zone de l'image source spécifiée par le rectangle dont le coin en haut à gauche est (sx, sy) et dont la largeur et la hauteur sont sWidth et sHeight puis dessine cette portion de l'image dans le canevas en le plaçant sur le canevas (aux coordonnées dx, dy) et le redimensionne à la taille spécifiée par dWidth et dHeight.