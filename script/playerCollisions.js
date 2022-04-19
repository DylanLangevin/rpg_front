let hitboxToggle = true;

let cityMapSolidObjectsCollisions = [
    // Mairie
    {x:64, y:0, width: 368, height: 216},

    //Café
    {x:88, y:384, width: 152, height: 174},
    {x:240, y:400, width: 100, height: 114},
    {x:280, y:400, width: 64, height: 158},

];

let coffeeMapSolidObjectsCollisions = [
    // Bar
    {x:48, y:48, width: 240, height: 180},

    // Tabourets bar
    {x:100, y:256, width: 24, height: 18},
    {x:164, y:256, width: 24, height: 18},
    {x:228, y:256, width: 24, height: 18},
    {x:292, y:224, width: 24, height: 18},
    {x:292, y:160, width: 24, height: 18},

    // Murs
    {x:48, y:48, width: 1000, height: 90},
    {x:48, y:48, width: 25, height: 540},
    {x:48, y:570, width: 815, height: 20},
    {x:950, y:48, width: 20, height: 540},
    // Tables mur
    {x:420, y:160, width: 288, height: 35},
    // Piano
    {x:868, y:160, width: 64, height: 35},

];

let parcRightMapSolidObjectsCollisions = [

];
<<<<<<< HEAD



    


let mapsSolidObjectsCollisions = [cityMapSolidObjectsCollisions, coffeeMapSolidObjectsCollisions, parcRightMapSolidObjectsCollisions];
=======
let parcLeftMapSolidObjectsCollisions = [

];
let parcMapSolidObjectsCollisions = [

];

let mapsSolidObjectsCollisions = [cityMapSolidObjectsCollisions, coffeeMapSolidObjectsCollisions, parcRightMapSolidObjectsCollisions, parcLeftMapSolidObjectsCollisions, parcMapSolidObjectsCollisions];
>>>>>>> main

function drawAllSolidCollisionsBox(){
    ctx.fillStyle = "rgba(255,0,0,0.3)";

    mapsSolidObjectsCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });
<<<<<<< HEAD
}


let cityMapZoneObjectsCollisions = [

=======

}

let cityMapZoneObjectsCollisions = [
>>>>>>> main
    // porte entrée café
    {x:250, y:510, width: 20, height: 30, direction:"coffee"},

    // zone vers parc-right
    {x:1022, y:142, width: 10, height: 50, direction:"parc-right"},

<<<<<<< HEAD
];

let coffeeMapZoneObjectsCollisions = [

    // porte entrée café
    {x:865, y:568, width: 60, height: 10},

];

let parcRightMapZoneObjectsCollisions = [

    // zone vers city
    {x:0, y:373, width: 16, height: 55, direction:"city"},

    // zone vers parc
    {x:758, y:0, width: 55, height:16, direction:"parc"},

];

let mapsZoneObjectsCollisions = [cityMapZoneObjectsCollisions, coffeeMapZoneObjectsCollisions, parcRightMapZoneObjectsCollisions];
=======
    // zone vers parc left
    {x:-8, y:303, width: 10, height: 50, direction:"parc-left"},
];

let coffeeMapZoneObjectsCollisions = [
    // porte entrée café
    {x:865, y:568, width: 60, height: 10},
];

let parcRightMapZoneObjectsCollisions = [
    // zone vers city
    {x:-16, y:373, width: 16, height: 55, direction:"city"},

    // zone vers parc
    {x:758, y:-7, width: 55, height:16, direction:"parc"},
];

let parcLeftMapZoneObjectsCollisions = [
    // zone vers city
    {x:1022, y:370, width: 16, height: 55, direction:"city"},

    // zone vers parc
    {x:212, y:-7, width: 55, height:16, direction:"parc"},
];

let parcMapZoneObjectsCollisions = [
    // zone vers parc right
    {x:1022, y:290, width: 16, height: 55, direction:"parc-right"},

    // zone vers parc left
    {x:85, y:637, width: 55, height:16, direction:"parc-left"},
];



let mapsZoneObjectsCollisions = [cityMapZoneObjectsCollisions, coffeeMapZoneObjectsCollisions, parcRightMapZoneObjectsCollisions, parcLeftMapZoneObjectsCollisions, parcMapZoneObjectsCollisions];
>>>>>>> main

function drawAllZoneCollisionsBox(){
    ctx.fillStyle = "rgba(0,0,255,0.8)";

    mapsZoneObjectsCollisions[currentMap].forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
<<<<<<< HEAD
=======
        // A supprimer ?
>>>>>>> main
        ctx.fillRect(element.coffeeX, element.coffeeY, element.coffeeWidth, element.coffeeHeight);
    });
}


