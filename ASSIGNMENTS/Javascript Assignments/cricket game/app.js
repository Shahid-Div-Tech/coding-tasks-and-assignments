
let h1h=document.querySelector("h1")
let h2h=document.querySelector("h2")



let chose1=""
let chose2=""
let wontime=JSON.parse(localStorage.getItem("wontime")) ??0
let computerwontime=JSON.parse(localStorage.getItem("computerwontime"))??0
let reset=document.querySelector("#reset")



reset.addEventListener("click",()=>{
    console.log("clicked")
    localStorage.clear()
   wontime=0
   computerwontime=0
})



 h2h.innerHTML=`your won time is : ${wontime} computer won time is : ${computerwontime}`


function bat(){

   
    chose1="you have chose bat"
   let rendomnum=Math.floor(Math.random()*3)

    
  

if(rendomnum==0 ){
    chose2="computer have selected bat"
}
else if(rendomnum==1 ){
    chose2="computer have selected ball"
}
else if(rendomnum==2 ){
    chose2="computer have selected stump"
}


if(chose1=="you have chose bat" && chose2=="computer have selected bat"){
    h1h.innerHTML= ` "${chose1}" and "${chose2}" match has draw`
    
   
}

else if(chose1=="you have chose bat" && chose2=="computer have selected ball"){
        h1h.innerHTML=`"${chose1}" and "${chose2}" you won the match`
          wontime=wontime+1
          localStorage.setItem("wontime",wontime)
      h2h.innerHTML=`your won time is : ${wontime} computer won time is : ${computerwontime}`
}

else if(chose1=="you have chose bat" && chose2=="computer have selected stump"){
        h1h.innerHTML=` "${chose1}" and "${chose2}" computer won the match`
        localStorage.setItem("computerwontime",computerwontime)
           computerwontime=computerwontime+1
    h2h.innerHTML=`your won time is : ${wontime} computer won time is : ${computerwontime}`
}
    
}



function ball(){

        chose1="you have chose ball"
   let rendomnum=Math.floor(Math.random()*3)

    
  

if(rendomnum==0 ){
    chose2="computer have selected bat"
}
else if(rendomnum==1 ){
    chose2="computer have selected ball"
}
else if(rendomnum==2 ){
    chose2="computer have selected stump"
}


if(chose1=="you have chose ball" && chose2=="computer have selected ball"){
    h1h.innerHTML=` "${chose1}" and "${chose2}" match has draw`
}

else if(chose1=="you have chose ball" && chose2=="computer have selected bat"){
        h1h.innerHTML=` "${chose1}"  and " ${chose2} "computer won the match`
        localStorage.setItem("computerwontime",computerwontime)
          computerwontime=computerwontime+1
     h2h.innerHTML=`your won time is : ${wontime} computer won time is : ${computerwontime}`
}

else if(chose1=="you have chose ball" && chose2=="computer have selected stump"){
        h1h.innerHTML=` "${chose1} " and "${chose2}"you won the match`
        localStorage.setItem("wontime",wontime)
         wontime=wontime+1
      
       h2h.innerHTML=`your won time is : ${wontime} computer won time is : ${computerwontime}`
}
}


function stump(){


    chose1="you have chose stump"
   let rendomnum=Math.floor(Math.random()*3)

    
  

if(rendomnum==0 ){
    chose2="computer have selected bat"
}
else if(rendomnum==1 ){
    chose2="computer have selected ball"
}
else if(rendomnum==2 ){
    chose2="computer have selected stump"
}


if(chose1=="you have chose stump" && chose2=="computer have selected stump"){
    h1h.innerHTML=` "${chose1} " and " ${chose2}"match has draw`
}

else if(chose1=="you have chose stump" && chose2=="computer have selected bat"){
        h1h.innerHTML=` "${chose1} " and " ${chose2} " you won the match`
        localStorage.setItem("wontime",wontime)
           wontime=wontime+1
     h2h.innerHTML=`your won time is : ${wontime} computer won time is : ${computerwontime}`
}

else if(chose1=="you have chose stump" && chose2=="computer have selected ball"){
        h1h.innerHTML=` "${chose1} " and ${chose2} computer won the match`
        localStorage.setItem("computerwontime",computerwontime)
          computerwontime=computerwontime+1
     h2h.innerHTML=`your won time is : ${wontime} computer won time is : ${computerwontime}`
}


console.log(chose1)
console.log(chose2)

}