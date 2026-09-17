"use strict";
// type user={
//     id:number,
//     name:string,
//     email?:string
// }
Object.defineProperty(exports, "__esModule", { value: true });
const allEmlopyee = [
    {
        id: 1,
        name: "shahid",
        salary: 23000,
        department: "data Science"
    },
    {
        id: 2,
        name: "ismail",
        salary: 23000,
    },
    {
        id: 3,
        name: "shahzaib",
        salary: 23000,
    },
    {
        id: 4,
        name: "mehmood",
        salary: 23000,
        department: "App dev"
    },
    {
        id: 5,
        name: "huzaifa",
        salary: 23000,
    },
];
function findEmployee(value, bonus) {
    if (typeof value === "number") {
        let result = allEmlopyee.filter((employee) => {
            if (employee.id === value) {
                if (typeof bonus === "number") {
                    employee.salary += bonus;
                    return employee.id === value;
                }
                if (typeof bonus === "string") {
                    employee.salary += bonuscalculator(Number(bonus), employee.salary);
                    return employee.id === value;
                }
            }
        });
        console.log(result);
    }
}
// function fatherfindEmloyee(employees:employee[]){
//      employees.forEach((employe)=>{
//         findEmployee(employe.id)
//      });
// }
// fatherfindEmloyee(allEmlopyee)
findEmployee(3, "10");
function bonuscalculator(bonus, salary) {
    return salary * bonus / 100;
}
//# sourceMappingURL=practice1.js.map