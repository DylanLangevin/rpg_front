class Pnj {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    letsTalk(text) {
        // this.talk = text
        ctx
        return this.name + ": " + text;
    }

    textPosition() {
        console.log(this.position)
        let newTextPosition = this.position[1] - 5;
        return newTextPosition;
    }

}

