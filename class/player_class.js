class Player {
  constructor(name, image, position, inventory) {
    this.name = name;
    this.position = position;
    this.inventory = inventory;
    this.image = image;
    let character = new Image();
    character.src = this.image;
    this.character = character;
  }

  letsTalk(text) {
    return this.name + ": " + text;
  }

  newItem(item) {
    this.inventory.push(item);
  }

  textZone(iTalk, dx, dy) {
    let widthTextZone =
      ctx.measureText(iTalk).width +
      ctx.measureText(this.name).width +
      ctx.measureText(": ").width +
      10;

    ctx.fillStyle = "#E8DCCA";
    ctx.fillRect(dx + 59, dy + 1, widthTextZone, 20);
    ctx.strokeRect(dx + 59, dy + 1, widthTextZone, 20);
    ctx.fillStyle = "#000";
    ctx.fillText(this.letsTalk(iTalk), dx + 64, dy + 15);

    return;
  }

  //surement obsolète
  // move(position) {
  //     //code déplacement ici
  //     return
  // }
}
