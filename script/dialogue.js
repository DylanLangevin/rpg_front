// Coordonnées de la hitbox pnj dialogue
let pnjDialogueBoxX = 640
let pnjDialogueBoxY = 126
let pnjDialogueBoxWidth = frameWidth + 20
let pnjDialogueBoxHeight = frameHeight + 10

// Pour les collisions
let playerPositionY = dy + 5;
let playerPositionX = dx + 15;
let playerFrameWidth = frameWidth - 30;
let playerFrameHeight = frameHeight - 10;

function pnjConversationCollision(playerPositionX, playerPositionY, playerFrameWidth, playerFrameHeight, pnjDialogueBoxX, pnjDialogueBoxY, pnjDialogueBoxWidth, pnjDialogueBoxHeight, whichText, pnjTalk, maleCitizen) {
    // Collision du pnj
    if(playerPositionX + playerFrameWidth > pnjDialogueBoxX && playerPositionX < pnjDialogueBoxX + pnjDialogueBoxWidth && playerPositionY + playerFrameHeight > pnjDialogueBoxY && playerPositionY < pnjDialogueBoxY + pnjDialogueBoxHeight) {
        // Afficher le dialogue du pnj à la collision
        pnjTalk = "Voulez-vous discuter avec " + maleCitizen.name + " ? (enter)"
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
            console.log("oui");
            pnjTalk = "Holaaaaaa"
            maleCitizen.textZone(pnjTalk)
        }
    
        // Pour effacer le texte 
        whichText = false
    
    
        if(playerPositionX + playerFrameWidth > pnjX && playerPositionX < pnjX + pnjWidth && playerPositionY + playerFrameHeight > pnjY && playerPositionY < pnjY + pnjHeight) {
    
            console.log("Collision pnj");
    
            // en cas de collision on inverse la vitesse pour qu'il puisse est bloqué sur place
            if (moveCharacter === "up") {
                dy += speed
        
                // Va permettre de définir la direction du mouvement
                sy = directionUp * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionUp);
                }
            } 
            else if (moveCharacter === "down") {
                dy -= speed
                sy = directionDown * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionDown);
                } 
            }
        
            else if (moveCharacter === "left") {
                dx += speed
                sy = directionLeft * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionLeft);
                }
            }
            else if (moveCharacter === "right") {
                dx -=speed
                sy = directionRight * frameHeight;
                body.onkeyup = event => {
                    stopMovingCharacter(directionRight);
                }
            }
        }
    }
}
