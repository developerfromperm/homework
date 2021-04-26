import {Person} from './person.js'

export class Student extends Person {
    constructor(name, surname, dateOfBirth, course) {
        super(name, surname)
        this.dateOfBirth = dateOfBirth
        this.course = course
    }
    get fullName(){
        return `Результат объединения имени и фамилии студента ${this.name} ${this.surname}`
    }

    set fullNameSet(value){
        [this.name, this.surname] = value.split(' ')
    }

    information() {
        console.log(`Студент: ${this.fullName} Имя ${this.name}, фамилия ${this.surname}, дата рождения ${this.dateOfBirth}, курс ${this.course}`)
    }

}