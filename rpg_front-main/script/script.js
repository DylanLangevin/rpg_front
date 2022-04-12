let canvasBackground = document.getElementById("canvas-background");
const ctxBackground = canvasBackground.getContext("2d");

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Récupération des images en background (test)
let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let body = document.querySelector("body");

// Orientation du personnage, la ligne qui correspond à l'image de base
let directionUp = 0;
let directionLeft = 1;
let directionDown = 2;
let directionRight = 3;

// Mouvement du personnage
let moveCharacter;

// Booléan Text
let whichText

// Position où le dessin sera dessiné sur le canvas
let dx = 500;
let dy = 300;

// Vitesse
let speed = 5;

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
let frameWidth = spriteWidth / frameCols;
let frameHeight = spriteHeight / frameRows;

// Index de la frame
let currentFrame = 0;



// Coordonnées du carré bleu porte entre deux zones
let squareColliderX = 630;
let squareColliderY = 0;
let squareColliderWidth = 100;
let squareColliderHeight = 15;

// Coordonnées du carré bleu entrée du café
let doorCafeColliderX = 339;
let doorCafeColliderY = 420;
let doorCafeColliderWidth = 43;
let doorCafeColliderHeight = 20;



// Coordonnées de l'objet à récupérer
let itemFoundX = 650;
let itemFoundY = 330;
let itemFoundWidth = 32;
let itemFoundHeight = 32;

// Définir si l'objet a été récupéré ou non
// let itemPicked = false;

// Coordonnées object sur la place

let ObjectColliderX = 400;
let ObjectColliderY = 400;
let ObjectColliderWidth = 50;
let ObjectColliderHeight = 50;

let currentMap = 1;

// Coordonnées de la hitbox maison
let houseHitboxX = 431;
let houseHitboxY = 50;
let houseHitboxWidth = 148;
let houseHitboxHeight = 190;

// Initialisation de l'ojet player
let player = new Player(
  "Adrien",
  "character_profile/male_player.png",
  [dx, dy],
  ["carte des suspects", "bout de papier"]
); //position et inventaire à définir, ajouter des fonctions ect

// Test initialisation d'un PNJ
body.onload = function () {
  // Dessin du pnj


  DrawPnj(maleCitizen, pnjX, SecondHitboxPnjX, pnjY, SecondHitboxPnjY, pnjWidth , SecondHitboxPnjWidth, pnjHeight ,SecondHitboxPnjHeight, 650, 630, 132,110);
  sx = currentFrame * frameWidth;
  sy = directionDown * frameHeight;
  ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
  // Dessin du player
  ctx.fillRect(dx + 15, dy + 5, frameWidth - 30, frameHeight - 10);
  ctx.drawImage(
    player.character,
    sx,
    sy,
    frameWidth,
    frameHeight,
    dx,
    dy,
    frameWidth,
    frameHeight
  );
  // Dessin de l'objet bleu
  DrawItem(
    "rgba(0, 0, 250, 0.3)",
    ObjectColliderX,
    ObjectColliderY,
    ObjectColliderWidth,
    ObjectColliderHeight
  );
  // Dessin du carré jaune
  DrawItem(
    "rgba(250, 0, 250, 0.3)",
    itemFoundX,
    itemFoundY,
    itemFoundWidth,
    itemFoundHeight
  );
};

// Test déplacement (les fonctions)

// Choisir la bonne frame
function updateFrame() {
  // Effacer le canvas avant de mettre la nouvelle frame, évite un biug d'affichage
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redessine le pnj

  DrawPnj(maleCitizen, pnjX, SecondHitboxPnjX, pnjY, SecondHitboxPnjY, pnjWidth, SecondHitboxPnjWidth, pnjHeight,SecondHitboxPnjHeight, 650, 630, 132,110);

  // modulo permet d'obtenir la bonne frame (1, 2, 3, 4...), ça permet d'update l'index de la frame
  currentFrame = ++currentFrame % frameCols;
  console.log("frame", currentFrame);

  // Choisir le point de départ de la frame
  sx = currentFrame * frameWidth;

  // Mouvement du personnage selon le choix effectué par l'user
  if (moveCharacter === "up") {
    dy -= speed;

    // Va permettre de définir la direction du mouvement
    sy = directionUp * frameHeight;
    body.onkeyup = (event) => {
      stopMovingCharacter(directionUp);
    };
  } else if (moveCharacter === "down") {
    dy += speed;
    sy = directionDown * frameHeight;
    body.onkeyup = (event) => {
      stopMovingCharacter(directionDown);
    };
  } else if (moveCharacter === "left") {
    dx -= speed;
    sy = directionLeft * frameHeight;
    body.onkeyup = (event) => {
      stopMovingCharacter(directionLeft);
    };
  } else if (moveCharacter === "right") {
    dx += speed;
    sy = directionRight * frameHeight;
    body.onkeyup = (event) => {
      stopMovingCharacter(directionRight);
    };
  } else if (moveCharacter === "moonWalk") {
    dx += speed;
    sy = directionLeft * frameHeight;
    body.onkeyup = (event) => {
      stopMovingCharacter(directionLeft);
    };
  }
}

