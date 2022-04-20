const OfficerCanvas = document.querySelector('#OfficerCanvas')

const OfficerCtx = OfficerCanvas.getContext('2d');

// let policerX = 600


let WidthHitBoxOfficer
let HeightHitBoxOfficer 

let officierDisplay = true;


let SpriteX 
let SpriteY 
function OfficerSprite(OfficerXInitial,OfficerYInitial, OfficerXToRight,OfficerXToLeft){
    let speed = 5 
    function movingOfficer(){

        OfficerCtx.clearRect(OfficerXToRight-290, OfficerYInitial, 1000, HeightHitBoxOfficer)
    
        if(officierDisplay){
            if(OfficerXInitial<= OfficerXToRight){
                speed = 5
                spriteSheetPosX = 0;
                spriteSheetPosY =directionRight * frameHeight;
                SpriteX = spriteSheetPosX -10
                SpriteY = spriteSheetPosY - 5
                WidthHitBoxOfficer = 300
              HeightHitBoxOfficer = 40
             }
             else if(OfficerXInitial>=OfficerXToLeft){
                 speed = -5
                 
                 spriteSheetPosX = 0;
                spriteSheetPosY =directionLeft * frameHeight;
                SpriteX = spriteSheetPosX +10
                SpriteY = spriteSheetPosY 
                WidthHitBoxOfficer = -290
                HeightHitBoxOfficer = 40
             }
         
             OfficerXInitial += speed
             
             OfficerCtx.clearRect(OfficerXToRight-290, OfficerYInitial, 1000, HeightHitBoxOfficer)
         
             // On dessine le caractère
             OfficerCtx.fillStyle ="rgb(250,150,0,0.3"
             // OfficerCtx.clearRect(OfficerXInitial,OfficerYInitial,40,40)
         
             OfficerCtx.fillRect(OfficerXInitial+20,OfficerYInitial,WidthHitBoxOfficer,HeightHitBoxOfficer)
             OfficerCtx.drawImage(police.character, SpriteX, SpriteY,frameWidth, frameHeight, OfficerXInitial, OfficerYInitial, 40 , 40);
             
             // console.log(OfficerXInitial)
        }
        
        
     
        
    }
    
    setInterval(movingOfficer,100)
}



// OfficerXInitial doit être supérier à OfficerXToRight

// OfficerYInitial est égal à la position du en Y du personnage

// OfficerXToRight doit être inférieur à OfficerXInitial et permets d'aller à gauche

// OfficerXToLeft doit être supérieur de 200px par rapport à OfficerXInitial et determine la limite jusqu'à ce que le policier change de position pour aller à droite



// OfficerSprite(600,105,500,700)
// OfficerSprite(800,205,700,900)













