const OfficerCanvas = document.querySelector('#OfficerCanvas')

const OfficerCtx = OfficerCanvas.getContext('2d');
let speed = 5
let policerX = 600

// image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur

// let PoliceShape = "character_profile/female_player.png"

// let OfficerPnj = new Police('Jean',PoliceShape,{})





function movingOfficer(){
    
    if(policerX<= 600){
       speed = 5

    }
    else if(policerX>=800){
        speed = -speed
    }

    policerX += speed

    OfficerCtx.clearRect(0,0,1000,1000)
    OfficerCtx.drawImage(police.character,0,128,frameWidth,frameHeight,policerX,200,40,40)
    console.log(policerX)
    
}

setInterval(movingOfficer,100)









