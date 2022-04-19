let cityDialogueCollisions = [

];

let coffeeDialogueCollisions = [
    // Pnj Bar
    {x:180, y:160, width: 50, height: 120}
]

let mapsDialogueCollisions = [cityDialogueCollisions, coffeeDialogueCollisions]

let pnjTalk;
let whichText;

function drawAllDialogueCollisionsBox() {
    ctx.fillStyle = "rgba(0,255,0,0.8)";

    mapsDialogueCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
}