export class Person {
    static instances = 0
    constructor(name, surname) {
        this.name = name
        this.surname = surname
        Person.instances++
    }

    information() {
        console.log(`Персона: Имя ${this.name}, фамилия ${this.surname}`)
    }

}