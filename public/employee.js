import {Person} from "./person.js";

export class Employee extends Person {
    #salary = 0
    set salarySet(salary){
        this.#salary = salary
    }

    get salaryGet(){
        return this.#salary
    }

    constructor(name, surname, salary) {
        let date = new Date(2020, 0,10)
        let february = date.getMonth() + 1
        let date2 = new Date(2020, february,10)
        let list = [date + ' получил 20 000', date2 + ' получил 110 000 рублей']
        super(name, surname);
        this.salarySet = salary
        this.listOfSalary = list

    }

    information() {
        console.log(`Сотрудник: Имя ${this.name}, фамилия ${this.surname}, зарплата ${this.salaryGet}, список выплат ${this.listOfSalary}`)
    }
}