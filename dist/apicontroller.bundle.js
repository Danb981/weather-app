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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIController\": () => (/* binding */ APIController)\n/* harmony export */ });\n/* harmony import */ var _domcontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domcontroller */ \"./src/domcontroller.js\");\n\n\n/* eslint-disable no-console */\nclass APIController {\n  static tries = 0;\n\n  static maxTries = 5;\n\n  static apiKey = '00e8daf01cd1ddaced71911e08b02338';\n\n  static init(user) {\n    this.user = user;\n    this.getCityWeather(user.defaultCity); // get the default city weather on page load\n  }\n\n  static getCityWeather = async (cityName) => {\n    const apiQuery = `https://api.openweathermap.org/data/2.5/weather?units=${this.user.preferredUnit}&q=${cityName}&appid=${this.apiKey}`;\n\n    try {\n      const result = await fetch(apiQuery);\n      if (!result.ok) {\n        throw new Error('Issue getting info from API');\n      }\n      const json = await result.json();\n      _domcontroller__WEBPACK_IMPORTED_MODULE_0__.DOMController.populateCurrentWeather(json);\n    } catch (e) {\n      this.tries += 1;\n      if (this.tries < this.maxTries) {\n        console.log('Failed to fetch, trying again with user\\'s default city');\n        this.getCityWeather(this.user.defaultCity); // perform some default fetch\n      } else {\n        this.tries = 0;\n        console.log(`Failed ${this.maxTries} times, try again later`);\n      }\n    }\n\n    // promise version\n    /*\n    fetch(apiQuery).then((result) => {\n      if (!result.ok) {\n        throw new Error('404');\n      }\n      return result.json();\n    }).then((json) => {\n      console.log(json);\n    }).catch((err) => {\n      console.log(err);\n      this.getCityWeather('Toronto'); // perform some default fetch\n    });\n    */\n  };\n}\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://weather-app/./src/apicontroller.js?");

/***/ }),

/***/ "./src/domcontroller.js":
/*!******************************!*\
  !*** ./src/domcontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMController\": () => (/* binding */ DOMController)\n/* harmony export */ });\n/* harmony import */ var _apicontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apicontroller */ \"./src/apicontroller.js\");\n\n\nclass DOMController {\n  static init(user) {\n    this.user = user;\n    document.querySelector('.searchBtn').addEventListener('click', this.searchBtnClicked);\n    document.querySelectorAll(\"[name='unit']\").forEach((radio) => {\n      radio.addEventListener('change', this.radioBtnChanged);\n    });\n  }\n\n  static populateCurrentWeather(currentWeatherJson) {\n    console.log(currentWeatherJson);\n    // city name\n    const cityName = document.querySelector('.cityName');\n    // temperature\n    const currentTemperature = document.querySelector('.currentTemperature');\n    const feelsLikeTemperature = document.querySelector('.feelsLikeTemperature');\n    // conditions\n    const currentCondition = document.querySelector('.currentCondition');\n    const currentConditionIcon = document.querySelector('.currentConditionIcon');\n    // advanced\n    const lowTemperature = document.querySelector('.lowTemperature');\n    const windSpeed = document.querySelector('.windSpeed');\n    const humidity = document.querySelector('.humidity');\n    const sunrise = document.querySelector('.sunrise');\n    const highTemperature = document.querySelector('.highTemperature');\n    const windDirection = document.querySelector('.windDirection');\n    const pressure = document.querySelector('.pressure');\n    const sunset = document.querySelector('.sunset');\n\n    cityName.innerText = `${currentWeatherJson.name}, ${currentWeatherJson.sys.country}`;\n\n    currentTemperature.innerText = `${Math.round(currentWeatherJson.main.temp)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n    feelsLikeTemperature.innerText = `Feels like ${Math.round(currentWeatherJson.main.feels_like)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n\n    const weatherDescription = currentWeatherJson.weather[0].description.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // capitalize first letter of each word\n    currentCondition.innerText = weatherDescription;\n    currentConditionIcon.src = `http://openweathermap.org/img/wn/${currentWeatherJson.weather[0].icon}@2x.png`;\n\n    lowTemperature.innerHTML = `Low<br />${Math.round(currentWeatherJson.main.temp_min)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n    highTemperature.innerHTML = `High<br />${Math.round(currentWeatherJson.main.temp_max)}\\u00B0${this.user.preferredUnitAbbreviation}`;\n\n    windSpeed.innerHTML = `Wind Speed<br />${Math.round(currentWeatherJson.wind.speed)} km/h`;\n    windDirection.innerHTML = `Wind Direction<br />${currentWeatherJson.wind.deg}\\u00B0`;\n\n    humidity.innerHTML = `Humidity<br />${currentWeatherJson.main.humidity}%`;\n    pressure.innerHTML = `Pressure<br />${currentWeatherJson.main.pressure / 10} kPa`;\n\n    const sunriseTime = new Date(currentWeatherJson.sys.sunrise * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });\n    const sunsetTime = new Date(currentWeatherJson.sys.sunset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });\n    sunrise.innerHTML = `Sunrise<br />${sunriseTime}`;\n    sunset.innerHTML = `Sunset<br />${sunsetTime}`;\n  }\n\n  static searchBtnClicked() {\n    const searchTerm = document.querySelector('.searchTerm').value;\n    _apicontroller__WEBPACK_IMPORTED_MODULE_0__.APIController.getCityWeather(searchTerm);\n  }\n\n  static radioBtnChanged(e) {\n    console.log(e);\n  }\n}\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://weather-app/./src/domcontroller.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/apicontroller.js");
/******/ 	
/******/ })()
;