// let text="my name is shahid ahmed and i am a student of smit and shahid and shahid"

// let input=prompt("enter a finding word ").toLowerCase();

// let input2=input.length;

// for(let i=0;i<text.length;i++){
//     let text2=text.slice(i,i+input2);
     
//     if(input===text2){

//         alert("found")

//          break;

    
//     }
      //  let change =prompt("what word  you replace").toLowerCase();
      //   let other= prompt("other name ").toLowerCase();


        // let regix = new RegExp(change, "gi");

//         let other="shahzaib";

//         let regix=/shahid/gi
//       let text1= text.replace(regix ,other)

// alert(text1)





// let text="my name is shahid ahmed and i am a student of smit "

// let findword=prompt("whos word you want found: ");

// let addword=prompt("which word you want to add :")

// for(let i=0;i<text.length;i++){
//   let text2=text.slice(i,i+findword.length);
//   if(findword.toLowerCase()===text2.toLowerCase()){
//     let text3=text.slice(0,i)+addword+text.slice(i+findword.length,text.length);

//     console.log(text3);
//     break;
//   }
// }



// let a=2.6;

// let b=3.7;

// let result=Math.ceil(Math.random()*25000)



// console.log(result);

// let date=new Date();

// let newdate=date.toLocaleTimeString();

// console.log(newdate)


// let day=["Sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

// for(let i=0;i<day.length;i++){

//   if(i===newDate){
//     console.log(day[i]);
//     break;
//   }
// }


// let arr=[45,12,89,23,67];

// let largest=arr[0];
// for(let i=1 ;i<arr.length;i++){
//  if(arr[i]>largest){
//   largest=arr[i];
//  }

//     }

//     alert("largest number is"+largest)
  


// let arr=[45,12,89,23,67];

// let smallest=arr[0];
// for(let i=1 ;i<arr.length;i++){
//  if(arr[i]<smallest){
//   smallest=arr[i];
//  }

//     }

//     alert("smallest number is"+smallest)
  

// let palendrome=prompt("enter any word i check it palindrome or not :").toLowerCase();
// let reverse;
// for(let i=0;i<palendrome.length-1;i++){
  
//   reverse+=palendrome[i]
// }

// if(palendrome===reverse){
//   alert("the word is palendrome "+palendrome);
// }

// else{
//   alert("the word is not palendrome  "+palendrome)
// }



let num=prompt("enter a number you want to add :")

let arr=[];

for(let i=0;i<num;i++){
  arr[i]=+prompt(" number");
}


let add=0;

for(let j=0;j<arr.length;j++){
 add =add+arr[j]
}

alert("the sum is "+add)