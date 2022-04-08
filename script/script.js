let canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



//Test déplacement (variables)
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
//fin du test déplacement (variables)





// Initialisation de l'ojet player
let player = new Player("Adrien", 'character_profil/female_player.png', [dx, dy], ["carte des suspects", "bout de papier"]);//position et inventaire à définir, ajouter des fonctions ect

// Initialisation des objets pnj
let secretaire = new Pnj("Secrétaire", 'character_profil/secretaire.png', [12, 126]);//position a définir
let habitueDuBar = new Pnj("Habitué du bar", 'character_profil/habitué_bar_et_ouvriers.png', [12, 126]);//position a définir
let ingenieurFou = new Pnj("Ingénieur fou", 'character_profil/ingenieur_fou.png', [100, 100]);//position a définir
let amiEnfance = new Pnj("Ami d'enfance", 'character_profil/ami_enfance.png', [12, 126]);//position a définir
let gardienUsine = new Pnj("Gardien d'usine", 'character_profil/gardien_usine.png', [12, 126]);//position a définir
let ancienDuVillage = new Pnj("Ancien du village", 'character_profil/ancien.png', [12, 126]);//position a définir
let femmeDuMaire = new Pnj("Femme du maire", 'character_profil/femme_du_maire.png', [12, 126]);//position a définir
let etrangere = new Pnj("L'étrangère", 'character_profil/étrangère.png', [12, 126]);//position a définir
let lectrice = new Pnj("Lectrice de polar", 'character_profil/lectrice_polar.png', [12, 126]);//position a définir
let bibliothécaire = new Pnj("Bibliothécaire", 'character_profil/bibliothecaire.png', [12, 126]);//position a définir
let policierAmi = new Pnj("Policier ami", 'character_profil/policier_ami.png', [12, 126]);//position a définir
let villageois = new Pnj("Villageois", 'character_profil/villageois.png', [12,126]);//position a définir
let villageoise = new Pnj("Villageoise", 'character_profil/villageoise.png', [12, 126]);//position a définir

// Initialisation de l'ojet cops
let police = new Police("Policier", 'character_profil/police.png', [12, 126]);//position a définir



// Test text Adrien
// ctx.fillText(ingenieurFou.letsTalk("ça marche?"), ingenieurFou.position[0], ingenieurFou.textPosition());
// ctx.fillText(secretaire.letsTalk("oui ça marche"), 10, 20);
ctx.fillText(player.letsTalk("Vous êtes pas censé parler entre vous les pnj"), 10, 30);


player.newItem("peigne rose");
// Fin du test


let character = player.characterProfil();



//Test déplacement (les fonctions)
// Mouvement du personnage selon la touche du clavier choisie
function characterMove() {
    // body.onkeydown = event => {
    //     switch(event.key) {
    //         case "ArrowUp":
    //             moveUp = true;
    //             onkeyup = event => {
    //                 moveUp = false
    //             }
    //             moveDown = false;
    //             moveRight = false;
    //             moveLeft = false;
    //             break;
                
    //         case "ArrowDown":
    //             moveDown = true;
    //             body.onkeyup = event => {
    //                 moveDown = false
    //             }
    //             moveRight = false;
    //             moveLeft = false;
    //             moveUp = false;
    //             break;

    //         case "ArrowLeft":
    //             moveLeft = true;
    //             onkeyup = event => {
    //                 moveLeft = false
    //             }
    //             moveUp = false;
    //             moveDown = false;
    //             moveRight = false;
    //             break;

    //         case "ArrowRight":
    //             moveRight = true;
    //             onkeyup = event => {
    //                 moveRight = false
    //             }
    //             moveUp = false;
    //             moveDown = false;
    //             moveLeft = false;
    //             break;
    //     }
    // }
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
    // characterMove()
    if (moveUp) {
        dy -= 5
        // Va permettre de définir la direction du mouvement
        sy = directionUp * frameHeight;
    } 
    else if (moveDown) {
        dy += 5
        sy = directionDown * frameHeight;
    }
    else if (moveLeft) {
        dx -= 5
        sy = directionLeft * frameHeight;
    }
    else if (moveRight) {
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

}

body.onkeydown = event => {
    switch(event.key) {
        case "ArrowUp":
            moveUp = true;
            moveDown = false;
            moveRight = false;
            moveLeft = false;
            drawCharacter();
            break;
            
        case "ArrowDown":
            moveDown = true;
            moveRight = false;
            moveLeft = false;
            moveUp = false;
            drawCharacter();
            break;

        case "ArrowLeft":
            moveLeft = true;
            moveUp = false;
            moveDown = false;
            moveRight = false;
            drawCharacter();
            break;

        case "ArrowRight":
            moveRight = true;
            moveUp = false;
            moveDown = false;
            moveLeft = false;
            drawCharacter();
            break;
    }
}
body.onkeyup = event => {
    moveRight = false;
    moveUp = false;
    moveDown = false;
    moveLeft = false;
}


// La fonction drawCharacter sera appelée toutes les 100ms
// setInterval(function() {
//     drawCharacter();
// }, 100)
// fin du test déplacement (les fonctions)



