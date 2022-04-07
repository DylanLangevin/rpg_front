class Police {
    constructor(name,image, position) {
        this.name = name;
        this.position = position;
        this.image = image;
    }

    letsTalk(text) {
        // this.talk = text
        return this.name + ": " + text;
    }

    move(position) {
        //code déplacement ici
        return //la nouvelle position
    }

    characterProfil() {
        let character = new Image();
        character.src = this.image;
        return character;
    }

    hitBox() {
        return
    }

    gotCaught() {
        this.talk("vous êtes en état d'arrestation")
    }
}