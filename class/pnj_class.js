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

    textPosition() {
        let newTextPosition = this.position[1] - 5;
        return newTextPosition;
    }

}

