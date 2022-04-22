
let cityDialogueCollisions = [


];

let coffeeDialogueCollisions = [
    // Pnj Bar

    { x: maleCitizen.position[0], y: maleCitizen.position[1], width: 50, height: 120, pnj: maleCitizen, dialogue: "Devine la réponse pour cacher la vérieté. Je suis grand, j’ai des dents noires et blanches… Touche-les et fait raisonner les clefs" },
    { x: elder.position[0], y: elder.position[1], width: 50, height: 120, pnj: elder, dialogue: "yo broooo" },
]

let parcRightMapDialogueCollisions = [
    { x: engineer.position[0], y: engineer.position[1], width: 50, height: 120, pnj: engineer, dialogue: "En cuillant ces belles marguerites d'automne, j'ai fait tomber mon couteau porte-bonheur..." },
];
let parcLeftMapDialogueCollisions = [
    { x: mayorWife.position[0], y: mayorWife.position[1], width: 50, height: 120, pnj: mayorWife, dialogue: "Merci d'avoir tué mon mari ! Oublie pas les indices laissés dans la bibliothèque !" },
];
let parcMapDialogueCollisions = [
    // pnj piscine parc
    { x: femaleCitizen.position[0], y: femaleCitizen.position[1], width: 50, height: 120, pnj: femaleCitizen, dialogue: "Il semblerait qu'il y ait quelque chose près du pont ! " },
];
let libraryMapDialogueCollisions = [

    // Message porte fermé
    { x: 945, y: 440, width: 16, height: 70, pnj: libraryBackDoor, dialogue: "Nécessite une clé pour ouvrir" },
    { x: librarian.position[0], y: librarian.position[1], width: 50, height: 120, pnj: librarian, dialogue: "Trop bizarre ! J'ai cru voir une bague et un pass ensanglanté..." },

];

let librarySecondMapDialogueCollisions = [
    { x: reader.position[0], y: reader.position[1], width: 50, height: 120, pnj: reader, dialogue: "J'ai trouvé une bague dans les étagères ! Elle est à toi ?" },
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

