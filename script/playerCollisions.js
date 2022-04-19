let allSolidObjectsCollisions = [
    // Mairie
    {x:64, y:0, width: 368, height: 216},

    //Café
    {x:88, y:384, width: 152, height: 174},
    {x:240, y:400, width: 100, height: 114},
    {x:280, y:400, width: 64, height: 158},

    // Prochain bidule
];

function drawAllSolidCollisionsBox(){
    ctx.fillStyle = "rgba(255,0,0,0.3)";

    allSolidObjectsCollisions.forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });

}

let allZoneObjectsCollisions = [
    // map carte ville, hitbox chemin droite
    {x: 1008, y: 142, width: 16, height: 50},

    // map carte droite, hitbox chemin gauche
    {x: 0, y: 373, width: 16, height: 55},
    // map carte droite, hitbox chemin haut
    {x: 768, y: 0, width: 55, height: 16},

    // porte entrée café
    {coffeeX:250, coffeeY:510, coffeeWidth: 20, coffeeHeight: 30},

];

function drawAllZoneCollisionsBox(){
    ctx.fillStyle = "rgba(0,0,255,0.8)";

    allZoneObjectsCollisions.forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
        ctx.fillRect(element.coffeeX, element.coffeeY, element.coffeeWidth, element.coffeeHeight);
    });
}


function checkAllSolidCollisions(){
    allSolidObjectsCollisions.forEach(element => {
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
    allZoneObjectsCollisions.forEach(element => {
        if(player.position.x + offsetX + hitboxWidth > element.x && player.position.x + offsetX < element.x + element.width && player.position.y + offsetY + hitboxHeight >  element.y && player.position.y + offsetY < element.y + element.height)
        {
            switch (currentMap) {
                case 1:
                    ctxBackground.clearRect(0,0,1040,640);
                    ctxBackground.drawImage(cityMapRight, 0, 0,1040,640);
                    // On replace le personnage et le carré bleu sur la route de la deuxieme image
                    player.position.x = 20
                    player.position.y = 373
                    element.x  = 10
                    element.y  = 142
                    currentMap = 2
                    break;
                    
                case 2:
                    ctxBackground.clearRect(0,0,1040,640)
                    ctxBackground.drawImage(cityMapImg, 0, 0,1040,640);
                    // On replace le personnage et le carré bleu sur la route de la deuxieme image
                    player.position.x = 988
                    player.position.y = 142
                    element.x  = 10
                    element.y  = 142
                    currentMap = 1
                    break;
                default:
                    break;
            }
        } else if (player.position.x + offsetX + hitboxWidth > element.coffeeX && player.position.x + offsetX < element.coffeeX + element.coffeeWidth && player.position.y + offsetY + hitboxHeight >  element.coffeeY && player.position.y + offsetY < element.coffeeY + element.coffeeHeight) {
            switch (currentMap) {
                case 1:
                    ctxBackground.clearRect(0,0,1040,640);
                    ctxBackground.drawImage(coffeeShop, 0, 0,1040,640);
                    player.position.x = 920
                    player.position.y = 510
                    element.coffeeX  = 880;
                    element.coffeeY  = 565;
                    element.coffeeWidth  = 55;
                    currentMap = 3;
                    break;
                case 3:
                    ctxBackground.clearRect(0,0,1040,640)
                    ctxBackground.drawImage(cityMapImg, 0, 0,1040,640);
                    // On replace le personnage et le carré bleu sur la route de la deuxieme image
                    player.position.x = 250
                    player.position.y = 520
                    element.x  = 10
                    element.y  = 142
                    currentMap = 1
                    break;
                default:
                    break;
            }
        }
    })
}


function checkCanvasEdgesCollisions(){

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
