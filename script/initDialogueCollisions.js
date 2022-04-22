
let cityDialogueCollisions = [


];

let coffeeDialogueCollisions = [
    // Pnj Bar
    { x: maleCitizen.position[0], y: maleCitizen.position[1], width: 50, height: 120, pnj: maleCitizen, dialogue: "Devine la réponse pour cacher la vérité. Je suis grand, j’ai des dents noires et blanches… Touche-les et fait raisonner les clefs" },
    { x: elder.position[0], y: elder.position[1], width: 50, height: 80, pnj: elder, dialogue: "Peronne ne veut sortir de chez soi aujourd'hui ! Le centre-ville est vide." },
    { x: policeFriend.position[0], y: policeFriend.position[1], width: 80, height: 50, pnj: policeFriend, dialogue: "Trouve les 5 indices que t'as laissé ! Je t'aiderai à fuir." },
    { x: foreigner.position[0], y: foreigner.position[1] - 30, width: 50, height: 80, pnj: foreigner, dialogue: "Les habitants semble suspécieux à mon égard depuis le meurtre du Maire ! Seulement parce que je viens pas d'ici..." },
]

let parcRightMapDialogueCollisions = [
    { x: engineer.position[0], y: engineer.position[1], width: 50, height: 80, pnj: engineer, dialogue: "AHAHAH ! En cuillant ces belles marguerites d'automne, j'ai cru rêver AHAHAH mais il y avait un couteau plein de sang au sol... AHA!" },
    { x: plantJanitor.position[0] - 30, y: plantJanitor.position[1], width: 80, height: 50, pnj: plantJanitor, dialogue: "J'ai cru comprendre que les officiers de police avaient trouvé des pistes dans la bibliothèque." },
];
let parcLeftMapDialogueCollisions = [
    { x: mayorWife.position[0], y: mayorWife.position[1] - 30, width: 50, height: 80, pnj: mayorWife, dialogue: "Merci d'avoir tué mon mari ! Il n'a rien vue de mon plan, trop occupé à s'ammuser avec la secretaire !" },
    { x: secretary.position[0], y: secretary.position[1], width: 80, height: 50, pnj: secretary, dialogue: "Le Maire est mort... Mon enfant grandira sans père !" },
];
let parcMapDialogueCollisions = [
    // pnj piscine parc
    { x: femaleCitizen.position[0], y: femaleCitizen.position[1], width: 50, height: 80, pnj: femaleCitizen, dialogue: "Ras-le bol des gens sales dans cette ville ! il y a une bouteille près du pont. C'est dégoutant !" },
    { x: childhoodFriend.position[0] - 30, y: childhoodFriend.position[1], width: 80, height: 50, pnj: childhoodFriend, dialogue: "Je sais ce que tu as fait ! tu n'as pas honte ?" },
];
let libraryMapDialogueCollisions = [

    // Message porte fermé
    { x: 945, y: 440, width: 16, height: 70, pnj: libraryBackDoor, dialogue: "Nécessite une clé pour ouvrir" },
    { x: librarian.position[0] - 30, y: librarian.position[1], width: 80, height: 50, pnj: librarian, dialogue: "Trop bizarre ! J'ai cru voir une bague et un pass ensanglanté..." },

];

let librarySecondMapDialogueCollisions = [

    { x: reader.position[0] - 30, y: reader.position[1], width: 80, height: 50, pnj: reader, dialogue: "J'ai trouvé une bague dans les étagères ! Elle est à toi ?" },
];

let mapsDialogueCollisions = [cityDialogueCollisions, coffeeDialogueCollisions, parcRightMapDialogueCollisions, parcLeftMapDialogueCollisions, parcMapDialogueCollisions, libraryMapDialogueCollisions, librarySecondMapDialogueCollisions]

let pnjTalk;
let whichText;

function drawAllDialogueCollisionsBox() {
    ctx.fillStyle = "rgba(0,255,0,0.8)";

    mapsDialogueCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
}

