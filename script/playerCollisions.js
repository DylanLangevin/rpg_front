let allSolidObjectsCollisions = [
    // Mairie
    {x:64, y:0, width: 368, height: 216},

    //Cafée
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

];

function drawAllZoneCollisionsBox(){
    ctx.fillStyle = "rgba(0,0,255,0.3)";

    allZoneObjectsCollisions.forEach(element => {
        ctx.fillRect(element.x, element.y, element.width, element.height);
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
