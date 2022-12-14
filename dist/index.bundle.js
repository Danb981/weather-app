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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body{\\n    margin: 0;\\n    padding: 0;\\n    min-height: 100vh;\\n}\\n\\nbody{\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 6fr 0.25fr;\\n}\\n\\nh2, h3, h4, h5, h6{\\n    padding: 0;\\n    margin: 0;\\n    text-align: center;\\n}\\n\\nbutton{\\n    box-sizing: content-box;\\n}\\n\\nbutton:hover{\\n    cursor: pointer;\\n}\\n\\ninput[type=\\\"radio\\\"]:hover, label:hover{\\n    cursor: pointer;\\n}\\n\\nheader{\\n    background-color: #33587A;\\n\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nfooter{\\n    background-color: #33587A;\\n}\\n\\nheader .search{\\n    height: 55%;\\n    width: 60%;\\n    display: flex;\\n    gap: 25px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nheader .search > *{\\n    font-size: 2.5rem;\\n    height: 100%;\\n    border-radius: 16px; \\n}\\n\\nheader .search > input{\\n    text-align: center;\\n    flex: 1;\\n}\\n\\nheader .search > button{\\n    flex: 0.25;\\n}\\n\\nheader fieldset{\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n    gap: 15px;\\n    padding-left: 0;\\n    border: none;\\n}\\n\\ninput[type=\\\"radio\\\"]{\\n    width: 25px;\\n    height: 25px;\\n}\\n\\n.weatherInfo{\\n    background-color: #1965B1;\\n\\n    display: grid;\\n    grid-template-columns: minmax(820px, 50%);\\n    justify-content: center;\\n}\\n\\n.weatherInfo .card{\\n    background-color: #33587A;\\n    font-family: 'DIN-Light',sans-serif;\\n    color: white;\\n    padding-bottom: 25px;\\n\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 100px fit-content(330px) 100px 600px;\\n    grid-auto-rows: auto;\\n    justify-items: center;\\n    align-items: center;\\n}\\n\\n.weatherInfo .card .currentWeather{\\n    width: 75%;\\n    height: 100%;\\n    font-size: 36pt;\\n\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-auto-rows: fit-content(1px);\\n}\\n\\n.weatherInfo .card .currentWeather .temperature{\\n    display: flex;\\n    justify-content: center;\\n    gap: 25px;\\n}\\n\\n.weatherInfo .card .currentWeather .temperature .feelsLikeTemperature{\\n    font-size: 16pt;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.weatherInfo .card .currentWeather .conditions{\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.weatherInfo .card .currentWeather .advancedInfo{\\n    font-size: 16pt;\\n\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    row-gap: 25px;\\n    justify-content: center;\\n    align-content: center;\\n    text-align: center;\\n}\\n\\n.card .forecastControls{\\n    height: 100%;\\n    width: 75%;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n}\\n\\n.card .forecastControls > button{\\n    font-size: 2rem;\\n    color: white;\\n    background-color: transparent;\\n    border: none;\\n}\\n\\n.card .forecast{\\n    position: relative;\\n    height: 100%;\\n    width: 75%;\\n    background-color: white;\\n\\n    display: grid;\\n    grid-template-columns: repeat(7, 1fr);\\n}\\n\\n.threeHourInfo{\\n    border-right: 0.5px solid black;\\n    max-height: 100%;\\n\\n    display: grid;\\n    grid-template-rows: repeat(6, 1fr);\\n}\\n\\n.threeHourInfo:last-child{\\n    border-right: 0;\\n}\\n\\n.threeHourInfo .cell > img{\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n.threeHourInfo .cell{\\n    font-size: 1.5rem;\\n\\n    display: grid;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.cell:nth-child(odd){\\n    background-color: #1c86ea;\\n}\\n\\n.cell:nth-child(even){\\n    background-color: #519ce7;\\n}\\n\\n.legend{\\n    font-size: 12px;\\n    position: absolute;\\n    top: 200px;\\n    height: 400px;\\n    left: -99.5px;\\n    width: 100px;\\n    display: grid;\\n    grid-template-rows: repeat(4,1fr);\\n    justify-content: center;\\n    align-items: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _apicontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apicontroller */ \"./src/apicontroller.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n/* harmony import */ var _domcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domcontroller */ \"./src/domcontroller.js\");\n\n\n\n\n\nconst startingUnit = document.querySelector(\"[name='unit']:checked\").value;\nconst user = new _user__WEBPACK_IMPORTED_MODULE_2__.User('Brampton', startingUnit);\n\n_domcontroller__WEBPACK_IMPORTED_MODULE_3__.DOMController.init(user); // pass the user info to the dom controller\n_apicontroller__WEBPACK_IMPORTED_MODULE_1__.APIController.init(user); // pass the user info to the api controller\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n  constructor(defaultCity, preferredUnit) {\n    this.defaultCity = defaultCity;\n    this.preferredUnit = preferredUnit;\n    if (this.preferredUnit === 'metric') {\n      this.preferredUnitAbbreviation = 'C';\n      this.preferredWindUnit = 'm/s';\n    } else if (this.preferredUnit === 'imperial') {\n      this.preferredUnitAbbreviation = 'F';\n      this.preferredWindUnit = 'mph';\n    }\n  }\n\n  changePreferredUnit(newUnit) {\n    this.preferredUnit = newUnit;\n    if (this.preferredUnit === 'metric') {\n      this.preferredUnitAbbreviation = 'C';\n      this.preferredWindUnit = 'm/s';\n    } else if (this.preferredUnit === 'imperial') {\n      this.preferredUnitAbbreviation = 'F';\n      this.preferredWindUnit = 'mph';\n    }\n  }\n}\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack://weather-app/./src/user.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;