
let boolean=false;

function night(){
    let sky=document.getElementById("sky")
    let grass=document.getElementById("grass")
    let hut=document.getElementById("hut")
    let dog=document.getElementById("dog")
    let tree=document.getElementById("tree")
    let moon=document.getElementById("moon")
    let birds=document.getElementById("birds")
    let water=document.getElementById("water")


    if(boolean===false){
    dog.style.transform="translateX(800px)"
    moon.style.transform="translateX(1000px)"
    birds.style.transform="translateX(1000px)"

    setTimeout(()=>{
        sky.style.filter="brightness(10%)"
        grass.style.filter="brightness(15%)"
        hut.style.filter="brightness(30%)"
        tree.style.filter="brightness(10%)"
        moon.style.filter="brightness(100%)"
        birds.style.filter="brightness(10%)"
        water.style.filter="brightness(10%)"
    },2000)
     boolean=true;
}

else{
   dog.style.transform = "scaleX(-1) translateX(70px)";
     birds.style.transform="translateX(200px)"
   

    moon.style.transform="translateX(-1500px)"
    moon.style.transition="10s"
  

    setTimeout(()=>{
        sky.style.filter="brightness(100%)"
        grass.style.filter="brightness(100%)"
        hut.style.filter="brightness(100%)"
        tree.style.filter="brightness(100%)"
        moon.style.filter="brightness(100%)"
        birds.style.filter="brightness(200%)"
             water.style.filter="brightness(100%)"
    },2000)
     boolean=false;

}

}