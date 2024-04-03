// Human function constructor yaradin - (name, surname, age, isMale - default true) olmalidir
// Human function constructor-da getFullName() methods olmalidir ve result olaraq: meselen John Doe-dirse, D.JOHN return etmelidir.

// class human {
//     constructor(name, surname, age, ismale = true) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.ismale = ismale;
//     }

//     getFullName() {
//         const sur = this.surname.charAt(0).toUpperCase();
//         const name = this.name.toUpperCase();
//         return `${sur}.${name}`;
//     }
// }
// const john = new human("John", "Doe", 30);
// console.log(john.getFullName()); 



// Employee function constructor yaradin - (department, experienceYear, salary - default sifir) olmalidir.
// Employee function constructor-da generateID method-u olmalidir ve department-in ilk 2 herfi boyuk simvollarla + Math.random istifade edib 4 reqemli eded, 'PO2353'
// sheklinde olmalidir.


class employee {
    constructor(department, experienceYear, salary = 0) {
        this.department = department;
        this.experienceYear = experienceYear;
        this.salary = salary;
    }

    generateID() {
        let initials = this.department.substring(0, 2).toUpperCase();
        let randomNum = Math.floor(1000 + Math.random() * 9000);
        return initials + randomNum;
    }
}


let programming = new employee("programming", 5, 60000);
// console.log(programming.generateID()); 



// Object SetPrototypeOf-dan istifade edib, 5-6 ferqli employee yaradin ve bir array-e yigin.
// bir globalFunction yaradin: searchEmployee() -> parametr olaraq bir array qebul edir ve yeni bir array return edir
// bu function-da daxil olunan array-den experienceYear 5-den cox olan,yashi 20-35 araliginda olan
// department-i IT ve ya Design olan ishcileri tapmali ve yeni array-e
// yigmalisiniz. Yeni array-de element-ler object sheklinde olmalidir ve {fullName: D.JOHN,salary:2000,department:'IT',age:45,id:IT2842} bu formada
// olmalidir.


let design = new employee("Design", 7, 70000);
let it = new employee("IT", 8, 80000);
let management = new employee("management", 10, 90000);
let hr = new employee("HR", 6, 60000);


Object.setPrototypeOf(programming, employee.prototype);
Object.setPrototypeOf(design, employee.prototype);
Object.setPrototypeOf(it, employee.prototype);
Object.setPrototypeOf(management, employee.prototype);
Object.setPrototypeOf(hr, employee.prototype);


function searchEmployee(employees) {
    return employees.filter(function (employee) {
        return employee.experienceYear > 5 &&
            employee.experienceYear >= 20 && employee.experienceYear <= 35 &&
            (employee.department === 'IT' || employee.department === 'Design');}).map(function (employee) {
        return {
            fullName: `${employee.generateID()}`,
            salary: employee.salary,
            department: employee.department,
            age: Math.floor(Math.random() * 16) + 20,
            id: employee.generateID()
        };
    });
}


let employees = [ design, it, management, hr];

let filteredEmployees = searchEmployee(employees);

console.log(filteredEmployees);


