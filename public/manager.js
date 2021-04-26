import {Employee} from "./employee.js";

export class Manager extends Employee {
    constructor(name, surname, salary, listOfSalary, listOfEmployees) {
        let listEmployees = ['Ivan', 'Nikolay', 'Petr', 'Alex']
        let listSalary = ['15 марта получил 6 000', '15 мая получил 321 000 рублей']
        super(name, surname, salary, listOfSalary);
        this.listOfEmployees = listEmployees
        this.listOfSalary = listSalary
    }

    addEmployee(newEmp){
        this.listOfEmployees.push(newEmp)
    }

    removeEmployee(delEmp){
          this.listOfEmployees = this.listOfEmployees.filter(item => item !== delEmp)
    }

    information() {
        console.log(`Менеджер: Имя ${this.name}, фамилия ${this.surname}, зарплата ${this.salaryGet}, список выплат ${this.listOfSalary}, список подчиненных ${this.listOfEmployees}`)
    }
}