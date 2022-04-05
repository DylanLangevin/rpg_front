class Pnj {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    letsTalk(text) {
        // this.talk = text
        return this.name + ": " + text;
    }
}