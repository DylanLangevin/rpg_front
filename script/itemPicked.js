// Fonctions permettant de ramasser les objets



function itemFound(itemX, itemY, itemWidth, itemHeight, name_item) {
  if (
    dx + 15 + frameWidth - 30 > itemX &&
    dx + 15 < itemX + itemWidth &&
    dy + 5 + frameHeight - 10 > itemY &&
    dy + 5 < itemY + itemHeight
  ) {
    console.log("Objet trouvé");
    let objectFound = name_item;

    if (currentMap == 1) {
      player.newItem(objectFound);
      console.log(player.inventory);
      iTalk = "Cool j'ai un ramassé un truc";
      player.textZone(iTalk);
      console.log("tu as ramassé un objet");
      ctx.clearRect(0,0,canvas.width,canvas.height)
      itemWidth = 0;
      itemHeight = 0;
    } else {
      colorRect = "rgba(0, 0, 250, 0.3)";
    }
  }
}
