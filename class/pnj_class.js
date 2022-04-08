class Pnj {
    constructor(name, image, position) {
        this.name = name;
        this.position = position;
        this.image = image;
    }

    letsTalk(text) {
        // this.talk = text
        ctx
        return this.name + ": " + text;
    }

    characterProfil() {
        let character = new Image();
        character.src = this.image;
        return character;
    }

    textZone(iTalk, dx, dy) {
        let widthTextZone = ctx.measureText(iTalk).width + ctx.measureText(this.name).width + ctx.measureText(": ").width + 10;
        ctx.fillStyle = "#E8DCCA";
        ctx.fillRect(dx +59, dy +1, widthTextZone, 20)
        ctx.strokeRect(dx +59, dy +1, widthTextZone, 20)
        ctx.fillStyle = "#000";
        ctx.fillText(player.letsTalk(iTalk), dx +64, dy +15);
        console.log(widthTextZone);
        return 
    }

}

