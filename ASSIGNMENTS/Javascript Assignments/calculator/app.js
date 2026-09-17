

let clearr=document.getElementById("clear")
let butt1=document.getElementById("butt1")
let butt2=document.getElementById("butt2")
let buttonplus=document.getElementById("button-plus")
let butt3=document.getElementById("butt3")
let butt4=document.getElementById("butt4")
let finall=""
document.getElementById("input").value=finall

let boolean=false





function button1(){
    
    finall+="1"
    document.getElementById("input").value=finall
}

function button2(){
finall+="2"
document.getElementById("input").value=finall

}


function button3(){
   finall+="3"
    document.getElementById("input").value=finall
    

}

function button4(){
      
     finall+="4"
     document.getElementById("input").value=finall
}


function button_plus(){
      
     finall+="+"
     document.getElementById("input").value=finall
}

function button5(){
      
     finall+="5"
     document.getElementById("input").value=finall
}


function button6(){
      
     finall+="6"
     document.getElementById("input").value=finall
}

function button_minus(){
   
     finall+="-"
     document.getElementById("input").value=finall
}

function button_multiply(){
   
     finall+="*"
     document.getElementById("input").value=finall
}


function button7(){
   
     finall+="7"
     document.getElementById("input").value=finall
}


function button8(){
   
     finall+="8"
     document.getElementById("input").value=finall
}


function button_divide(){
   
     finall+="/"
     document.getElementById("input").value=finall
}


function button9(){
   finall+="9"
     document.getElementById("input").value=finall
 
}

function button0(){
     finall+="0"
     document.getElementById("input").value=finall
}

function buttondot(){
     finall+="."
     document.getElementById("input").value=finall
}


function equal(){

    

    let neww=eval(finall)
     document.getElementById("input").value=neww
  

}

function clearall(){
    finall=""
    document.getElementById("input").value=0
}




