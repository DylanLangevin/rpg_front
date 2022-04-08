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

// Initialisation des objets pnj
let secretary = new Pnj("Secrétaire", 'character_profile/secretary.png', [12, 126]);//position a définir
let barRegular = new Pnj("Habitué du bar", 'character_profile/bar_regular.png', [12, 126]);//position a définir
let engineer = new Pnj("Ingénieur fou", 'character_profile/engineer.png', [100, 100]);//position a définir
let childhoodFriend = new Pnj("Ami d'enfance", 'character_profile/childhood_friend.png', [12, 126]);//position a définir
let plantJanitor = new Pnj("Gardien d'usine", 'character_profile/plant_janitor.png', [12, 126]);//position a définir
let elder = new Pnj("Ancien du village", 'character_profile/elder.png', [12, 126]);//position a définir
let mayorWife = new Pnj("Femme du maire", 'character_profile/mayor_wife.png', [12, 126]);//position a définir
let foreigner = new Pnj("L'étrangère", 'character_profile/foreigner.png', [12, 126]);//position a définir
let reader = new Pnj("Lectrice de polar", 'character_profile/reader.png', [12, 126]);//position a définir
let librarian = new Pnj("Bibliothécaire", 'character_profile/librarian.png', [12, 126]);//position a définir
let policeFriend = new Pnj("Policier ami", 'character_profile/police_friend.png', [12, 126]);//position a définir
let maleCitizen = new Pnj("Villageois", 'character_profile/male_citizen.png', [12,126]);//position a définir
let femaleCitizen = new Pnj("Villageoise", 'character_profile/female_citizen.png', [12, 126]);//position a définir

// Initialisation de l'ojet cops
let police = new Police("Policier", 'character_profile/police.png', [12, 126]);//position a définir

// Joueur actuel avec lequel on joue
let character = player.characterProfil();

// Test initialisation d'un PNJ
pnj = maleCitizen.characterProfil();
body.onload = function() {
    ctx.drawImage(pnj, 0, 128,frameWidth, frameHeight, 500, 126, frameWidth, frameHeight)
}
// Fin du test (pnj)


// Test déplacement (les fonctions)

// Choisir la bonne frame
function updateFrame() {
    // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    // Redessine le pnj
    ctx.drawImage(pnj, 0, 128,frameWidth, frameHeight, 500, 126, frameWidth, frameHeight)

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

let colorRect = "blue"
let iTalk;

// Fonction de collision
function collision(){
    // Collision with rect1
    if(dx + frameWidth > 200 && dx < 200 + 100 && dy + frameHeight > 200 && dy < 200 + 100)
    {
        colorRect = "green";

    } else {
        colorRect = "blue"
    }
}

// Dessiner le caractère
function drawCharacter() {
    // On update d'abord la frame
    updateFrame();

    // Dessin d'une forme pour test la hitbox
    ctx.fillStyle = colorRect
    ctx.fillRect(200,200,100,100)

    // Test dialogue sous condition

    if(dx <= 50) {
        iTalk = "j'me casse"
    } else if(dx <= 200 && dx > 50) {
        iTalk = "c'est nul ici"
    } else if(dx > 200) {
        iTalk = "elle sont où les meufs?"
    }

    player.textZone(iTalk, dx, dy);
    // Fin du test dialogue sous condition
        
    // On dessine la hitbox du perso
    ctx.fillStyle = "red"
    ctx.fillRect(dx, dy, frameWidth, frameHeight)

    // On dessine le caractère
    ctx.drawImage(character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight)
}

// Dessiner le caractère à l'arrêt lorsqu'on arrête d'avancer
function stopMovingCharacter(whichDirection) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    collision();

    // Dessin d'une forme pour test la hitbox
    ctx.fillStyle = colorRect
    ctx.fillRect(200,200,100,100)

    // Redessine le pnj
    ctx.drawImage(pnj, 0, 128,frameWidth, frameHeight, 500, 126, frameWidth, frameHeight)

    sx = 0;
    sy = whichDirection * frameHeight;
    // On dessine la hitbox du perso

    ctx.fillStyle = "red"
    ctx.fillRect(dx, dy, frameWidth, frameHeight)

    // On dessine le caractère
    ctx.drawImage(character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight)
    player.textZone(iTalk, dx, dy);

    
}



body.onkeydown = event => {
    switch(event.key) {
        case "ArrowUp":
            moveCharacter = "up";
            collision();
            drawCharacter();
            break;
            
        case "ArrowDown":
            moveCharacter = "down";
            collision();
            drawCharacter();
            
            break;

        case "ArrowLeft":
            moveCharacter = "left";
            collision();
            drawCharacter();
            break;

        case "ArrowRight":
            moveCharacter = "right";
            collision();
            drawCharacter();
            break;
        case "m":
            moveCharacter = "moonWalk";
            collision();
            drawCharacter();
            break;
    }
}



// fin du test déplacement (les fonctions)



