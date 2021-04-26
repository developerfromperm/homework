import {Person} from "./person.js";
import {Student} from "./student.js";
import {Employee} from "./employee.js";
import {Manager} from "./manager.js";

let person = new Person('Ivan', 'Petrov')
let student = new Student('Alex', 'Ivanov', '05/04/2015', '3')
let employee = new Employee('Petr', 'Sidorov', '30000')
let manager = new Manager('Tom', 'Ivanov', '32423' )

person.information()
student.information()
employee.information()
manager.information()

//Доработка ДЗ
//сеттер, после этого сеттера при вызове геттера отображается новое имя студента в алерте
student.fullNameSet = "Alexey Plotnikov"

// геттер, выводит "Alexey Plotnikov"
alert(student.fullName)

// приватное свойство зарплата

//employee.#salary = "7777" //Здесь будет ошибка, так как свойство приватное

employee.salarySet = 555 // тут устанавливаем сотруднику новую зарплату через сеттер, даже если свойство приватное. значение поменяется
alert(employee.salaryGet)

console.log("")
console.log("//Проверки в консоли после доработки")
console.log("")

employee.information() // 'этим выводом в консоль видим что в консоли изменилось значение зарплаты

//Работа по добавлению подчиненных сотрудников в список у менеджера

manager.salarySet = 10000000 // наследуется также гет сет зарплаты и ее приватность
manager.addEmployee("John") //Добавляем подчиненного
manager.removeEmployee("Nikolay") // Удаляем подчиненного
manager.information()

//также немного поработал с датой в модуле с классом employee
//И решил проблему с подсчетом экземпляров класса ниже
console.log(Person.instances)