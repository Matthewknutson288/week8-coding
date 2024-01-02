class Character {
    constructor(name, race, characterClass) {
        this.name = name;
        this.race = race;
        this.characterClass = characterClass;
    }

    toString() {
        return `${this.name} is a ${this.race} ${this.characterClass}`;
    }
}

class Menu {
    constructor() {
        this.characters = [];
    }

    createCharacter() {
        const name = prompt("Enter character's name: ");
        const race = prompt("Enter character's race: ");
        const characterClass = prompt("Enter character's class: ");
        this.characters.push(new Character(name, race, characterClass));
    }

    viewCharacters() {
        this.characters.forEach(character => console.log(character.toString()));
    }

    deleteCharacter() {
        const name = prompt("Enter the name of the character to delete: ");
        this.characters = this.characters.filter(character => character.name !== name);
    }

    displayMenu() {
        while (true) {
            const choice = prompt("1. Create Character\n2. View Characters\n3. Delete Character\n4. Exit\nEnter your choice: ");
            switch (choice) {
                case '1':
                    this.createCharacter();
                    break;
                case '2':
                    this.viewCharacters();
                    break;
                case '3':
                    this.deleteCharacter();
                    break;
                case '4':
                    return;
                default:
                    console.log("Invalid choice. Please choose again.");
            }
        }
    }
}

const menu = new Menu();
menu.displayMenu();