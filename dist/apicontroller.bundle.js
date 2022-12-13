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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIController\": () => (/* binding */ APIController)\n/* harmony export */ });\n/* eslint-disable no-console */\nclass APIController {\n  static tries = 0;\n\n  static maxTries = 5;\n\n  static apiKey = '00e8daf01cd1ddaced71911e08b02338';\n\n  static init(user) {\n    this.user = user;\n  }\n\n  static getCityWeather = async (cityName) => {\n    const apiQuery = `https://api.openweathermap.org/data/2.5/weather?units=${this.user.preferredUnit}&q=${cityName}&appid=${this.apiKey}`;\n\n    try {\n      const result = await fetch(apiQuery);\n      if (!result.ok) {\n        throw new Error('Issue getting info from API');\n      }\n      const json = await result.json();\n      console.log(json);\n    } catch (e) {\n      this.tries += 1;\n      if (this.tries < this.maxTries) {\n        this.getCityWeather(this.user.defaultCity); // perform some default fetch\n      } else {\n        this.tries = 0;\n        console.log(`Failed ${this.maxTries} times, try again later`);\n      }\n    }\n\n    // promise version\n    /*\n    fetch(apiQuery).then((result) => {\n      if (!result.ok) {\n        throw new Error('404');\n      }\n      return result.json();\n    }).then((json) => {\n      console.log(json);\n    }).catch((err) => {\n      console.log(err);\n      this.getCityWeather('Toronto'); // perform some default fetch\n    });\n    */\n  };\n}\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://weather-app/./src/apicontroller.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/apicontroller.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;