let colorRect = "blue";
let iTalk;

// dessin de la hitbox de la maison
ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
ctx.fillRect(houseHitboxX, houseHitboxY, houseHitboxWidth, houseHitboxHeight);

// Coordonnées de la hitbox du pnj
let pnjX = 650;
let pnjY = 132;
let pnjWidth = frameWidth - 20;
let pnjHeight = frameHeight - 10;

let SecondHitboxPnjX = 630;
let SecondHitboxPnjY = 110;
let SecondHitboxPnjWidth = frameWidth - 20;
let SecondHitboxPnjHeight = frameHeight - 10;


// variable de discussion
let pnjTalk;

// Fonction de collision

function collision() {
  // Collision du rect bleu
  if (
    dx + 15 + frameWidth - 30 > squareColliderX &&
    dx + 15 < squareColliderX + squareColliderWidth &&
    dy + 5 + frameHeight - 10 > squareColliderY &&
    dy + 5 < squareColliderY + squareColliderHeight
  ) {
    colorRect = "green";

    // Affichage de l'img du background selon le background actuel
    if (currentMap == 1) {
      ctxBackground.clearRect(0, 0, 1040, 640);
      ctxBackground.drawImage(img2, 0, 0, 1040, 640);

      // On replace le personnage et le carré bleu sur la route de la deuxieme image
      dx = 280;
      dy = 560;

      squareColliderX = 250;
      squareColliderY = 630;

      currentMap = 2;
    } else if (currentMap == 2) {
      ctxBackground.clearRect(0, 0, 1040, 640);

      ctxBackground.drawImage(img, 0, 0, 1440, 1440);

      // On replace le personnage et le carré bleu sur la route de la deuxieme image
      dx = 630;
      dy = 15;

      squareColliderX = 630;
      squareColliderY = 0;
      currentMap = 1;
    }
  } else {
    colorRect = "rgba(0, 0, 250, 0.3)";
  }

  // Collision de la porte du café
  if (
    dx + 15 + frameWidth - 30 > doorCafeColliderX &&
    dx + 15 < doorCafeColliderX + doorCafeColliderWidth &&
    dy + 5 + frameHeight - 10 > doorCafeColliderY &&
    dy + 5 < doorCafeColliderY + doorCafeColliderHeight
  ) {
    console.log("cafe");

    // Affichage de l'img du background selon le background actuel
    if (currentMap == 1) {
      ctxBackground.clearRect(0, 0, 1040, 640);
      ctxBackground.drawImage(img3, 0, 0, 1040, 640);

      // On replace le personnage et le carré bleu sur la route de la deuxieme image
      dx = 480;
      dy = 500;

      doorCafeColliderX = 480;
      doorCafeColliderY = 600;

      currentMap = 3;
    } else if (currentMap == 3) {
      ctxBackground.clearRect(0, 0, 1040, 640);
      ctxBackground.drawImage(img, 0, 0, 1440, 1440);

      // On replace le personnage et le carré bleu sur la route de la deuxieme image
      dx = 339;
      dy = 450;

      doorCafeColliderX = 339;
      doorCafeColliderY = 420;
      currentMap = 1;
    }
  } else {
    colorRect = "rgba(0, 0, 250, 0.3)";
  }

  // Ramasser un objet (collision avec cet objet)

  // Calcul de la collision avec la maison en haut au toit bleu
  HouseCollision(
    houseHitboxX,
    houseHitboxY,
    houseHitboxWidth,
    houseHitboxHeight
  );

  // Collision de l'item magenta

  itemFound(
    itemFoundX,
    itemFoundY,
    itemFoundWidth,
    itemFoundHeight,
    "ok test map"
  );

  // Collision de l'item bleu
  if (
    dx + 15 + frameWidth - 30 > ObjectColliderX &&
    dx + 15 < ObjectColliderX + ObjectColliderWidth &&
    dy + 5 + frameHeight - 10 > ObjectColliderY &&
    dy + 5 < ObjectColliderY + ObjectColliderHeight
  ) {
    console.log("Objet trouvé");
    let objectFound = "ok test map 2";

    if (currentMap == 1) {
      player.newItem(objectFound);
      console.log(player.inventory);
      iTalk = "Cool j'ai un ramassé un truc";
      player.textZone(iTalk, dx, dy);
      console.log("tu as ramassé un objet");
      ObjectColliderWidth = 0;
      ObjectColliderHeight = 0;
    } else {
      colorRect = "rgba(0, 0, 250, 0.3)";
    }
  }

  // Collision du pnj
  pnjtalk = "salut fait comme tu veux appuie sur enter !  (press Enter)";
  pnjtalk1 = "CA VAAAAAA?";
  CollisionPnj(pnjX, pnjY, pnjHeight, pnjWidth, pnjtalk, pnjtalk1, maleCitizen);
}

