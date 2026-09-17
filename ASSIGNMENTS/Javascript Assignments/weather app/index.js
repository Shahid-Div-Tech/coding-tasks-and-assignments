let weather_info=document.querySelector(".weather-info")


function showdata(city, weatherData) {
  let cityname = document.querySelector(".city");
  let temp = document.querySelector(".temp");
  let desc = document.querySelector(".desc");
  let icon = document.querySelector(".icon");
  cityname.innerHTML = city.toUpperCase();
  temp.innerHTML = `${weatherData.current_weather.temperature} °C`;
  desc.innerHTML = checkdesc();
  icon.innerHTML = checkicon();
  function checkdesc() {
    if (weatherData.current_weather.temperature >= 35) {
      return "Very Hot 🔥 Sunny";
    } else if (weatherData.current_weather.temperature >= 25) {
      return " Warm ☀️ Sunny";
    } else if (weatherData.current_weather.temperature >= 15) {
      return "Normal ⛅ Cloudy ";
    } else if (weatherData.current_weather.temperature >= 5) {
      return "Cold 🌧️ Cool";
    } else {
      return "Very Cold ❄️ Snowy";
    }
  }

  function checkicon() {
    if (weatherData.current_weather.temperature >= 35) {
      return " 🔥 ";
    } else if (weatherData.current_weather.temperature >= 25) {
      return " ☀️ ";
    } else if (weatherData.current_weather.temperature >= 15) {
      return "⛅ ";
    } else if (weatherData.current_weather.temperature >= 5) {
      return " 🌧️ ";
    } else {
      return " ❄️ ";
    }
  }
}

async function getWeather(city) {
  
  try {
     weather_info.innerHTML = "Loading... ⏳";
    let geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
    );

    let geoData = await geoRes.json();

    let lat = geoData.results[0].latitude;
    let lon = geoData.results[0].longitude;

    let weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );
     
   
    let weatherData = await weatherRes.json();
    weather_info.innerHTML = `
     
      <div class="icon"></div>
      <h2 class="city"></h2>
      <h1 class="temp"></h1>
      <p class="desc"></p>`
    
    showdata(city, weatherData);
  } catch {
      weather_info.innerHTML = "";
    let Error = document.createElement("p");
    Error.innerHTML= "city not found";
    Error.style.color = "red";
    weather_info.appendChild(Error)

    search.addEventListener("focus", () => {
      Error.innerHTML = "";

    

    });

   

  }
}

let search = document.querySelector("#search");
let button = document.querySelector(".search");

button.addEventListener("click", () => {
  getWeather(search.value);
});

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather(search.value);
  }
});
