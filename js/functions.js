import * as ELEMENTS from "./elements.js";
import { Http } from "./http.js";
import { WeatherData, weatherProxyHandler } from "./weather-data.js";

const {
  loadingText,
  weatherBox,
  weatherCity,
  weatherDescription,
  weatherTemperature,
} = ELEMENTS;

const APP_ID = "";

export const searchWeather = (input) => {
  const cityName = input.value.trim();
  if (cityName.length === 0) {
    alert("Please enter city name");
  }
  loadingText.style.display = "block";
  weatherBox.style.display = "none";
  Http.fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APP_ID}`
  )
    .then((response) => {
      const weatherData = new WeatherData(
        cityName,
        response.weather[0].description.toUpperCase()
      );
      const weatherProxy = new Proxy(weatherData, weatherProxyHandler);
      weatherProxy.temperature = response.main.temp;
      updatedWeather(weatherProxy);
    })
    .catch((error) => console.error(error));
};

export const updatedWeather = (weatherData) => {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;
  loadingText.style.display = "none";
  weatherBox.style.display = "block";
};
