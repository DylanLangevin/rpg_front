class Player {
    constructor(name, position, inventory) {
        this.name = name;
        this.position = position;
        this.inventory = inventory;
    }

    letsTalk(text) {
        // this.talk = text
        return this.name + ": " + text;
    }

    move(position) {
        //code déplacement ici
        return
    }

    newItem(item) {
        this.inventory.push(item);
        console.log(this.inventory);
    }
}