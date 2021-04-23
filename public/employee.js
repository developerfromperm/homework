import {Person} from "./person.js";

export class Employee extends Person {
    constructor(name, surname, salary, listOfSalary) {
        let list = ['10 января получил 20 000', '10 февраля получил 110 000 рублей']
        super(name, surname);
        this.salary = salary
        this.listOfSalary = list
    }

    information() {
        console.log(`Сотрудник: Имя ${this.name}, фамилия ${this.surname}, зарплата ${this.salary}, список выплат ${this.listOfSalary}`)
    }
}