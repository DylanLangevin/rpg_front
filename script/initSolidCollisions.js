let cityMapSolidObjectsCollisions = [
    // Mairie
    {x:0, y:0, width: 482, height: 216},

    // Arbre
    {x:482, y:0, width: 92, height: 200},
    {x:574, y:0, width: 130, height: 184},

    // Maison du maired
    {x:704, y:0, width: 80, height: 155},
    {x:784, y:0, width: 80, height: 140},
    {x:864, y:0, width: 160, height: 155},

    // Café
    {x:0, y:384, width: 240, height: 256},
    {x:240, y:400, width: 100, height: 114},
    {x:280, y:400, width: 64, height: 158},
    // Maison player
    {x:815, y:274, width: 210, height: 284},
    
];

let coffeeMapSolidObjectsCollisions = [
    // Bar
    {x:48, y:48, width: 240, height: 180},

    // Tabourets bar
    // {x:100, y:256, width: 24, height: 18},
    // {x:164, y:256, width: 24, height: 18},
    // {x:228, y:256, width: 24, height: 18},
    // {x:292, y:224, width: 24, height: 18},
    // {x:292, y:160, width: 24, height: 18},

    // Murs
    {x:48, y:48, width: 1000, height: 90},
    {x:48, y:48, width: 25, height: 540},
    {x:48, y:570, width: 815, height: 20},
    {x:950, y:48, width: 20, height: 540},
    // Tables mur
    {x:420, y:160, width: 288, height: 35},
    // Piano
    {x:868, y:160, width: 64, height: 35},

    // Tables et chaises
    {x:100, y:416, width: 88, height: 18},
    {x:325, y:416, width: 88, height: 18},
    {x:580, y:416, width: 88, height: 18},
    {x:100, y:500, width: 88, height: 18},
    {x:325, y:500, width: 88, height: 18},
    {x:580, y:500, width: 88, height: 18},
];

let parcRightMapSolidObjectsCollisions = [
    // foret
    {x:0, y:0, width:650, height:250},
    {x:0, y:520, width:1024, height:150},
    {x:900, y:0, width:50, height:640},
    {x:850, y:475, width:50, height:50}, 
    

];
let parcLeftMapSolidObjectsCollisions = [
    // foret
    {x:375, y:0, width:650, height:250},
    {x:0, y:520, width:1024, height:150},
    {x:60, y:0, width:50, height:640},
    {x:115, y:475, width:50, height:50},
    //lampadaire 
    // {x:, y:, width:, height:},
    // {x:, y:, width:, height:},
    // {x:, y:, width:, height:},
    
];
let parcMapSolidObjectsCollisions = [
    // Parc
    {x:193, y:101, width: 145, height: 135},
    // Piscine
    {x:493, y:166, width: 110, height: 50},
    {x:493, y:114, width: 130, height: 52},
    {x:678, y:166, width: 130, height: 50},
    {x:658, y:114, width: 150, height: 52},
    // Arbre
    {x:0, y:0, width: 40, height: 640},
    {x:974, y:0, width: 50, height: 245},
    {x:250, y:570, width: 774, height: 70},
    {x:724, y:370, width: 300, height: 270},
    // Bibliothèque
    {x:240, y:350, width: 350, height: 105},
    {x:160, y:350, width: 50, height: 105},
    {x:210, y:350, width: 30, height: 85},
];

let libraryMapSolideObjectsCollisions = [
    // mur
    {x:48, y:48, width: 920, height: 60},
    {x:48, y:48, width: 25, height: 540},
    {x:48, y:570, width: 920, height: 20},
    {x:950, y:48, width: 20, height: 470},
    {x:950, y:510, width: 20, height: 60},

    // Bibliotheque
    {x:450, y:192, width:500, height: 50},
    {x:450, y:320, width:500, height: 50},

    // Tables
    {x:228, y:192, width:87, height: 40},
    {x:228, y:320, width:87, height: 40},
    {x:73, y:267, width:50, height: 54},
    {x:73, y:395, width:50, height: 54},

];

let librarySecondMapSolideObjectsCollisions = [
    // mur
    {x:48, y:48, width: 920, height: 60},
    {x:48, y:48, width: 25, height: 540},
    {x:48, y:570, width: 920, height: 20},
    {x:950, y:48, width: 20, height: 540},
    {x:48, y:448, width: 50, height: 64},

    // Bibliotheque
    {x:450, y:192, width:500, height: 50},
    {x:450, y:320, width:500, height: 50},
    {x:450, y:448, width:500, height: 50},

    // Tables
    {x:260, y:192, width:87, height: 40},
    {x:132, y:320, width:87, height: 40},
    {x:293, y:448, width:87, height: 40},
];


let mapsSolidObjectsCollisions = [cityMapSolidObjectsCollisions, coffeeMapSolidObjectsCollisions, parcRightMapSolidObjectsCollisions, parcLeftMapSolidObjectsCollisions, parcMapSolidObjectsCollisions, libraryMapSolideObjectsCollisions, librarySecondMapSolideObjectsCollisions];

function drawAllSolidCollisionsBox(){
    ctx.fillStyle = "rgba(255,0,0,0.3)";

    mapsSolidObjectsCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
}