export class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    information() {
        console.log(`Персона: Имя ${this.name}, фамилия ${this.surname}`)
    }

}