let age= +prompt("Enter your Age : ,0");

let hasAdmitCard= prompt("Student have a admit card : ,Yes or No");

let feePaid= prompt("fees is cleared : ,Yes or No");



let WarningCounts =0;



hasAdmitCard=hasAdmitCard.toLowerCase();
feePaid=feePaid.toLowerCase();

if(age>=18 && hasAdmitCard==="yes" && feePaid==="yes"){

    let lateMinutes= +prompt("How many minutes student is late :,0");
    let ruleBreak= +prompt("How many times student break a rules (3 allowed):0");

    if((lateMinutes>0 && lateMinutes<10 ) && (ruleBreak>0 && ruleBreak<3 )){

        ++WarningCounts
     document.write(`you are allowed with ${WarningCounts} warnings`)

    }
    else if(lateMinutes>10 && ruleBreak>=3){

        WarningCounts++
        WarningCounts++
        document.write(`your are not allowed  reason is ${WarningCounts} warnings:`);
    }

    else if(lateMinutes===0 && ruleBreak===0){
       
        document.write("most welcome I appreciate you :")

    }

    else{
        document.write("you are playig with system which is strictly not allowed :")
    }

}

else{
    if(age <18 ){
        document.write("you are not entered from your age: " );

       if(hasAdmitCard!=="yes"){
        document.write("you are not alllowed,you have not a admit card: ");

        if(feePaid!=="yes"){
        document.write("you are not alllowed,your fee is not paid: ");
        
    }
    }
    }


   else if(hasAdmitCard!=="yes"){
        document.write("you are not alllowed,you have not a admit card \n");

        if(feePaid!=="yes"){
        document.write("you are not alllowed,your fee is not paid \n");
    }
    }


    else if(feePaid!=="yes"){
        document.write("you are not alllowed,your fee is not paid :\n");
    }

    
 }
