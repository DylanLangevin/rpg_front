class Player {
    constructor(image, position, speed, inventory) {
        this.position = position;
        this.speed = speed;
        this.inventory = inventory;
        this.image = image;
        let character = new Image();
        character.src = this.image;
        this.character = character;
    }

    newItem(item) {
        this.inventory.push(item);
        takeobj();
    }

    textZone(iTalk, dx, dy) {
        let widthTextZone = ctx.measureText(iTalk).width + ctx.measureText(this.name).width + ctx.measureText(": ").width + 10;
        ctx.fillStyle = "#E8DCCA";
        ctx.fillRect(dx +59, dy +1, widthTextZone, 20)
        ctx.strokeRect(dx +59, dy +1, widthTextZone, 20)
        ctx.fillStyle = "#000";
        ctx.fillText(this.letsTalk(iTalk), dx +64, dy +15);
        return
    }
}