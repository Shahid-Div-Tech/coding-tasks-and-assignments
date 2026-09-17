// type user={
//     id:number,
//     name:string,
//     email?:string
// }



// const allUsers: user[] = [
//   {
//     id: 23,
//     name: "khan",
//     email: "shahid@gmail.com",
//   },
//   {
//     id: 24,
//     name: "Ali",
//   },
//   {
//     id: 25,
//     name: "Ahmed",
//     email: "ahmed@gmail.com",
//   },
// ];
// function printUsers(users:user[]){
//     users.forEach((user) => {
//         if(user.email){
//             console.log(`user id is ${user.id} and name is ${user.name} and email is ${user.email}`)
//         }
//         else{
//             console.log("invalid users")
//         }
//     })
// }


// printUsers(allUsers)


type employee={
    id:number,
    name:string,
    salary:number,
    department?:string
}


const allEmlopyee:employee[]=[
    {
        id:1,
        name:"shahid",
        salary:23000,
        department:"data Science"
    },

      {
        id:2,
        name:"ismail",
        salary:23000,
       
    },


    
      {
        id:3,
        name:"shahzaib",
        salary:23000,
       
    },

    
      {
        id:4,
        name:"mehmood",
        salary:23000,
        department:"App dev"
    },

    
      {
        id:5,
        name:"huzaifa",
        salary:23000,
        
    },

]

function findEmployee(value:number|string,bonus:number|string){
   


    if(typeof value==="number"){
     let  result= allEmlopyee.filter((employee)=>{

     
          
          if(employee.id===value){
               if(typeof bonus==="number"){
            employee.salary+=bonus

            return employee.id===value
        }

        if(typeof bonus==="string"){
          employee.salary+=bonuscalculator(Number(bonus),employee.salary)
          return employee.id===value
        }
          
            
     } })

        console.log(result)
    }
      
    
}


// function fatherfindEmloyee(employees:employee[]){
//      employees.forEach((employe)=>{
//         findEmployee(employe.id)
//      });
// }

// fatherfindEmloyee(allEmlopyee)


findEmployee(3,"10")


function bonuscalculator(bonus:number,salary:number): number {


    return salary*bonus/100

   
}


type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";