function checkAllSolidCollisions(){
    mapsSolidObjectsCollisions[currentMap].forEach(element => {
        if(player.position.x + offsetX + hitboxWidth > element.x && player.position.x + offsetX < element.x + element.width && player.position.y + offsetY + hitboxHeight >  element.y && player.position.y + offsetY < element.y + element.height)
        {
            switch (moveCharacter) {
                case "up":
                    player.position.y += player.speed;
        
                    spriteSheetPosY = directionUp * frameHeight;
                    body.onkeyup = event => {
                        stopMovingCharacter(directionUp);
                    }
                    break;
        
                case "down":
                    player.position.y -= player.speed;
        
                    if(previousMoveOrientation == "up" || previousMoveOrientation == "left" || previousMoveOrientation == "right")
                    {
                        player.position.y -= player.speed;
                    }
        
                    spriteSheetPosY = directionDown * frameHeight;
                    body.onkeyup = event => {
                        stopMovingCharacter(directionDown);
                    } 
                    break;
        
                case "left":
                    player.position.x += player.speed;
        
                    spriteSheetPosY = directionLeft * frameHeight;
                    body.onkeyup = event => {
                        stopMovingCharacter(directionLeft);
                    }
                    break;
        
                case "right":
                    player.position.x -= player.speed;
        
                    spriteSheetPosY = directionRight * frameHeight;
                    body.onkeyup = event => {
                        stopMovingCharacter(directionRight);
                    }
                    break;
              
                default:
                    break;
            }
        }

    });
}

function checkAllZoneCollisions(){
    mapsZoneObjectsCollisions[currentMap].forEach(element => {
        if(player.position.x + offsetX + hitboxWidth > element.x && player.position.x + offsetX < element.x + element.width && player.position.y + offsetY + hitboxHeight >  element.y && player.position.y + offsetY < element.y + element.height)
        {
            switch (currentMap) {
                case 0:
                    switch (element.direction) {
                        case "coffee":
                            console.log("coffee");
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(coffeeShop, 0, 0,1024,640);
                            // On replace le personnage
                            player.position.x = 875;
                            player.position.y = 510;
                            currentMap = 1;

                            scaleDivider = 1.2;
                            offsetX = 14;
                            offsetY = 9;
                            rescalePlayer();
                            break;

                        case "parc-right":
                            console.log("parc-right");
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapRight, 0, 0,1024,640);
                            // On replace le personnage
                            player.position.x = 20;
                            player.position.y = 373;
                            currentMap = 2;
                            break;
<<<<<<< HEAD
=======

                        case "parc-left":
                            console.log("parc-left");
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapLeft, 0, 0,1024,640);
                            // On replace le personnage
                            player.position.x = 990;
                            player.position.y = 373;
                            currentMap = 3;
                            break;
>>>>>>> main
                    }
                    break;
                    
                case 1:
                    ctxBackground.clearRect(0,0,1024,640);
                    ctxBackground.drawImage(cityMapImg, 0, 0,1024,640);
                    // On replace le personnage et le carré bleu sur la route de la deuxieme image
                    player.position.x = 240
                    player.position.y = 538
                    currentMap = 0;

                    scaleDivider = 1.5;
                    offsetX = 10;
                    offsetY = 6;
                    rescalePlayer();
                    break;

                case 2:
                    switch (element.direction) {
                        case "city":
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapImg, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 978;
                            player.position.y = 142;
                            currentMap = 0;
                            break;

                        case "parc":
                            console.log("parc");
<<<<<<< HEAD
=======
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(parc, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 978;
                            player.position.y = 292;
                            currentMap = 4;
                            break;
                    }
                    break;

                case 3:
                    switch (element.direction) {
                        case "city":
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapImg, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 10;
                            player.position.y = 303;
                            currentMap = 0;
                            break;

                        case "parc":
                            console.log("parc");
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(parc, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 90;
                            player.position.y = 575;
                            currentMap = 4;
                            break;
                    }
                    break;

                case 4:
                    switch (element.direction) {
                        case "parc-right":
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapRight, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 758;
                            player.position.y = 20;
                            currentMap = 2;
                            break;

                        case "parc-left":
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapLeft, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 212;
                            player.position.y = 15;
                            currentMap = 3;
>>>>>>> main
                            break;
                    }
                    break;
            }
        }
    })
}


function checkCanvasEdgesCollisions(){
<<<<<<< HEAD

=======
>>>>>>> main
    if(player.position.x + offsetX < 0 || player.position.x + offsetX + hitboxWidth  > canvas.width || player.position.y <  0 || player.position.y + offsetY + hitboxHeight > canvas.height)
    {
        switch (moveCharacter) {
            case "up":
                player.position.y += player.speed;
    
                spriteSheetPosY = directionUp * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionUp);
                }
                break;
    
            case "down":
                player.position.y -= player.speed;
    
                if(previousMoveOrientation == "up" || previousMoveOrientation == "left" || previousMoveOrientation == "right")
                {
                    player.position.y -= player.speed;
                }
    
                spriteSheetPosY = directionDown * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionDown);
                } 
                break;
    
            case "left":
                player.position.x += player.speed;
    
                spriteSheetPosY = directionLeft * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionLeft);
                }
                break;
    
            case "right":
                player.position.x -= player.speed;
    
                spriteSheetPosY = directionRight * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionRight);
                }
                break;
          
            default:
                break;
        }
    }
}
