/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apicontroller.js":
/*!******************************!*\
  !*** ./src/apicontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIController\": () => (/* binding */ APIController)\n/* harmony export */ });\n/* harmony import */ var _domcontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domcontroller */ \"./src/domcontroller.js\");\n/* eslint-disable import/no-cycle */\n\n\n/* eslint-disable no-console */\nclass APIController {\n  static weatherTries = 0;\n\n  static forecastTries = 0;\n\n  static maxTries = 5;\n\n  static apiKey = '00e8daf01cd1ddaced71911e08b02338';\n\n  static init(user) {\n    this.user = user;\n    this.getCityWeather(this.user.defaultCity);\n    this.getCityForecast(this.user.defaultCity);\n  }\n\n  static getCityWeather = async (cityName) => {\n    const apiQuery = `https://api.openweathermap.org/data/2.5/weather?units=${this.user.preferredUnit}&q=${cityName}&appid=${this.apiKey}`;\n\n    try {\n      const result = await fetch(apiQuery);\n      if (!result.ok) {\n        throw new Error('Issue getting info from API');\n      }\n      const json = await result.json();\n      _domcontroller__WEBPACK_IMPORTED_MODULE_0__.DOMController.populateCurrentWeather(json);\n    } catch (e) {\n      this.weatherTries += 1;\n      if (this.weatherTries < this.maxTries) {\n        console.log('Failed to fetch weather, trying again with user\\'s default city');\n        this.getCityWeather(this.user.defaultCity); // perform some default fetch\n      } else {\n        this.weatherTries = 0;\n        console.log(`Failed fetching weather ${this.maxTries} times, try again later`);\n      }\n    }\n  };\n\n  static getCityForecast = async (cityName) => {\n    const apiQuery = `https://api.openweathermap.org/data/2.5/forecast?units=${this.user.preferredUnit}&q=${cityName}&appid=${this.apiKey}`;\n\n    try {\n      const result = await fetch(apiQuery);\n      if (!result.ok) {\n        throw new Error('Issue getting info from API');\n      }\n      const json = await result.json();\n      _domcontroller__WEBPACK_IMPORTED_MODULE_0__.DOMController.updateForecast(json);\n    } catch (e) {\n      this.forecastTries += 1;\n      if (this.forecastTries < this.maxTries) {\n        console.log('Failed to fetch forecast, trying again with user\\'s default city');\n        this.getCityForecast(this.user.defaultCity); // perform some default fetch\n      } else {\n        this.forecastTries = 0;\n        console.log(`Failed fetching forecast ${this.maxTries} times, try again later`);\n      }\n    }\n  };\n}\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://weather-app/./src/apicontroller.js?");

/***/ }),

