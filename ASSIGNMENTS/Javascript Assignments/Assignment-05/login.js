

function login(){
    let id=document.getElementById("user-Id").value
    let passward=document.getElementById("passward").value


    id==="admin" && passward==="admin@11"? window.location.href = "second/second.html" 
    :alert("enter correct passward or ID")


}