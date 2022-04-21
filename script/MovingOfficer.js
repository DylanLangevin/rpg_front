const OfficerCanvas = document.querySelector('#canvas-over')

const OfficerCtx = OfficerCanvas.getContext('2d');

let officierDisplay = true;

let speed = 4;

let hitboxOfficierVisionWidth = 100;
let hitboxOfficierVisionheight = 40;

let officierFramePosLeft = directionRight * frameHeight;
let officierFramePosRight = directionLeft * frameHeight;

let offsetHitboxX = (frameWidth / scaleDivider) / 2;

let officierCurrentAnimeFrame = 0;

let offsetRecthitBoxX = 15

let officierMovingSolidObjectCollision = [
    { posX: 700, posY: 200, stopLeft: 800, stopRight: 600, officierDirection: 3 },
    { posX: 500, posY: 300, stopLeft: 600, stopRight: 400, officierDirection: 3 }
];



function movingOfficer() {

    OfficerCtx.clearRect(0, 0, 1024, 640);

    

    if (officierDisplay) {
        if(hitboxToggle)
        {
            drawHitBoxOfficer();
        }
    
        checkOfficerMovingSolidCollisions();
        checkOfficerVisionCollisions();

        officierMovingSolidObjectCollision.forEach(element => {

            if (element.posX <= element.stopRight) {
                speed = 4;
                officerCurrentPos = officierFramePosLeft - 5;
                hitboxOfficierVisionWidth = 100;
                element.officierDirection = 3;
                offsetRecthitBoxX = 15
            }
            else if (element.posX >= element.stopLeft) {
                speed = -4;
                officerCurrentPos = officierFramePosRight - 5;
                hitboxOfficierVisionWidth = -100;
                element.officierDirection = 1;
                offsetRecthitBoxX = 8
            }

            // On incrémente la vitesse
            element.posX += speed;


            // Animation du policier
            if (officierCurrentAnimeFrame < 512) {
                officierCurrentAnimeFrame += frameWidth;
            }
            else {
                officierCurrentAnimeFrame = 0;
            }


            // On dessine la hitbox
            OfficerCtx.fillStyle = 'rgba(150,150,0,0.2';
            OfficerCtx.fillRect(element.posX + offsetHitboxX, element.posY, hitboxOfficierVisionWidth, hitboxOfficierVisionheight);

            // On dessine le caractère
            OfficerCtx.drawImage(police.character, officierCurrentAnimeFrame, element.officierDirection * frameHeight, frameWidth, frameHeight, element.posX, element.posY, frameWidth / scaleDivider, frameHeight / scaleDivider);
        });
    }


};

setInterval(() => { movingOfficer() }, 100);

function drawHitBoxOfficer() {


    OfficerCtx.fillStyle = "rgba(200,0,0,0.2)"
    officierMovingSolidObjectCollision.forEach(element => {

        OfficerCtx.fillRect(element.posX + offsetRecthitBoxX, element.posY, 20, 40)

    });

}


function checkOfficerMovingSolidCollisions() {
    officierMovingSolidObjectCollision.forEach(element => {
        if (player.position.x + offsetX + hitboxWidth > element.posX + offsetRecthitBoxX && player.position.x + offsetX < element.posX + offsetRecthitBoxX + 20 && player.position.y + offsetY + hitboxHeight > element.posY && player.position.y + offsetY < element.posY + 40) {
            
            if (player.position.x + offsetX + hitboxWidth > element.posX + offsetRecthitBoxX + 20) 
            { 
                player.position.x += 10;
                player.position.y += 5;
                updateFrame();
            }
            else if(player.position.x + offsetX < element.posX + offsetRecthitBoxX)
            {
                player.position.x -= 10;
                player.position.y += 5;
                updateFrame();  
            }
        }
    });
}

function checkOfficerVisionCollisions() {
    officierMovingSolidObjectCollision.forEach(element => {
        if (player.position.x + offsetX + hitboxWidth > element.posX + offsetHitboxX && player.position.x + offsetX < element.posX + offsetHitboxX + hitboxOfficierVisionWidth && player.position.y + offsetY + hitboxHeight > element.posY && player.position.y + offsetY < element.posY + 40) {
            
            console.log('Collision lampe');
        }
    });
}