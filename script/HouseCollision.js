function HouseCollision(HHitboxX, HHitboxY, HHitboxWidth, HHitboxHeight) {
  if (
    dx + 15 + frameWidth - 30 > HHitboxX &&
    dx + 15 < HHitboxX + HHitboxWidth &&
    dy + 5 + frameHeight - 10 > HHitboxY &&
    dy + 5 < HHitboxY + HHitboxHeight
  ) {
    console.log("Collision maison");

    // en cas de collision on inverse la vitesse pour qu'il puisse est bloqué sur place
    if (moveCharacter === "up") {
      dy += speed;

      // Va permettre de définir la direction du mouvement
      sy = directionUp * frameHeight;
      body.onkeyup = (event) => {
        stopMovingCharacter(directionUp);
      };
    } else if (moveCharacter === "down") {
      dy -= speed;
      sy = directionDown * frameHeight;
      body.onkeyup = (event) => {
        stopMovingCharacter(directionDown);
      };
    } else if (moveCharacter === "left") {
      dx += speed;
      sy = directionLeft * frameHeight;
      body.onkeyup = (event) => {
        stopMovingCharacter(directionLeft);
      };
    } else if (moveCharacter === "right") {
      dx -= speed;
      sy = directionRight * frameHeight;
      body.onkeyup = (event) => {
        stopMovingCharacter(directionRight);
      };
    }
  }
}
