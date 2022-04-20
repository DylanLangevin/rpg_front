let hitboxToggle = true;

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
                // Map de la ville --> Case 0
                case 0:
                    switch (element.direction) {
                        case "coffee":
                            OpenDoor()
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
                            pnjCoffeePosition()
                            break;

                        case "parc-right":
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapRight, 0, 0,1024,640);
                            // On replace le personnage
                            player.position.x = 20;
                            player.position.y = 373;
                            currentMap = 2;
                            break;

                        case "parc-left":
                            console.log("parc-left");
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapLeft, 0, 0,1024,640);
                            // On replace le personnage
                            player.position.x = 990;
                            player.position.y = 373;
                            currentMap = 3;
                            break;
                    }
                    break;
                
                // Map de l'intérieur du café --> Case 1
                case 1:
                    OpenDoor()
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
                
                //  Map du parc-right --> Case 2
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
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(parc, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 978;
                            player.position.y = 292;
                            currentMap = 4;
                            break;
                    }
                    break;
                
                //  Map du parc-left --> Case 3
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
                
                //  Map du parc  --> Case 4
                case 4:
                    switch (element.direction) {
                        case "parc-right":
                            ctxBackground.clearRect(0,0,1024,640);
                            OfficerCtx.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapRight, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 758;
                            player.position.y = 20;
                            currentMap = 2;
                            break;

                        case "parc-left":
                            ctxBackground.clearRect(0,0,1024,640);
                            OfficerCtx.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(cityMapLeft, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 212;
                            player.position.y = 15;
                            currentMap = 3;
                            break;

                        case "library":
                            OpenDoor()
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(indoorLibraryFirstMap, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 180;
                            player.position.y = 490;
                            currentMap = 5;
                            break;
                    }
                    break;
                
                // Première map intérieur library
                case 5:
                    switch (element.direction) {
                        case "parc":
                            ctxBackground.clearRect(0,0,1024,640);
                            ctxBackground.drawImage(parc, 0, 0,1024,640);
                            // On replace le personnage et le carré bleu sur la route de la deuxieme image
                            player.position.x = 204;
                            player.position.y = 500;
                            currentMap = 4;
                            break;
                    }
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

function checkAllDialogueCollisions() {
    mapsDialogueCollisions[currentMap].forEach(element => {
        if((player.position.x + offsetX + hitboxWidth > element.x && player.position.x + offsetX < element.x + element.width && player.position.y + offsetY + hitboxHeight >  element.y && player.position.y + offsetY < element.y + element.height)) {

            pnjTalk = "Voulez-vous discuter avec " + element.pnj + " ? (enter)"
            maleCitizen.textZone(pnjTalk)
        
            // Quand on clique sur entrée, le dialogue se créé
            window.onkeydown = event => {
                switch(event.key) {
                    case "Enter":
                        whichText = true
                        console.log("ok");
                        return
                    default:
                        console.log("Non");
                }
            }
            // Affiche le dialogue
            if (whichText == true) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                drawPlayerHitboxCollisions()
                console.log("oui");
                maleCitizen.textZone(maleCitizen.iTalk)
            }
        }
    });
}

function checkAllItemCollisions() {
    mapsItemCollisions[currentMap].forEach(element => {
        if((player.position.x + offsetX + hitboxWidth > element.x && player.position.x + offsetX < element.x + element.width && player.position.y + offsetY + hitboxHeight >  element.y && player.position.y + offsetY < element.y + element.height && !element.picked )) {
            
            // Met le nom de l'objet dans l'inventaire du joueur
            player.inventory.push(element.name)
            if(element.name != "key") {
                takeObj()
            } else if(element.name === "key") {
                stillDre(true)
            }

            // Rend visible l'image de l'item récupéré dans l'inventaire
            document.querySelector(`#object${(player.inventory.length)}`).style.visibility = "visible"

            // Change la valeur de picked pour ne plus pouvoir le recupérer
            element.picked = true

            

        }
    });
}



function checkOfficerSolidCollisions(){
    if(player.position.x + offsetX < 0 || player.position.x + offsetX + hitboxWidth  > canvas.width || player.position.y <  0 || player.position.y + offsetY + hitboxHeight > canvas.height){

    }}