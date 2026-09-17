let response :any ="42"

let numericlength=(response as string).length


type book={
    name:string
}

let bookString='{"name":"one thing"}'

let book1=(JSON.parse(bookString)) as book


console.log(book1)

const inputElement=document.getElementById("username") as HTMLInputElement



let value:any

value="chai"
value=[1,2,3]
value=2.5
value.toupperCase


let newValue:unknown

newValue="chai"
newValue=[1,2,3]
newValue=2.5
// newValue.toupperCase

if(typeof newValue ==="string"){ //type guard
    newValue.toUpperCase()
}


try{

}

catch(error:unknown){
    if(error instanceof Error){
        console.log(error.message)
    }

    console.log("error",error)
}


const data:unknown="chai or code "

const newData:string=data as string


type Role="admin" |"user"|"superAdmin"


function redirectBasedOnRole(role:Role):void{

    if(role==="admin"){
        console.log("redirect to admin")
        return 
    }
    
    if(role==="user"){
         console.log("redirect to user")
        return 
    }

    role;
}


function neverReturn():never{
    while(true){}
}