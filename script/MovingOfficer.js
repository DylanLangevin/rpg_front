const OfficerCanvas = document.querySelector('#canvas-over')

const OfficerCtx = OfficerCanvas.getContext('2d');

let officierDisplay = true;

let speed = 5;

let hitboxOfficierVisionWidth = 200;
let hitboxOfficierVisionheight = 40;

let officierFramePosLeft = directionRight * frameHeight;
let officierFramePosRight = directionLeft * frameHeight;

let offsetHitboxX = (frameWidth / scaleDivider) / 2;

let officierCurrentAnimeFrame = 0;

let drawAllOfficier = [
    {posX:700, posY:200, stopLeft:800, stopRight:600, officierDirection: 3},
    {posX:600, posY:300, stopLeft:700, stopRight:500, officierDirection: 3}
];

let gradient = OfficerCtx.createLinearGradient(0, 0, hitboxOfficierVisionWidth, hitboxOfficierVisionheight);

function movingOfficer(){


    OfficerCtx.clearRect(0,0,1024, 640);

    if(officierDisplay)
    {
        drawAllOfficier.forEach(element => {

            if(element.posX <= element.stopRight){
                speed = 5;
                officerCurrentPos = officierFramePosLeft - 5;
                hitboxOfficierVisionWidth = 200;
                element.officierDirection = 3;
            }
            else if(element.posX >= element.stopLeft){
                speed = -5;
                officerCurrentPos = officierFramePosRight - 5;
                hitboxOfficierVisionWidth = -200;
                element.officierDirection = 1;
            }
            
            // On incrémente la vitesse
            element.posX += speed;
    
    
            // Animation du policier
            if(officierCurrentAnimeFrame < 512)
            {
                officierCurrentAnimeFrame += frameWidth;
            }
            else
            {
                officierCurrentAnimeFrame = 0;
            }
            
        
            // On dessine la hitbox
            gradient = OfficerCtx.createLinearGradient(element.posX, element.posY, hitboxOfficierVisionWidth, hitboxOfficierVisionheight);
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(1, 'blue');

            OfficerCtx.fillStyle = gradient;
            OfficerCtx.fillRect(element.posX + offsetHitboxX, element.posY, hitboxOfficierVisionWidth, hitboxOfficierVisionheight);
    
            // On dessine le caractère
            OfficerCtx.drawImage(police.character, officierCurrentAnimeFrame, element.officierDirection * frameHeight, frameWidth, frameHeight, element.posX, element.posY, frameWidth / scaleDivider, frameHeight / scaleDivider);
        }); 
    }

};

setInterval(() => {movingOfficer()}, 100);