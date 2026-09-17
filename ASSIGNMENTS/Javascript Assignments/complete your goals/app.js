let radio = document.querySelectorAll(".radio");
let inptext = document.querySelectorAll(".inptext");
let showerror = document.querySelector("#showerror");

let completing = document.querySelector(".completing");
let raisebar = document.querySelector(".raisebartext");



let data = JSON.parse(localStorage.getItem("mydata")) || {
   first:{
      name:"",
      completed:false
   },

     second:{
      name:"",
      completed:false
   },

     third:{
      name:"",
      completed:false
   }
};

let goalsCount = Object.values(data).filter((value) => {
  return value.completed;
}).length;

completing.innerHTML = `${goalsCount}/3`;
completing.style.fontSize = "10px";
completing.style.padding = "4px";
completing.style.color = "white";
completing.style.width = `${(goalsCount / 3) * 100}%`;

if (goalsCount === 0) {
  raisebar.innerTEXT = "  Raise the bar by completing your goal";
} else if (goalsCount === 1) {
  raisebar.innerHTML = "Well begun is half done";
} else {
  raisebar.innerHTML = "Whao! you just compliting all the goals time for chill";
}

radio.forEach((radiobtn) => {
  radiobtn.addEventListener("click", () => {
    let check = [...inptext].every((input) => {
      return input.value;
    });

    if (check) {
      radiobtn.nextElementSibling.classList.toggle("completed");

      let checkid = radiobtn.nextElementSibling.id;

      

      data[checkid].completed = !data[checkid].completed;

      goalsCount = Object.values(data).filter((value) => {
        return value.completed;
      }).length;

      completing.style.width = `${(goalsCount / 3) * 100}%`;
      completing.style.fontSize = "10px";
      completing.style.padding = "4px";
      completing.innerHTML = `${goalsCount}/3`;
      completing.style.color = "white";

      if (goalsCount === 0) {
        raisebar.innerTEXT = "  Raise the bar by completing your goal";
      } else if (goalsCount === 1) {
        raisebar.innerHTML = "Well begun is half done";
      } else
        [
          (raisebar.innerHTML =
            "Whao! you just compliting all the goals time for chill"),
        ];

      localStorage.setItem("mydata", JSON.stringify(data));
    } else {
      showerror.innerHTML = "add all task";
      radiobtn.style.backgroundColor = "white";
    }
  });
});

inptext.forEach((input) => {
  input.addEventListener("focus", () => {
    showerror.innerHTML = "";
  });

  
    input.value = data[input.id].name;
  
  if ( data[input.id].completed) {
    input.classList.add("completed");
  } else {
    input.previousElementSibling.style.border = "1px solid green";
  }

  input.addEventListener("input", (e) => {
    if (data[input.id] && data[input.id].completed) {
      input.value = data[input.id].name;
      return;
    }
    data[input.id] = {
      name: input.value,
      completed:false
    };

    localStorage.setItem("mydata", JSON.stringify(data));
  });
});
