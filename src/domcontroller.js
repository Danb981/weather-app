/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { APIController } from './apicontroller';

class DOMController {
  static init(user) {
    this.user = user;
    document.querySelector('.searchBtn').addEventListener('click', this.searchBtnClicked);
    document.querySelectorAll("[name='unit']").forEach((radio) => {
      radio.addEventListener('change', this.radioBtnChanged);
    });
  }

  static populateCurrentWeather(currentWeatherJson) {
    console.log(currentWeatherJson);
    // city name
    const cityName = document.querySelector('.cityName');
    // temperature
    const currentTemperature = document.querySelector('.currentTemperature');
    const feelsLikeTemperature = document.querySelector('.feelsLikeTemperature');
    // conditions
    const currentCondition = document.querySelector('.currentCondition');
    const currentConditionIcon = document.querySelector('.currentConditionIcon');
    // advanced
    const lowTemperature = document.querySelector('.lowTemperature');
    const windSpeed = document.querySelector('.windSpeed');
    const humidity = document.querySelector('.humidity');
    const sunrise = document.querySelector('.sunrise');
    const highTemperature = document.querySelector('.highTemperature');
    const windDirection = document.querySelector('.windDirection');
    const pressure = document.querySelector('.pressure');
    const sunset = document.querySelector('.sunset');

    cityName.innerText = `${currentWeatherJson.name}, ${currentWeatherJson.sys.country}`;

    currentTemperature.innerText = `${Math.round(currentWeatherJson.main.temp)}\u00B0${this.user.preferredUnitAbbreviation}`;
    feelsLikeTemperature.innerText = `Feels like ${Math.round(currentWeatherJson.main.feels_like)}\u00B0${this.user.preferredUnitAbbreviation}`;

    const weatherDescription = currentWeatherJson.weather[0].description.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // capitalize first letter of each word
    currentCondition.innerText = weatherDescription;
    currentConditionIcon.src = `http://openweathermap.org/img/wn/${currentWeatherJson.weather[0].icon}@2x.png`;

    lowTemperature.innerHTML = `Low<br />${Math.round(currentWeatherJson.main.temp_min)}\u00B0${this.user.preferredUnitAbbreviation}`;
    highTemperature.innerHTML = `High<br />${Math.round(currentWeatherJson.main.temp_max)}\u00B0${this.user.preferredUnitAbbreviation}`;

    windSpeed.innerHTML = `Wind Speed<br />${currentWeatherJson.wind.speed} ${this.user.preferredWindUnit}`;
    windDirection.innerHTML = `Wind Direction<br />${currentWeatherJson.wind.deg}\u00B0`;

    humidity.innerHTML = `Humidity<br />${currentWeatherJson.main.humidity}%`;
    pressure.innerHTML = `Pressure<br />${currentWeatherJson.main.pressure / 10} kPa`;

    const sunriseTime = new Date(currentWeatherJson.sys.sunrise * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
    const sunsetTime = new Date(currentWeatherJson.sys.sunset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
    sunrise.innerHTML = `Sunrise<br />${sunriseTime}`;
    sunset.innerHTML = `Sunset<br />${sunsetTime}`;
  }

  static populateForecast(forecastJson) {
    forecastJson.list.forEach((li) => {
      li.dt = new Date(li.dt * 1000);
    });
    console.log(forecastJson);
  }

  static searchBtnClicked() {
    const searchTerm = document.querySelector('.searchTerm').value;
    APIController.getCityWeather(searchTerm);
  }

  static radioBtnChanged(e) {
    DOMController.user.changePreferredUnit(e.target.value);
    APIController.getCityWeather(document.querySelector('.cityName').innerText.split(' ')[0]);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { DOMController };
