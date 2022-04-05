class Cops {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    letsTalk(text) {
        // this.talk = text
        return this.name + ": " + text;
    }

    move(position) {
        //code déplacement ici
        return //la nouvelle position
    }

    hitBox() {
        return
    }

    gotCaught() {
        this.talk("vous êtes en état d'arrestation")
    }
}