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
//fin du test déplacement (variables)





// Initialisation de l'ojet player
let player = new Player("Adrien", 'character_profil/plant_janitor.png', [dx, dy], ["carte des suspects", "bout de papier"]);//position et inventaire à définir, ajouter des fonctions ect

// Initialisation des objets pnj
let secretary = new Pnj("Secrétaire", 'character_profil/secretary.png', [12, 126]);//position a définir
let BarRegular = new Pnj("Habitué du bar", 'character_profil/bar_regular.png', [12, 126]);//position a définir
let ingenieurFou = new Pnj("Ingénieur fou", 'character_profil/ingenieur_fou.png', [100, 100]);//position a définir
let childhoodFriend = new Pnj("Ami d'enfance", 'character_profil/childhood_friend.png', [12, 126]);//position a définir
let plantJanitor = new Pnj("Gardien d'usine", 'character_profil/plant_janitor.png', [12, 126]);//position a définir
let ancienDuVillage = new Pnj("Ancien du village", 'character_profil/ancien.png', [12, 126]);//position a définir
let mayorWife = new Pnj("Femme du maire", 'character_profil/mayor_wife.png', [12, 126]);//position a définir
let foreigner = new Pnj("L'étrangère", 'character_profil/foreigner.png', [12, 126]);//position a définir
let lectrice = new Pnj("Lectrice de polar", 'character_profil/lectrice_polar.png', [12, 126]);//position a définir
let librarian = new Pnj("Bibliothécaire", 'character_profil/librarian.png', [12, 126]);//position a définir
let policeFriend = new Pnj("Policier ami", 'character_profil/police_friend.png', [12, 126]);//position a définir
let maleCitizen = new Pnj("Villageois", 'character_profil/male_citizen.png', [12,126]);//position a définir
let femaleCitizen = new Pnj("Villageoise", 'character_profil/female_citizen.png', [12, 126]);//position a définir

// Initialisation de l'ojet cops
let police = new Police("Policier", 'character_profil/police.png', [12, 126]);//position a définir



// Test text Adrien
// ctx.fillText(ingenieurFou.letsTalk("ça marche?"), ingenieurFou.position[0], ingenieurFou.textPosition());
// ctx.fillText(secretaire.letsTalk("oui ça marche"), 10, 20);
ctx.fillText(player.letsTalk("Vous êtes pas censé parler entre vous les pnj"), 10, 30);


player.newItem("peigne rose");
// Fin du test


let character = mayorWife.characterProfil();



//Test déplacement (les fonctions)

// Choisir la bonne frame
function updateFrame() {
    // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // modulo permet d'obtenir la bonne frame (1, 2, 3, 4...), ça permet d'update l'index de la frame
    currentFrame = ++currentFrame % frameCols; 

    // Choisir le point de départ de la frame
    sx = currentFrame * frameWidth;

    // Mouvement du personnage selon le choix effectué par l'user
    if (moveCharacter === "up") {
        dy -= 5
        // Va permettre de définir la direction du mouvement
        sy = directionUp * frameHeight;
    } 
    else if (moveCharacter === "down") {
        dy += 5
        sy = directionDown * frameHeight;
    }
    else if (moveCharacter === "left") {
        dx -= 5
        sy = directionLeft * frameHeight;
    }
    else if (moveCharacter === "right") {
        dx +=5
        sy = directionRight * frameHeight;
    }
}

// Dessiner le caractère
function drawCharacter() {
    // On update d'abord la frame
    updateFrame();
    // On dessine le caractère
    ctx.fillStyle = "red";
    ctx.fillRect(dx -2, dy -2, frameWidth -2, frameHeight -2);
    ctx.drawImage(character, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight)

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
    }
}
// body.onkeyup = event => {
//     moveRight = false;
//     moveUp = false;
//     moveDown = false;
//     moveLeft = false;
// }
// fin du test déplacement (les fonctions)



