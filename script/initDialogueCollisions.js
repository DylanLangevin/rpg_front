let cityDialogueCollisions = [
];

let coffeeDialogueCollisions = [
    // Pnj Bar
    { x: maleCitizen.position[0], y: maleCitizen.position[1], width: 50, height: 120, pnj: maleCitizen, dialogue: "Devine la réponse pour cacher la vérieté. Je suis grand, j’ai des dents noires et blanches… Touche-les et fait raisonner les clefs" },
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
    { x: librarian.position[0], y: librarian.position[1], width: 50, height: 120, pnj: librarian, dialogue: "Je suis tête en l'air aujourd'hui. J'ai egaré mes affaires ! J'ai perdu ma bague est mon pass..." },
];

let librarySecondMapDialogueCollisions = [
    { x: reader.position[0], y: reader.position[1], width: 50, height: 120, pnj: reader, dialogue: "J'ai trouvé une bague dans les étagères !" },
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

