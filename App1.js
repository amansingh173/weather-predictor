const input = document.querySelector(".cityinput");
const button = document.querySelector(".searchBtn");
const weatherContainer = document.querySelector(".weather");

button.addEventListener("click", async () => {
  const city = input.value;
 
    const API_KEY = "dd372a0079e5d3e2e9773cc09693f12c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response =  await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector(".weather").innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
});