// Dessiner le caractère
function drawCharacter() {
  // On update d'abord la frame
  updateFrame();

  // Dessin d'une forme pour test la hitbox de la changement de zone
  ctx.fillStyle = colorRect;
  ctx.fillRect(
    squareColliderX,
    squareColliderY,
    squareColliderWidth,
    squareColliderHeight
  );

  // Dessin d'une forme pour test la hitbox de la porte de café
  ctx.fillStyle = "rgba(0, 0, 250, 0.3)";
  ctx.fillRect(
    doorCafeColliderX,
    doorCafeColliderY,
    doorCafeColliderWidth,
    doorCafeColliderHeight
  );

  // Test dialogue sous condition

  if (dx <= 50) {
    iTalk = "j'me casse";
  } else if (dx <= 200 && dx > 50) {
    iTalk = "c'est nul ici";
  } else if (dx > 200) {
    iTalk = "elle sont où les meufs?";
  }

  player.textZone(iTalk, dx, dy);
  // Fin du test dialogue sous condition

  // On dessine la hitbox du perso
  ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
  ctx.fillRect(dx + 15, dy + 5, frameWidth - 30, frameHeight - 10);

  // On dessine le caractère
  ctx.drawImage(
    player.character,
    sx,
    sy,
    frameWidth,
    frameHeight,
    dx,
    dy,
    frameWidth,
    frameHeight
  );

  // Déclaration objet
  ctx.fillStyle = "rgba(0, 0, 250, 0.3)";
  DrawItem(
    "rgba(0, 0, 250, 0.3)",
    ObjectColliderX,
    ObjectColliderY,
    ObjectColliderWidth,
    ObjectColliderHeight
  );

  DrawItem(
    "rgba(250, 0, 250, 0.3)",
    itemFoundX,
    itemFoundY,
    itemFoundWidth,
    itemFoundHeight
  );
}

// Dessiner le caractère à l'arrêt lorsqu'on arrête d'avancer
function stopMovingCharacter(whichDirection) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  collision();

  // Dessin d'une forme pour test la hitbox
  ctx.fillStyle = colorRect;
  ctx.fillRect(
    squareColliderX,
    squareColliderY,
    squareColliderWidth,
    squareColliderHeight
  );

  // Dessin d'une forme pour test la hitbox de la porte de café
  ctx.fillStyle = "rgba(0, 0, 250, 0.3)";
  ctx.fillRect(
    doorCafeColliderX,
    doorCafeColliderY,
    doorCafeColliderWidth,
    doorCafeColliderHeight
  );

  // Redessine le pnj
  DrawPnj(maleCitizen, pnjX, SecondHitboxPnjX, pnjY, SecondHitboxPnjY, pnjWidth , SecondHitboxPnjWidth, pnjHeight,SecondHitboxPnjHeight, 650, 630, 132,110);

  sx = 0;
  sy = whichDirection * frameHeight;
  // On dessine la hitbox du perso

  ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
  ctx.fillRect(dx + 15, dy + 5, frameWidth - 30, frameHeight - 10);

  // On dessine le caractère
  ctx.drawImage(
    player.character,
    sx,
    sy,
    frameWidth,
    frameHeight,
    dx,
    dy,
    frameWidth,
    frameHeight
  );
  player.textZone(iTalk, dx, dy);

  // Déclaration objet (carré bleu)

  DrawItem(
    "rgba(0, 0, 250, 0.3)",
    ObjectColliderX,
    ObjectColliderY,
    ObjectColliderWidth,
    ObjectColliderHeight
  );

  // Déclaration objet (carré magenta)
  DrawItem(
    "rgba(250, 0, 250, 0.3)",
    itemFoundX,
    itemFoundY,
    itemFoundWidth,
    itemFoundHeight
  );
}

body.onkeydown = (event) => {
  switch (event.key) {
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
};

// Dessin du background
ctxBackground.fillStyle = "orange";
ctxBackground.fillRect(10, 30, 50, 50);
ctxBackground.fillStyle = "orange";
ctxBackground.fillRect(500, 100, 100, 100);

// Dessin de l'image de background
ctxBackground.drawImage(img, 0, 0, 1440, 1440);

// ctxBackground.drawImage(img3, 0, 0,1440,1440);

// // Dessin du background 2
// ctxBackground2.fillStyle = "purple"
// ctxBackground2.fillRect(100,300,100,100)

// ctxBackground2.fillStyle = "purple"
// ctxBackground2.fillRect(700,400,100,100)

// fin du test déplacement (les fonctions)
