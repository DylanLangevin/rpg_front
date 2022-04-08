let canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let body = document.querySelector('body');

// Orientation du personnage, la ligne qui correspond à l'image de base
let directionUp = 0;
let directionLeft = 1;
let directionDown = 2;
let directionRight = 3;

// Mouvement du personnage
let moveCharacter;

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

// Initialisation de l'ojet player
let player = new Player("Adrien", 'character_profile/male_player.png', [dx, dy], ["carte des suspects", "bout de papier"]);//position et inventaire à définir, ajouter des fonctions ect



// Test initialisation d'un PNJ
body.onload = function() {
    ctx.drawImage(femaleCitizen.character, 0, 128,frameWidth, frameHeight, femaleCitizen.position[0], femaleCitizen.position[1], frameWidth, frameHeight)
    femaleCitizen.textZone("Bonjour Damien");

    ctx.drawImage(maleCitizen.character, 0, 128,frameWidth, frameHeight, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)
    maleCitizen.textZone("Bonjour villageoise");
}
// Fin du test (pnj)


// Test déplacement (les fonctions)

// Choisir la bonne frame
function updateFrame() {
    // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // modulo permet d'obtenir la bonne frame (1, 2, 3, 4...), ça permet d'update l'index de la frame
    currentFrame = ++currentFrame % frameCols;
    console.log("frame", currentFrame);

    // Choisir le point de départ de la frame
    sx = currentFrame * frameWidth;

    // Mouvement du personnage selon le choix effectué par l'user
    if (moveCharacter === "up") {
        dy -= 5
        // Va permettre de définir la direction du mouvement
        sy = directionUp * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionUp);
        }
    } 
    else if (moveCharacter === "down") {
        dy += 5
        sy = directionDown * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionDown);
        } 
    }

    else if (moveCharacter === "left") {
        dx -= 5
        sy = directionLeft * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionLeft);
        }
    }
    else if (moveCharacter === "right") {
        dx +=5
        sy = directionRight * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionRight);
        }
    }
    else if (moveCharacter === "moonWalk") {
        dx += 5
        sy = directionLeft * frameHeight;
        body.onkeyup = event => {
            stopMovingCharacter(directionLeft);
        }
    }    
}

let iTalk;

// Dessiner le caractère à l'arrêt lorsqu'on arrête d'avancer
function stopMovingCharacter(whichDirection) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    sx = 0;
    sy = whichDirection * frameHeight;
    
    ctx.drawImage(femaleCitizen.character, 0, 128,frameWidth, frameHeight, femaleCitizen.position[0], femaleCitizen.position[1], frameWidth, frameHeight)
    femaleCitizen.textZone("Bonjour Damien");

    ctx.drawImage(maleCitizen.character, 0, 128,frameWidth, frameHeight, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)
    maleCitizen.textZone("Bonjour villageoise");

    ctx.drawImage(player.character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight)
    player.textZone(iTalk, dx, dy);
}

// Dessiner le caractère
function drawCharacter() {
    // On update d'abord la frame
    updateFrame();

    // Test dialogue sous condition
    if(dx <= 50) {
        iTalk = "j'me casse"
    } else if(dx <= 200 && dx > 50) {
        iTalk = "c'est nul ici"
    } else if(dx > 200) {
        iTalk = "elle sont où les meufs?"
    }

    player.textZone(iTalk, dx, dy);

    ctx.drawImage(femaleCitizen.character, 0, 128,frameWidth, frameHeight, femaleCitizen.position[0], femaleCitizen.position[1], frameWidth, frameHeight)
    femaleCitizen.textZone("Bonjour Damien");

    ctx.drawImage(maleCitizen.character, 0, 128,frameWidth, frameHeight, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)
    maleCitizen.textZone("Bonjour villageoise");
    // Fin du test dialogue sous condition
        
    // On dessine le caractère
    ctx.drawImage(player.character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight)
}

body.onkeydown = event => {
    switch(event.key) {
        case "ArrowUp":
            moveCharacter = "up";
            drawCharacter();
            break;
            
        case "ArrowDown":
            moveCharacter = "down";
            drawCharacter();
            
            break;

        case "ArrowLeft":
            moveCharacter = "left";
            drawCharacter();
            break;

        case "ArrowRight":
            moveCharacter = "right";
            drawCharacter();
            break;
        case "m":
            moveCharacter = "moonWalk";
            drawCharacter();
            break;
    }
}
// fin du test déplacement (les fonctions)



