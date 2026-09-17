
let completegoal=document.querySelector(".completing")

let radio=document.querySelectorAll('.radio')

let texttask=document.querySelectorAll(".inptext")

let showerror=document.querySelector("#showerror")


let data=JSON.parse(localStorage.getItem("goals"))||{}

let goalscount=Object.values(data).filter((value)=>{
    return value.completed
}).length


radio.forEach((radios)=>{
   radios.addEventListener("click",(e)=>{

      let check = [...texttask].every((input) => {
        return input.value
    })

      if(check){

        radios.parentElement.classList.add("completed")

      
        const inputid=radios.nextElementSibling.id 
        if (!data[inputid]) {
       data[inputid] = {
       name: "",
       completed: false
       
   }
}

        data[inputid].completed=!data[inputid].completed
        goalscount=Object.values(data).filter((value)=>{
    return value.completed
}).length

completegoal.style.width=`${goalscount/3*100}%`
completegoal.style.color="white"
completegoal.style.fontSize="10px"
completegoal.style.padding="4px"
completegoal.innerHTML=`${goalscount}/3`

        localStorage.setItem("goals", JSON.stringify(data))
         
      }

      else{
      
          e.preventDefault()   
         showerror.innerHTML="plz complete all inputs"
         showerror.style.color="red"
      }


   })
})

texttask.forEach((input)=>{
    input.addEventListener("focus",()=>{
        showerror.innerHTML=""

        
    })
        if(data[input.id].completed){
            input.value=data[input.id].name
            input.disabled=true
           
        }

       if (data[input.id]) {
      input.value = data[input.id].name

      if (data[input.id].completed) {
         input.parentElement.classList.add(".completed")
      }
   }

    input.addEventListener("input",(e)=>{
     data[e.target.id] = {
        name:e.target.value,
        completed:false
     }
     localStorage.setItem("goals",JSON.stringify(data))
    })
})