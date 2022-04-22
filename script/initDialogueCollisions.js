
let cityDialogueCollisions = [


];

let coffeeDialogueCollisions = [
    // Pnj Bar
    {x:maleCitizen.position[0], y:maleCitizen.position[1], width: 50, height: 120, pnj: maleCitizen, dialogue: "yo broooo"},
    {x:elder.position[0], y:elder.position[1], width: 50, height: 80, pnj: elder, dialogue: "yo broooo"},
    {x:policeFriend.position[0], y:policeFriend.position[1], width: 80, height: 50, pnj: policeFriend, dialogue: "yo broooo"},
    {x:foreigner.position[0], y:foreigner.position[1] -30, width: 50, height: 80, pnj: foreigner, dialogue: "yo broooo"},
]

let parcRightMapDialogueCollisions = [
    {x:engineer.position[0], y:engineer.position[1], width: 50, height: 80, pnj: engineer, dialogue: "yo broooo"},
    {x:plantJanitor.position[0] -30, y:plantJanitor.position[1], width: 80, height: 50, pnj: plantJanitor, dialogue: "yo broooo"},
];
let parcLeftMapDialogueCollisions = [
    {x:mayorWife.position[0], y:mayorWife.position[1] -30, width: 50, height: 80, pnj: mayorWife, dialogue: "yo broooo"},
    {x:secretary.position[0], y:secretary.position[1], width: 80, height: 50, pnj: secretary, dialogue: "yo broooo"},
];
let parcMapDialogueCollisions = [
    // pnj piscine parc
    {x:femaleCitizen.position[0], y:femaleCitizen.position[1], width: 50, height: 80, pnj: femaleCitizen, dialogue: "yo broooo"},
    {x:childhoodFriend.position[0] -30, y:childhoodFriend.position[1], width: 80, height: 50, pnj: childhoodFriend, dialogue: "yo broooo"},
];
let libraryMapDialogueCollisions = [
    // Message porte fermé
    {x:945, y:440, width: 16, height: 70, pnj: libraryBackDoor, dialogue:"Nécessite une clé pour ouvrir"},
    {x:librarian.position[0] -30, y:librarian.position[1], width: 80, height: 50, pnj: librarian, dialogue: "yo broooo"},

];

let librarySecondMapDialogueCollisions = [
    {x:reader.position[0] -30, y:reader.position[1], width: 80, height: 50, pnj: reader, dialogue: "yo broooo"},
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

