
let items=["biryani","pizza"]

let totalprice=0

let finalitems=[]

let finalprizes=[]




// Price table



function restitems(food){

     let userwant=prompt("what do you want to eat")
      
   for(let i=0;i<food.length;i++){
    if(food[i]===userwant){

        
      
        restallitems()

}

  

   }
}

restitems(items)





function restallitems(){
    let items=+prompt("enter your items \n 1:chicken \n   2:beef");
  
    

    switch(items){
        case 1:
            
            finalitems.push("chicken  ")
            finalprizes.push(500)
             break

         case 2:
               
            finalitems.push("beef  ")
            finalprizes.push(600)
    
            break
    }

    

     size()
}



function size(){

    let s=+prompt("enter a sizes \n  1:small \n 2:medium \n 3:large ");
    switch(s){
        case 1:
            
            finalitems.push("small  ")
             
              break

          case 2:
            
             finalitems.push("medium  ")
             finalprizes.push(700)
              
              break
            
       case 3:
              
             finalitems.push("large  ")
             finalprizes.push(800)
             
            break   
}


flavour();

}


function flavour(){
    let f=+prompt("enter your flavour\n 1:fatija \n 2:seekh \n 3:chickenTikka");

    switch(f){
    
        case 1:
            
           finalitems.push("fatija  ")
           finalprizes.push(800)
          
           
            break   
            
            case 2:
            
            finalitems.push("seekh  ")
            finalprizes.push(900)
            break    


            case 3:
          
             finalitems.push("chickentikka  ")
             finalprizes.push(1000)
            break    
    }

    totalcalculation();

    

   
}









function totalcalculation(){
    
   totalprice=0;

    for(let i=0; i<finalprizes.length; i++){
       totalprice+=finalprizes[i]
    }

    alert(`1: flavour : ${finalitems[2]} \n 2: size : ${finalitems[1]} \n 3: quality : ${finalitems[0]} \n Total Price Rs : ${totalprice}`)
}

  