/* eslint-disable import/no-cycle */
import { DOMController } from './domcontroller';

/* eslint-disable no-console */
class APIController {
  static weatherTries = 0;

  static forecastTries = 0;

  static maxTries = 5;

  static apiKey = '00e8daf01cd1ddaced71911e08b02338';

  static init(user) {
    this.user = user;
    this.getCityWeather(user.defaultCity); // get the default city weather on page load
    this.getCityForecast(user.defaultCity);
  }

  static getCityWeather = async (cityName) => {
    const apiQuery = `https://api.openweathermap.org/data/2.5/weather?units=${this.user.preferredUnit}&q=${cityName}&appid=${this.apiKey}`;

    try {
      const result = await fetch(apiQuery);
      if (!result.ok) {
        throw new Error('Issue getting info from API');
      }
      const json = await result.json();
      DOMController.populateCurrentWeather(json);
    } catch (e) {
      this.weatherTries += 1;
      if (this.weatherTries < this.maxTries) {
        console.log('Failed to fetch weather, trying again with user\'s default city');
        this.getCityWeather(this.user.defaultCity); // perform some default fetch
      } else {
        this.weatherTries = 0;
        console.log(`Failed fetching weather ${this.maxTries} times, try again later`);
      }
    }
  };

  static getCityForecast = async (cityName) => {
    const apiQuery = `https://api.openweathermap.org/data/2.5/forecast?units=${this.user.preferredUnit}&q=${cityName}&appid=${this.apiKey}`;

    try {
      const result = await fetch(apiQuery);
      if (!result.ok) {
        throw new Error('Issue getting info from API');
      }
      const json = await result.json();
      DOMController.populateForecast(json);
    } catch (e) {
      this.forecastTries += 1;
      if (this.forecastTries < this.maxTries) {
        console.log('Failed to fetch forecast, trying again with user\'s default city');
        this.getCityForecast(this.user.defaultCity); // perform some default fetch
      } else {
        this.forecastTries = 0;
        console.log(`Failed fetching forecast ${this.maxTries} times, try again later`);
      }
    }
  };
}

// eslint-disable-next-line import/prefer-default-export
export { APIController };