/***/ "./src/domcontroller.js":
/*!******************************!*\
  !*** ./src/domcontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMController\": () => (/* binding */ DOMController)\n/* harmony export */ });\n/* harmony import */ var _apicontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apicontroller */ \"./src/apicontroller.js\");\n/* eslint-disable max-len */\n/* eslint-disable no-console */\n/* eslint-disable import/no-cycle */\n\n\nclass DOMController {\n  static forecastIndex = 0;\n\n  static init(user) {\n    this.user = user;\n    document.querySelector('.searchBtn').addEventListener('click', this.searchBtnClicked);\n    document.querySelectorAll(\"[name='unit']\").forEach((radio) => {\n      radio.addEventListener('change', this.radioBtnChanged);\n    });\n    document.querySelector('.prev').addEventListener('click', this.prevBtnClicked);\n    document.querySelector('.next').addEventListener('click', this.nextBtnClicked);\n  }\n\n  static populateCurrentWeather(currentWeatherJson) {\n    console.log(currentWeatherJson);\n    // city name\n    const cityName = document.querySelector('.cityName');\n    // temperature\n    const currentTemperature = document.querySelector('.currentTemperature');\n    const feelsLikeTemperature = document.querySelector('.feelsLikeTemperature');\n    // conditions\n    const currentCondition = document.querySelector('.currentCondition');\n    const currentConditionIcon = document.querySelector('.currentConditionIcon');\n    // advanced\n    const lowTemperature = document.querySelector('.lowTemperature');\n    const windSpeed = document.querySelector('.windSpeed');\n    const humidity = document.querySelector('.humidity');\n    const sunrise = document.querySelector('.sunrise');\n    const highTemperature = document.querySelector('.highTemperature');\n    const windDirection = document.querySelector('.windDirection');\n    const pressure = document.querySelector('.pressure');\n    const sunset = document.querySelector('.sunset');\n\n    cityName.innerText = `${currentWeatherJson.name}, ${currentWeatherJson.sys.country}`;\n\n    currentTemperature.innerText = `${Math.round(currentWeatherJson.main.temp)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n    feelsLikeTemperature.innerText = `Feels like ${Math.round(currentWeatherJson.main.feels_like)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n\n    const weatherDescription = currentWeatherJson.weather[0].description.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // capitalize first letter of each word\n    currentCondition.innerText = weatherDescription;\n    currentConditionIcon.src = `http://openweathermap.org/img/wn/${currentWeatherJson.weather[0].icon}@2x.png`;\n\n    lowTemperature.innerHTML = `Low<br />${Math.round(currentWeatherJson.main.temp_min)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n    highTemperature.innerHTML = `High<br />${Math.round(currentWeatherJson.main.temp_max)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n\n    windSpeed.innerHTML = `Wind Speed<br />${currentWeatherJson.wind.speed} ${this.user.preferredWindUnit}`;\n    windDirection.innerHTML = `Wind Direction<br />${currentWeatherJson.wind.deg}\\u00B0`;\n\n    humidity.innerHTML = `Humidity<br />${currentWeatherJson.main.humidity}%`;\n    pressure.innerHTML = `Pressure<br />${currentWeatherJson.main.pressure / 10} kPa`;\n\n    let sunrisePeriod;\n    let localSunriseTime = new Date((currentWeatherJson.sys.sunrise + currentWeatherJson.timezone) * 1000);\n    let localSunriseHours = localSunriseTime.getUTCHours();\n    if (localSunriseHours > 12) {\n      localSunriseHours -= 12;\n      sunrisePeriod = 'p.m';\n    } else {\n      sunrisePeriod = 'a.m';\n    }\n    let localSunriseMinutes = localSunriseTime.getUTCMinutes();\n    if (localSunriseMinutes.toString().length === 1) {\n      localSunriseMinutes = `${0}${localSunriseMinutes}`;\n    }\n    localSunriseTime = `${localSunriseHours}:${localSunriseMinutes}${sunrisePeriod}`;\n\n    let sunsetPeriod;\n    let localSunsetTime = new Date((currentWeatherJson.sys.sunset + currentWeatherJson.timezone) * 1000);\n    let localSunsetHours = localSunsetTime.getUTCHours();\n    if (localSunsetHours > 12) {\n      localSunsetHours -= 12;\n      sunsetPeriod = 'p.m';\n    } else {\n      sunsetPeriod = 'a.m';\n    }\n    let localSunsetMinutes = localSunsetTime.getUTCMinutes();\n    if (localSunsetMinutes.toString().length === 1) {\n      localSunsetMinutes = `${0}${localSunsetMinutes}`;\n    }\n    localSunsetTime = `${localSunsetHours}:${localSunsetMinutes}${sunsetPeriod}`;\n\n    sunrise.innerHTML = `Sunrise<br />${localSunriseTime}`;\n    sunset.innerHTML = `Sunset<br />${localSunsetTime}`;\n  }\n\n  static updateForecast(forecastJson) {\n    this.forecastIndex = 0;\n    this.lastForecastJson = forecastJson;\n    this.populateForecast();\n  }\n\n  static populateForecast() {\n    const forecastJson = DOMController.lastForecastJson;\n    console.log(forecastJson);\n\n    const threeHourInfoCards = document.querySelectorAll('.threeHourInfo');\n    document.querySelectorAll('.cell').forEach((cell) => cell.remove());\n    threeHourInfoCards.forEach((card, iteration) => {\n      const cells = [];\n      for (let x = 0; x < 6; x++) {\n        cells[x] = document.createElement('span');\n        cells[x].classList.add('cell');\n        card.appendChild(cells[x]);\n      }\n      if (this.forecastIndex + iteration < 40) {\n        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n        const date = new Date((forecastJson.list[this.forecastIndex + iteration].dt + forecastJson.city.timezone) * 1000);\n        const day = weekdays[date.getUTCDay()];\n        let hour = date.getUTCHours();\n        let period;\n        if (hour > 12) {\n          period = 'pm';\n          hour -= 12;\n        } else {\n          period = 'am';\n        }\n\n        cells[0].innerHTML = `<h4>${day}<br />${hour}${period}`;\n\n        const icon = document.createElement('img');\n        icon.src = `http://openweathermap.org/img/wn/${forecastJson.list[this.forecastIndex + iteration].weather[0].icon}@2x.png`;\n        cells[1].appendChild(icon);\n\n        cells[2].innerHTML = `<h4>${Math.round(forecastJson.list[this.forecastIndex + iteration].main.temp)}\\u00B0${this.user.preferredUnitAbbreviation}</h4>`;\n\n        cells[3].innerHTML = `<h4>${Math.round(forecastJson.list[this.forecastIndex + iteration].pop * 100)}%</h4>`;\n\n        let precip = '-';\n        if (forecastJson.list[this.forecastIndex + iteration].snow) {\n          precip = `${forecastJson.list[this.forecastIndex + iteration].snow['3h']}cm`;\n        } else if (forecastJson.list[this.forecastIndex + iteration].rain) {\n          precip = `${forecastJson.list[this.forecastIndex + iteration].rain['3h']}mm`;\n        }\n        cells[4].innerHTML = `<h4>${precip}</h4>`;\n\n        cells[5].innerHTML = `<h4>${forecastJson.list[this.forecastIndex + iteration].wind.speed} ${this.user.preferredWindUnit}</h4>`;\n      } else {\n        cells[0].innerHTML = '<h4></h4>';\n        cells[1].innerHTML = '<h4>-</h4>';\n        cells[2].innerHTML = '<h4>-</h4>';\n        cells[3].innerHTML = '<h4>-</h4>';\n        cells[4].innerHTML = '<h4>-</h4>';\n        cells[5].innerHTML = '<h4>-</h4>';\n      }\n    });\n  }\n\n  static searchBtnClicked() {\n    const searchTerm = document.querySelector('.searchTerm').value;\n    _apicontroller__WEBPACK_IMPORTED_MODULE_0__.APIController.getCityWeather(searchTerm);\n    _apicontroller__WEBPACK_IMPORTED_MODULE_0__.APIController.getCityForecast(searchTerm);\n  }\n\n  static radioBtnChanged(e) {\n    DOMController.user.changePreferredUnit(e.target.value);\n    _apicontroller__WEBPACK_IMPORTED_MODULE_0__.APIController.getCityWeather(document.querySelector('.cityName').innerText.split(' ')[0]);\n    _apicontroller__WEBPACK_IMPORTED_MODULE_0__.APIController.getCityForecast(document.querySelector('.cityName').innerText.split(' ')[0]);\n  }\n\n  static prevBtnClicked() {\n    if (DOMController.forecastIndex !== 0) {\n      DOMController.forecastIndex -= 7;\n      DOMController.populateForecast();\n    }\n  }\n\n  static nextBtnClicked() {\n    if (DOMController.forecastIndex < 35) {\n      DOMController.forecastIndex += 7;\n      DOMController.populateForecast();\n    }\n  }\n}\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://weather-app/./src/domcontroller.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domcontroller.js");
/******/ 	
/******/ })()
;