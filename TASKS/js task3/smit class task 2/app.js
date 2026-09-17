
function generateCard() {
let image=document.getElementById("image").value
let name=document.getElementById("name").value
let fathername=document.getElementById("fathername").value
let cnic=document.getElementById("cnic").value
let course=document.getElementById("course").value




let card_main_container=document.getElementById("card_main_container")

let card=document.createElement("div")
let img=document.createElement("img")
let profileimage=document.createElement("img")
let h1name=document.createElement("p")
let h1fname=document.createElement("p")
let h2cnic=document.createElement("p")
let h2course=document.createElement("p")



card.id="card-1"
card.className="card"

img.width="150"

profileimage.className="profile_image"

 card_main_container.appendChild(card)


 let namerow=document.createElement("p")

 namerow.innerHTML="<h3>Name :</h3>"+name


 
 let fnamerow=document.createElement("p")

 fnamerow.innerHTML="<h3>father Name :</h3>"+fathername


  let cnicrow=document.createElement("p")

 cnicrow.innerHTML="<h3>CNIC :</h3>"+cnic

 
  let courserow=document.createElement("p")

 courserow.innerHTML="<h3>Course :</h3>"+course




img.src="https://lms.saylanimit.com/logo.png"
h1name.innerHTML=name
h1fname.innerHTML=fathername
h2cnic.innerHTML=cnic
h2course.innerHTML=course
profileimage.src=image

card.appendChild(img)

card.appendChild(profileimage)

card.appendChild(namerow)
card.appendChild(document.createElement("hr"))
card.appendChild(fnamerow)
card.appendChild(document.createElement("hr"))

card.appendChild(cnicrow)
card.appendChild(document.createElement("hr"))
card.appendChild(courserow)


}


