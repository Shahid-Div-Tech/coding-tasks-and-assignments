let text=document.querySelector("#text")
let date=document.querySelector("#date")
let add=document.querySelector("#Add")
let main=document.getElementById("main")



let items=[]



add.addEventListener("click",function(){

    let h1=document.createElement("h3")
let h2=document.createElement("h3")
let div=document.createElement("div")
let button=document.createElement("button")

    let textvalue=text.value
let datevalue=date.value


items.push({text:textvalue,date:datevalue})




h1.className="h1"
h2.className="h2"
button.className="delete"
button.innerHTML="Delete"
div.className="child"

main.appendChild(div)
div.append(h1 ,h2,button)



for(let i=0;i<items.length;i++){
    h1.innerHTML=items[i].text
    h2.innerHTML=items[i].date
     

  
}


button.addEventListener("click",function(){
    this.parentNode.remove()
})

console.log(items)


}
)



