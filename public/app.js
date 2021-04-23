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




