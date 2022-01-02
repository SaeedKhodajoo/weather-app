const apiKey = '0a4490955591c42994081c913facb10c';


const fetchWeather = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    const data = await response.json()
    const cityName = document.querySelector('.city');
    cityName.innerHTML = `Weather in ${data.name}`;
    const temp = document.querySelector('.temp');
    temp.innerHTML = `${data.main.temp}°C`;
    const icon = document.querySelector('.icon');
    const desc = document.querySelector('.description');
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    desc.innerHTML = `${data.weather[0].description}`;
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    humidity.innerHTML = `Humidity : ${data.main.humidity}%`
    wind.innerHTML = `Wind Speed is ${data.wind.speed}Km/h`;
    const weather = document.querySelector('.weather').classList.remove('loading')
}

fetchWeather('tehran');

const button = document.querySelector('.search-btn');
const input = document.querySelector('.search-bar');

button.addEventListener('click', () => {
    const city = input.value;
    fetchWeather(city);
})

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        fetchWeather(input.value)
    }
})
