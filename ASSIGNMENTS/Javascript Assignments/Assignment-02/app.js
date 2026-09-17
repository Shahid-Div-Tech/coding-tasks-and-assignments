let array = ["junk  ", "crew  ", "tools  ", "error  ", "fuel  ", "noise  ","food ", "broken panel  ", "water  ", "trash  ", "supplies   ", "oxygen  ", "spare parts  ", "debris  ", "lab equipment  "]

 let fixedStation =array.slice(1,10);

console.log(fixedStation)

 array.shift();

 console.log(array)


 array.splice(2,1);

 console.log(array)

  array.splice(3,1);

  console.log(array)

    array.splice(4,1);

    console.log(array);

    fixedStation.pop();

    console.log(fixedStation);

    

    alert("output of fixedstation  : "+fixedStation)



    array.splice(5,3);
    array.splice(6,1);
    array.unshift("trash  ")
    array.unshift("supplies  ");
    array.unshift("oxygen  ");
    array.unshift("debrish  ");


     alert("output of array : "+array);