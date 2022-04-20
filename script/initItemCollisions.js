let cityItemCollisions = [
    // mettre les coordonées de l'objet
    {x:180, y:160, width: 20, height: 20} 
];

let coffeeItemCollisions = [
    // mettre les coordonées de l'objet
    // {x:180, y:160, width: 50, height: 120}  
]

let parcRightMapItemCollisions = [

];
let parcLeftMapItemCollisions = [

];
let parcMapItemCollisions = [

];

let libraryMapItemCollisions = [

];

let librarySecondMapItemCollisions = [
];

let mapsItemCollisions = [cityItemCollisions, coffeeItemCollisions,parcRightMapItemCollisions, parcLeftMapItemCollisions, parcMapItemCollisions, libraryMapItemCollisions, librarySecondMapItemCollisions]

function itemPositions() {
    // Mettre l'image de l'objet dans le draw ci-dessous
    // ctxBackground.drawImage(maleCitizen.character, 0, 122,frameWidth*scaleDivider, frameHeight*scaleDivider, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)
}

function drawAllItemCollisionsBox() {
    ctx.fillStyle = "rgba(0,255,0,0.8)";

    mapsItemCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
}