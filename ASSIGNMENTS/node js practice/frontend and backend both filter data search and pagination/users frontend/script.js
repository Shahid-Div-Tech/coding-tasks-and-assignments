let sorted=""
document.getElementById("filterSelect").addEventListener("change",(e)=>{
    console.log(e.target.value)
   sorted= e.target.value
   displayUsers()
})

let limit=5
let skip=0

let searchInput
const usersPerPage = 5;

async function displayUsers() {

    const container = document.getElementById("usersContainer");



    let fetchdata=await fetch(`http://localhost:3000/api/v1/users/all?limit=${limit}&skip=${skip}&sort=${sorted}&userName=${searchInput}`)

    let users= await fetchdata.json()

    console.log(users)

    

    container.innerHTML = "";


    users.data.forEach((user) => {

        container.innerHTML += `
            <div class="user-card">

                <h3>${user.userName}</h3>

                <p>Email: ${user.email}</p>

                <p>Age: ${user.age}</p>

            </div>
        `;

    });

   
}

function searchUsers() {
 searchInput=document.getElementById("searchInput").value
 displayUsers()
 
}

function nextPage() {
   skip=skip+limit
   displayUsers()
}

function previousPage() {

    skip=skip-limit
    displayUsers()

}

displayUsers();

