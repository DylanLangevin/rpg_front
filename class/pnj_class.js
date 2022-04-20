class Pnj {
    constructor(name, image, position, iTalk) {
        this.name = name;
        this.position = position;
        this.image = image;
        let character = new Image();
        character.src = this.image;
        this.character = character;
        this.iTalk = iTalk;
    }

    letsTalk(text) {
        return this.name + ": " + text;
    }

    textZone(iTalk) {
        let widthTextZone = ctx.measureText(iTalk).width + ctx.measureText(this.name).width + ctx.measureText(": ").width + 10;
        ctx.fillStyle = "#E8DCCA";
        ctx.fillRect(this.position[0] -5, this.position[1] -15, widthTextZone, 20)
        ctx.strokeRect(this.position[0] -5, this.position[1] -15, widthTextZone, 20)
        ctx.fillStyle = "#000";
        ctx.fillText(this.letsTalk(iTalk), this.position[0], this.position[1]);
        console.log(widthTextZone);
        return 
    }

}

