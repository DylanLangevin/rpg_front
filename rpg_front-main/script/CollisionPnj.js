function CollisionPnj(
  PosXPnj,
  PosYPnj,
  HeiPnj,
  WidPnj,
  pnjTalk,
  pnjTalk1,
  type_character
) {
  if (
    dx + 15 + frameWidth - 30 > PosXPnj &&
    dx + 15 < PosXPnj + WidPnj &&
    dy + 5 + frameHeight - 10 > PosYPnj &&
    dy + 5 < PosYPnj + HeiPnj
  ) {
    console.log("Collision pnj");

    // Afficher le dialogue du pnj à la collision
    type_character.textZone(pnjTalk, 600, 100);

    // Chnagement de texte en restant appuyé sur Entrer
    
    window.onkeydown= (event) => {
      switch (event.key) {
        case "Enter":
          
          
          whichText = true
          console.log(whichText)
          //   ctx.clearRect(maleCitizen, pnjTalk, 600, 100);
          
          // break;
      }
    };

    if(whichText != false){
      ctx.clearRect(0,0,canvas.width, canvas.height)
      type_character.textZone(pnjTalk1, 600, 100);
      console.log(pnjTalk1)
    }
    whichText = false




  //   if (moveCharacter === "up") {
  //     // en cas de collision on inverse la vitesse pour qu'il puisse est bloqué sur place
  //     dy += speed;

  //     // Va permettre de définir la direction du mouvement
  //     sy = directionUp * frameHeight;
  //     body.onkeyup = (event) => {
  //       stopMovingCharacter(directionUp);
  //     };
  //   } else if (moveCharacter === "down") {
  //     dy -= speed;
  //     sy = directionDown * frameHeight;
  //     body.onkeyup = (event) => {
  //       stopMovingCharacter(directionDown);
  //     };
  //   } else if (moveCharacter === "left") {
  //     dx += speed;
  //     sy = directionLeft * frameHeight;
  //     body.onkeyup = (event) => {
  //       stopMovingCharacter(directionLeft);
  //     };
  //   } else if (moveCharacter === "right") {
  //     dx -= speed;
  //     sy = directionRight * frameHeight;
  //     body.onkeyup = (event) => {
  //       stopMovingCharacter(directionRight);
  //     };
  //   }
  // } else {
  //   window.onkeydown = (event) => {
  //     switch (event.key) {
  //       case "Enter":
  //         AccepetedToTalk = "Enter";
  //         return false;
  //     }
  //   };
  }
}

function DrawPnj(type_character, Xpnj,SecondXpnj, Ypnj, SecondeYpnj, WidPnj,SecondWidPnj, HeiPnj, SecondeHeiPnj, XHitBox,SecondXHitBox, YHitBox,SecondYHiBox) {
  ctx.fillStyle = "rgba(250, 0, 0, 0.3)";
  ctx.fillRect(XHitBox, YHitBox, WidPnj, HeiPnj);

  ctx.fillStyle = "rgba(100, 200, 0, 0.7)";
  ctx.fillRect(SecondXHitBox, SecondYHiBox, SecondWidPnj, SecondeHeiPnj);
  ctx.drawImage(
    type_character.character,
    0,
    128,
    frameWidth,
    frameHeight,
    Xpnj,
    Ypnj,
    frameWidth,
    frameHeight,

    
  );
}
