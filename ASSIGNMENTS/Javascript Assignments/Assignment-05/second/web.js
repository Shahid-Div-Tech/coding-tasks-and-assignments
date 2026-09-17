



function addCar(){
    let image = document.getElementById("image")
    let company_name = document.getElementById("company-name").value
    let car_name = document.getElementById("car-name").value
    let car_number = document.getElementById("car-number").value
    let model = document.getElementById("model").value

    let file = image.files[0]
    if(!file){
        alert("Please select car image")
        return
    }

    let section3 = document.getElementById("section3")

    let card = document.createElement("div")
    card.className = "details"

    let profile_pic = document.createElement("img")
    profile_pic.src = URL.createObjectURL(file)
    profile_pic.style.width = "100%"
    profile_pic.style.height="150px"
    profile_pic.style.borderRadius="8px"

    

    let companyNamerow=document.createElement("h2")
    companyNamerow.innerHTML='<h3>Company Name  &nbsp;: </h3>  &nbsp;<span>' + company_name + '</span>'

    companyNamerow.style.display="flex"
    companyNamerow.style.justifyContent="center"
    companyNamerow.style.alignItems="center"



     let CarNamerow=document.createElement("h2")
    CarNamerow.innerHTML='<h3>Car Name  &nbsp;: </h3> &nbsp;<span> '+car_name +'</span>'

    CarNamerow.style.display="flex"
    CarNamerow.style.justifyContent="center"
    CarNamerow.style.alignItems="center"
    

    let CarNumberrow=document.createElement("h2")
    CarNumberrow.innerHTML='<h3>Car Number:  &nbsp;</h3>  &nbsp;<span>'+car_number+'</span>'

    CarNumberrow.style.display="flex"
    CarNumberrow.style.justifyContent="center"
    CarNumberrow.style.alignItems="center"


       let modelrow=document.createElement("h2")
    modelrow.innerHTML='<h3>Car model &nbsp; :  &nbsp;</h3> <span> '+model +'</span>'

    modelrow.style.display="flex"
    modelrow.style.justifyContent="center"
    modelrow.style.alignItems="center"


    let button=document.createElement("button")
    button.innerHTML="Delete"
    button.className="delete-button"

    button.addEventListener("click", function () {
 
    this.parentElement.remove();
  
});
  
    card.appendChild(profile_pic)
    card.appendChild(companyNamerow)
    card.appendChild(document.createElement("hr"))
    card.appendChild(CarNamerow)
     card.appendChild(document.createElement("hr"))
    card.appendChild(CarNumberrow)
     card.appendChild(document.createElement("hr"))
    card.appendChild(modelrow)
    card.appendChild(button)

    section3.appendChild(card)



}




