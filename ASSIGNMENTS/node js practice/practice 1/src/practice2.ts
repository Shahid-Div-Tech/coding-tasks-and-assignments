
interface students {
    name:string,
    age:number,
    email:string,
    isactive:boolean
}


class Student implements students{

  name:string
  age:number
  email:string
  isactive:boolean

  constructor(name:string,age:number,email:string,isactive:boolean){
   this.name=name
   this.age=age
   this.email=email
   this.isactive=isactive
  }

   displayStudent(){
    console.log(`name : ${this.name} , email : ${this.email},email : ${this.age}`)

}

studentactivation(){
    if(this.isactive){
        console.log("active student")
    }

    else{
        console.log("not active student")
    }
}

}


const student1:Student=new Student("shahid",22,"shahid@gmail.com",true)

student1.displayStudent()

student1.studentactivation()

