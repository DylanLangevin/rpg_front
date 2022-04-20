let cityDialogueCollisions = [

];

let coffeeDialogueCollisions = [
    // Pnj Bar
    {x:180, y:160, width: 50, height: 120, pnj: maleCitizen, dialogue: "yo broooo"},
    {x:300, y:160, width: 50, height: 120, pnj: librarian, dialogue: "Pourquoi tu me parles"}


]

let parcRightMapDialogueCollisions = [

];
let parcLeftMapDialogueCollisions = [

];
let parcMapDialogueCollisions = [

];

let libraryMapDialogueCollisions = [

];

let librarySecondMapDialogueCollisions = [
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

