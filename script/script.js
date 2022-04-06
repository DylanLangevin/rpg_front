let canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
//initialisation de l'ojet player
let player = new Player("Adrien", [12, 126], ["carte des suspects", "bout de papier"]);//position et inventaire à définir, ajouter des fonctions ect

//initialisation des objets pnj
let secretaire = new Pnj("Secrétaire", [12, 126]);//position a définir
let habitueDuBar = new Pnj("Habitué du bar", [12, 126]);//position a définir
let ingenieurFou = new Pnj("Ingénieur fou", [100, 100]);//position a définir
let amiEnfance = new Pnj("Ami d'enfance", [12, 126]);//position a définir
let gardienUsine = new Pnj("Gardien d'usine", [12, 126]);//position a définir
let ancienDuVillage = new Pnj("Ancien du village", [12, 126]);//position a définir
let femmeDuMaire = new Pnj("Femme du maire", [12, 126]);//position a définir
let etrangere = new Pnj("L'étrangère", [12, 126]);//position a définir
let lectrice = new Pnj("Lectrice de polar", [12, 126]);//position a définir
let bibliothécaire = new Pnj("Bibliothécaire", [12, 126]);//position a définir
let policierAmi = new Pnj("Policier ami", [12, 126]);//position a définir
let villageois = new Pnj("Villageois", [12,126]);//position a définir
let villageoise = new Pnj("Villageoise", [12, 126]);//position a définir

//initialisation de l'ojet cops
let police = new Police("Policier", [12, 126]);//position a définir



// Test
dx = 100;
dy = 100;
frameWidth = 32;
frameHeight= 32;
ctx.fillRect(dx, dy, frameWidth, frameHeight);
ctx.fillText(ingenieurFou.letsTalk("ça marche?"), ingenieurFou.position[0], ingenieurFou.textPosition());
ctx.fillText(secretaire.letsTalk("oui ça marche"), 10, 20);
ctx.fillText(player.letsTalk("Vous êtes pas censé parler entre vous les pnj"), 10, 30);


player.newItem("peigne rose");
// Fin du test