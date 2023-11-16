const apiKey = "2c6e0756ef2ecbb7e44c4fabc1ca685e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    let response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    let data = await response.json();
    document.querySelector(".js-temp").innerHTML = `${Math.round(data.main.temp)} °C`;
    document.querySelector(".js-city-name").innerHTML = data.name;
    document.querySelector(".js-humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".js-wind-speed").innerHTML = `${data.wind.speed}km`;
    document.querySelector(".js-weather-icon").src = `./images/${data.weather[0].main}.png`;
    document.querySelector(".js-weather-type").innerHTML = `${data.weather[0].main}`;
}
checkWeather("Dhaka");

const inputValue = document.querySelector(".js-input-value");

const searchBtn = document.querySelector(".js-search-button");

searchBtn.addEventListener("click", () => {
    checkWeather(inputValue.value);
})

inputValue.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(inputValue.value);
    }
})




