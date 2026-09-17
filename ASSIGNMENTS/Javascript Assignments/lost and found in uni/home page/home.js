const carditems = [
  {
    id: 1,
    status: "Lost",
    category: "Electronics",
    title: "MacBook Pro",
    description: "Silver MacBook Pro lost in library.",
    location: "Main Library",
    date: "1/8/2023",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu987R-Az_8I-0icZ5EHJsz54l7d6IyH8dMQ&s",
    reporter: {
      name: "Ali Hassan",
      email: "ali.hassan1@gmail.com"
    }
  },
  {
    id: 2,
    status: "Found",
    category: "Clothing",
    title: "Black Hoodie",
    description: "Black hoodie found in cafeteria.",
    location: "University Cafeteria",
    date: "2/8/2023",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    reporter: {
      name: "Sara Khan",
      email: "sara.khan2@gmail.com"
    }
  },
  {
    id: 3,
    status: "Lost",
    category: "Accessories",
    title: "Smart Watch",
    description: "Smart watch lost near sports ground.",
    location: "Sports Ground",
    date: "3/8/2023",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    reporter: {
      name: "Usman Ali",
      email: "usman.ali3@gmail.com"
    }
  },
  {
    id: 4,
    status: "Found",
    category: "Books",
    title: "Physics Notes",
    description: "Notes found in classroom B12.",
    location: "Classroom B12",
    date: "4/8/2023",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    reporter: {
      name: "Ayesha Noor",
      email: "ayesha.noor4@gmail.com"
    }
  },
  {
    id: 5,
    status: "Lost",
    category: "Electronics",
    title: "Earbuds",
    description: "White earbuds lost in bus area.",
    location: "Bus Parking",
    date: "5/8/2023",
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5",
    reporter: {
      name: "Hassan Raza",
      email: "hassan.raza5@gmail.com"
    }
  },
  {
    id: 6,
    status: "Found",
    category: "Stationery",
    title: "Backpack",
    description: "Blue backpack found near lab.",
    location: "Computer Lab",
    date: "6/8/2023",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    reporter: {
      name: "Fatima Zahra",
      email: "fatima.zahra6@gmail.com"
    }
  },
  {
    id: 7,
    status: "Lost",
    category: "Sports",
    title: "Football",
    description: "Football lost in ground.",
    location: "Sports Ground",
    date: "7/8/2023",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    reporter: {
      name: "Bilal Ahmed",
      email: "bilal.ahmed7@gmail.com"
    }
  },
  {
    id: 8,
    status: "Found",
    category: "Accessories",
    title: "Sunglasses",
    description: "Sunglasses found near gate.",
    location: "Main Gate",
    date: "8/8/2023",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0",
    reporter: {
      name: "Zainab Ali",
      email: "zainab.ali8@gmail.com"
    }
  },
  {
    id: 9,
    status: "Lost",
    category: "Electronics",
    title: "Phone",
    description: "Mobile phone lost in cafeteria.",
    location: "Cafeteria",
    date: "9/8/2023",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    reporter: {
      name: "Hamza Khan",
      email: "hamza.khan9@gmail.com"
    }
  },
  {
    id: 10,
    status: "Found",
    category: "Books",
    title: "Math Book",
    description: "Book found in library shelf.",
    location: "Library",
    date: "10/8/2023",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    reporter: {
      name: "Mariam Shah",
      email: "mariam.shah10@gmail.com"
    }
  },
  {
    id: 11,
    status: "Lost",
    category: "Clothing",
    title: "Jacket",
    description: "Jacket lost in hostel.",
    location: "Hostel",
    date: "11/8/2023",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    reporter: {
      name: "Daniyal Sheikh",
      email: "daniyal.sheikh11@gmail.com"
    }
  },
  {
    id: 12,
    status: "Found",
    category: "Electronics",
    title: "Headphones",
    description: "Headphones found in lab.",
    location: "Computer Lab",
    date: "12/8/2023",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    reporter: {
      name: "Laiba Ahmed",
      email: "laiba.ahmed12@gmail.com"
    }
  },
  {
    id: 13,
    status: "Lost",
    category: "Accessories",
    title: "Wallet",
    description: "Wallet lost near parking.",
    location: "Parking Area",
    date: "13/8/2023",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    reporter: {
      name: "Saad Malik",
      email: "saad.malik13@gmail.com"
    }
  },
  {
    id: 14,
    status: "Found",
    category: "Stationery",
    title: "Pen Box",
    description: "Pen box found in classroom.",
    location: "Classroom A1",
    date: "14/8/2023",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    reporter: {
      name: "Hina Qureshi",
      email: "hina.qureshi14@gmail.com"
    }
  },
  {
    id: 15,
    status: "Lost",
    category: "Sports",
    title: "Cricket Bat",
    description: "Bat lost in sports ground.",
    location: "Sports Ground",
    date: "15/8/2023",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JBiNgWPEuZ9s9FpVII4kTHcqLU52PtmjAQ&s",
    reporter: {
      name: "Talha Javed",
      email: "talha.javed15@gmail.com"
    }
  }
];







let logout = document.querySelector(".logout");



logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  localStorage.removeItem("username");
window.location = "../index.html";
});


window.addEventListener("load", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "../index.html";
  }
});

let userName=document.querySelector("#username");

userName.innerHTML=`${localStorage.getItem("username") || "hello"} 👤`


let searchButton=document.querySelector("#search-button")
  let searchItem=document.querySelector("#search-items").value

searchButton.addEventListener("click",()=>{
  let searchItem=document.querySelector("#search-items").value

 localStorage.setItem("searchitem",searchItem)
 window.location="/filter-item/filter.html"

})
searchItem=""

let viewItem=document.querySelector(".view-item").addEventListener("click",()=>{
  localStorage.setItem("searchitem",searchItem)})


 let items = document.querySelectorAll(".item1");

items.forEach((item) => {
    item.addEventListener("click", () => {
        window.location = "/filter-item/filter.html";
        let text = item.querySelector("p").innerText;
         localStorage.setItem("searchitem",text)
    });
});



let showitem=document.querySelector(".second")

let data=0

carditems.filter((itemdata)=>{
  data++
if(data<=6){
  
  showitem.innerHTML+=`
                    <div class="item-data" onclick="detailpage(${itemdata.id})">
            <p class="lost-logo" style="background-color: ${itemdata.status === "Found" ? "green" : "red"}">
  ${itemdata.status}
</p>
            <img
              src="${itemdata.image}"
              alt=""
              width="100%" height="250px"/>
            <div class="item-data-text">
              <p class="type">${itemdata.category}</p>

              <h3>${itemdata.title}</h3>

              <p>
                ${itemdata.description}
              </p>
            </div>

            <hr />

            <div class="show-date">
              <span
                ><i class="fa-solid fa-location-dot"></i>${itemdata.location}</span
              >&nbsp;&nbsp; &nbsp;<span
                ><i class="fa-regular fa-calendar-days"></i>${itemdata.date}</span
              >
         </div>
            
          </div>
           


        </div>
  `
}
})


  
function detailpage(itemdataID){
  window.location="/detail-page/detail.html"
}