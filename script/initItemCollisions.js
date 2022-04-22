let cityItemCollisions = [
    // mettre les coordonées de l'objet
    
];

let coffeeItemCollisions = [
    // mettre les coordonées de l'objet
    // {x:180, y:160, width: 50, height: 120}  
    {name:"key",x:880, y:196, width: 20, height: 20, picked:false}, 
]

let parcRightMapItemCollisions = [
    {name:"knife",x:790, y:490, width: 20, height: 20, picked:false},
];
let parcLeftMapItemCollisions = [
    
];
let parcMapItemCollisions = [
    {name:"bottle",x:624, y:200, width: 20, height: 20, picked:false},
];

let libraryMapItemCollisions = [
    {name:"pass",x:255, y:225, width: 20, height: 20, picked:false},
];

let librarySecondMapItemCollisions = [

    {name:"ring",x:850, y:230, width: 20, height: 20, picked:false}
];

let mapsItemCollisions = [cityItemCollisions, coffeeItemCollisions, parcRightMapItemCollisions, parcLeftMapItemCollisions, parcMapItemCollisions, libraryMapItemCollisions, librarySecondMapItemCollisions]

function itemPositions() {
    // Mettre l'image de l'objet dans le draw ci-dessous
    // ctxBackground.drawImage(maleCitizen.character, 0, 122,frameWidth*scaleDivider, frameHeight*scaleDivider, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)
}

function drawAllItemCollisionsBox() {
    ctx.fillStyle = "rgba(0,255,0,0.8)";

    mapsItemCollisions[currentMap].forEach(element => {
        // Redessine sauf si l'item a déjà été récupéré
        if (!element.picked) {

            ctx.fillRect(element.x, element.y, element.width, element.height);
        }

    });
}



