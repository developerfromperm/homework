import {Person} from './person.js'

export class Student extends Person {
    constructor(name, surname, dateOfBirth, course) {
        super(name, surname)
        this.dateOfBirth = dateOfBirth
        this.course = course
    }

    information() {
        console.log(`Студент: Имя ${this.name}, фамилия ${this.surname}, дата рождения ${this.dateOfBirth}, курс ${this.course}`)
    }
}