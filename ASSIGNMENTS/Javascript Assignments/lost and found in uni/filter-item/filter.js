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
  }
];

let SearchFilter = document.querySelector("#Search-filter");
let status = document.querySelector("#status");
let showitem = document.querySelector(".second");


SearchFilter.value = localStorage.getItem("searchitem") || "";


renderItems();

SearchFilter.addEventListener("focus", () => {
  SearchFilter.value = "";
});


function renderItems() {

  let searchValue = SearchFilter.value.toLowerCase();
  let statusValue = status.value.toLowerCase();

  showitem.innerHTML = "";

  let filteredItems = carditems.filter((itemdata) => {

    let matchSearch =
      itemdata.title.toLowerCase().includes(searchValue);

    let matchStatus =
      statusValue === "" ||
      itemdata.status.toLowerCase() === statusValue;

    return matchSearch && matchStatus;
  });

  filteredItems.forEach((itemdata) => {
    showitem.innerHTML += `
      <div class="item-data" onclick="detailpage(${itemdata.id})">

        <p class="lost-logo"
          style="background-color:${itemdata.status === "Found" ? "green" : "red"}">
          ${itemdata.status}
        </p>

        <img src="${itemdata.image}" width="100%" height="250px"/>

        <div class="item-data-text">
          <p class="type">${itemdata.category}</p>
          <h3>${itemdata.title}</h3>
          <p>${itemdata.description}</p>
        </div>

        <hr />

        <div class="show-date">
          <span><i class="fa-solid fa-location-dot"></i>${itemdata.location}</span>
          <span><i class="fa-regular fa-calendar-days"></i>${itemdata.date}</span>
        </div>

      </div>
    `;
  });
}


SearchFilter.addEventListener("input", renderItems);
status.addEventListener("change", renderItems);


function detailpage(id) {
  window.location = "/detail-page/detail.html";
}