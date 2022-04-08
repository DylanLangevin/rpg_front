class Player {
    constructor(name, image, position, inventory) {
        this.name = name;
        this.position = position;
        this.inventory = inventory;
        this.image = image;
    }

    letsTalk(text) {
        // this.talk = text
        return this.name + ": " + text;
    }

    newItem(item) {
        this.inventory.push(item);
    }

    characterProfil() {
        let character = new Image();
        character.src = this.image;
        return character;
    }



    //surement obsolète
    // move(position) {
    //     //code déplacement ici
    //     return
    // }
}