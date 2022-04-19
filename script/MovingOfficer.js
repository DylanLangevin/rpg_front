const OfficerCanvas = document.querySelector('#OfficerCanvas')

const OfficerCtx = OfficerCanvas.getContext('2d');
let speed = 5
let policerX = 600


let WidthHitBoxOfficer
let HeightHitBoxOfficer 


let SpriteX 
    let SpriteY 

function movingOfficer(){
    
    
    if(policerX<= 600){
       speed = 5
       spriteSheetPosX = 0;
       spriteSheetPosY =directionRight * frameHeight;
       SpriteX = spriteSheetPosX -10
       SpriteY = spriteSheetPosY - 5
       WidthHitBoxOfficer = 100
    HeightHitBoxOfficer = 40
    }
    else if(policerX>=800){
        speed = -speed
        spriteSheetPosX = 0;
       spriteSheetPosY =directionLeft * frameHeight;
       SpriteX = spriteSheetPosX +19
       SpriteY = spriteSheetPosY 
       WidthHitBoxOfficer = -90
       HeightHitBoxOfficer = 40
    }

    policerX += speed

    
       
  
    walkSound(false);
    OfficerCtx.clearRect(0, 0, OfficerCanvas.width, OfficerCanvas.height)
    
    

    // On dessine le caractère
    OfficerCtx.fillStyle ="rgb(250,150,0,0.3"
    OfficerCtx.clearRect(0,0,1000,1000)

    OfficerCtx.fillRect(policerX+20,200,WidthHitBoxOfficer,HeightHitBoxOfficer)
    OfficerCtx.drawImage(police.character, SpriteX, SpriteY,frameWidth, frameHeight, policerX, 200, 40 , 40);
    
    console.log(policerX)
    
}

setInterval(movingOfficer,100)









