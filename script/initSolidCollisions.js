let cityMapSolidObjectsCollisions = [
    // Mairie
    {x:0, y:0, width: 432, height: 216},

    // Café
    {x:0, y:384, width: 240, height: 256},
    {x:240, y:400, width: 100, height: 114},
    {x:280, y:400, width: 64, height: 158},
    // Maison player
    {x:815, y:414, width: 195, height: 144},
    {x:875, y:394, width: 122, height: 20},
    {x:895, y:374, width: 82, height: 20},
    {x:915, y:354, width: 42, height: 20},
    {x:931, y:344, width: 10, height: 10},

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
    // {x:200, y:510, width: 55, height: 16}
];

let mapsSolidObjectsCollisions = [cityMapSolidObjectsCollisions, coffeeMapSolidObjectsCollisions, parcRightMapSolidObjectsCollisions, parcLeftMapSolidObjectsCollisions, parcMapSolidObjectsCollisions, libraryMapSolideObjectsCollisions];

function drawAllSolidCollisionsBox(){
    ctx.fillStyle = "rgba(255,0,0,0.3)";

    mapsSolidObjectsCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
}