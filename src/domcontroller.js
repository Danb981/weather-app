/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { APIController } from './apicontroller';

class DOMController {
  static forecastIndex = 0;

  static init(user) {
    this.user = user;
    document.querySelector('.searchBtn').addEventListener('click', this.searchBtnClicked);
    document.querySelectorAll("[name='unit']").forEach((radio) => {
      radio.addEventListener('change', this.radioBtnChanged);
    });
    document.querySelector('.prev').addEventListener('click', this.prevBtnClicked);
    document.querySelector('.next').addEventListener('click', this.nextBtnClicked);
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

    let sunrisePeriod;
    let localSunriseTime = new Date((currentWeatherJson.sys.sunrise + currentWeatherJson.timezone) * 1000);
    let localSunriseHours = localSunriseTime.getUTCHours();
    if (localSunriseHours > 12) {
      localSunriseHours -= 12;
      sunrisePeriod = 'p.m';
    } else {
      sunrisePeriod = 'a.m';
    }
    let localSunriseMinutes = localSunriseTime.getUTCMinutes();
    if (localSunriseMinutes.toString().length === 1) {
      localSunriseMinutes = `${0}${localSunriseMinutes}`;
    }
    localSunriseTime = `${localSunriseHours}:${localSunriseMinutes}${sunrisePeriod}`;

    let sunsetPeriod;
    let localSunsetTime = new Date((currentWeatherJson.sys.sunset + currentWeatherJson.timezone) * 1000);
    let localSunsetHours = localSunsetTime.getUTCHours();
    if (localSunsetHours > 12) {
      localSunsetHours -= 12;
      sunsetPeriod = 'p.m';
    } else {
      sunsetPeriod = 'a.m';
    }
    let localSunsetMinutes = localSunsetTime.getUTCMinutes();
    if (localSunsetMinutes.toString().length === 1) {
      localSunsetMinutes = `${0}${localSunsetMinutes}`;
    }
    localSunsetTime = `${localSunsetHours}:${localSunsetMinutes}${sunsetPeriod}`;

    sunrise.innerHTML = `Sunrise<br />${localSunriseTime}`;
    sunset.innerHTML = `Sunset<br />${localSunsetTime}`;
  }

  static updateForecast(forecastJson) {
    this.forecastIndex = 0;
    this.lastForecastJson = forecastJson;
    this.populateForecast();
  }

  static populateForecast() {
    const forecastJson = DOMController.lastForecastJson;
    console.log(forecastJson);

    const threeHourInfoCards = document.querySelectorAll('.threeHourInfo');
    document.querySelectorAll('.cell').forEach((cell) => cell.remove());
    threeHourInfoCards.forEach((card, iteration) => {
      const cells = [];
      for (let x = 0; x < 6; x++) {
        cells[x] = document.createElement('span');
        cells[x].classList.add('cell');
        card.appendChild(cells[x]);
      }
      if (this.forecastIndex + iteration < 40) {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date((forecastJson.list[this.forecastIndex + iteration].dt + forecastJson.city.timezone) * 1000);
        const day = weekdays[date.getUTCDay()];
        let hour = date.getUTCHours();
        let period;
        if (hour > 12) {
          period = 'pm';
          hour -= 12;
        } else {
          period = 'am';
        }

        cells[0].innerHTML = `<h4>${day}<br />${hour}${period}`;

        const icon = document.createElement('img');
        icon.src = `http://openweathermap.org/img/wn/${forecastJson.list[this.forecastIndex + iteration].weather[0].icon}@2x.png`;
        cells[1].appendChild(icon);

        cells[2].innerHTML = `<h4>${Math.round(forecastJson.list[this.forecastIndex + iteration].main.temp)}\u00B0${this.user.preferredUnitAbbreviation}</h4>`;

        cells[3].innerHTML = `<h4>${Math.round(forecastJson.list[this.forecastIndex + iteration].pop * 100)}%</h4>`;

        let precip = '-';
        if (forecastJson.list[this.forecastIndex + iteration].snow) {
          precip = `${forecastJson.list[this.forecastIndex + iteration].snow['3h']}cm`;
        } else if (forecastJson.list[this.forecastIndex + iteration].rain) {
          precip = `${forecastJson.list[this.forecastIndex + iteration].rain['3h']}mm`;
        }
        cells[4].innerHTML = `<h4>${precip}</h4>`;

        cells[5].innerHTML = `<h4>${forecastJson.list[this.forecastIndex + iteration].wind.speed} ${this.user.preferredWindUnit}</h4>`;
      } else {
        cells[0].innerHTML = '<h4></h4>';
        cells[1].innerHTML = '<h4>-</h4>';
        cells[2].innerHTML = '<h4>-</h4>';
        cells[3].innerHTML = '<h4>-</h4>';
        cells[4].innerHTML = '<h4>-</h4>';
        cells[5].innerHTML = '<h4>-</h4>';
      }
    });
  }

  static searchBtnClicked() {
    const searchTerm = document.querySelector('.searchTerm').value;
    APIController.getCityWeather(searchTerm);
    APIController.getCityForecast(searchTerm);
  }

  static radioBtnChanged(e) {
    DOMController.user.changePreferredUnit(e.target.value);
    APIController.getCityWeather(document.querySelector('.cityName').innerText.split(' ')[0]);
    APIController.getCityForecast(document.querySelector('.cityName').innerText.split(' ')[0]);
  }

  static prevBtnClicked() {
    if (DOMController.forecastIndex !== 0) {
      DOMController.forecastIndex -= 7;
      DOMController.populateForecast();
    }
  }

  static nextBtnClicked() {
    if (DOMController.forecastIndex < 35) {
      DOMController.forecastIndex += 7;
      DOMController.populateForecast();
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { DOMController };
