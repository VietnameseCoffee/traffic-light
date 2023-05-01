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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./variables.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/variables.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bug.png */ \"./src/assets/bug.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/taxi.png */ \"./src/assets/taxi.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/coupe.png */ \"./src/assets/coupe.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/cloud.svg */ \"./src/assets/cloud.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/skyline.png */ \"./src/assets/skyline.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/**************************************\\n* TAGS\\n*/\\n\\n* {\\n  user-select: none;\\n}\\nhtml {\\n  height: 100%;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  margin: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nimg {\\n  -webkit-user-drag: none;\\n}\\n\\n/**************************************\\n* IDS\\n*/\\n\\n#view {\\n  position: relative;\\n  height: 500px;\\n  width: var(--app-width);\\n  overflow: hidden;\\n}\\n\\n#backdrop {\\n  position: relative;\\n  height: 500px;\\n  width: var(--app-width);\\n}\\n\\n#buttons {\\n  box-sizing: border-box;\\n  display: flex;\\n  height: 50px;\\n  padding-left: 4px;\\n  line-height: 40px;\\n}\\n\\n#buttons-wrapper {\\n  background-color: blanchedalmond;\\n  border-bottom: 2px solid #9b9b9b;\\n  border-left: 2px solid #9b9b9b;\\n  border-right: 2px solid #9b9b9b;\\n  box-sizing: border-box;\\n  height: 50px;\\n  padding-left: 4px;\\n  width: var(--app-width);\\n}\\n\\n#init {\\n  border-color: var(--modal-border-out);\\n  display: block;\\n  margin: 20px auto 0;\\n  padding: 5px;\\n  width: 160px;\\n}\\n\\n/**************************************\\n* BUTTONS\\n*/\\n\\n.btn {\\n  border: 2px solid #848484;\\n  border-radius: 2px;\\n  background-color: var(--btn);\\n  height: 40px;\\n  margin: 4px 2px 0;\\n  width: 80px;\\n  padding: 0;\\n}\\n\\n.btn-car {\\n  background-size: contain;\\n  height: 92%;\\n  margin: auto;\\n  width: 92%;\\n}\\n\\n.slow {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n.medium {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n.fast {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.btn:active {\\n  filter: brightness(0.9);\\n}\\n\\n.btn:disabled {\\n  background-color: #cccccc;\\n  opacity: 0.8;\\n  filter: brightness(0.8);\\n}\\n\\n.grn {\\n  background-color: var(--green);\\n}\\n\\n.red {\\n  background-color: var(--red);\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n\\n/**************************************\\n* GAME\\n*/\\n\\n.view {\\n  filter: brightness(0.3);\\n}\\n\\n.sky {\\n  background-color: var(--sky);\\n  height: 200px;\\n  width: 100%;\\n}\\n\\n.ground {\\n  position: relative;\\n  background-color: var(--ground);\\n  height: 300px;\\n  width: 100%;\\n  z-index: 2;\\n}\\n\\n.road-h {\\n  bottom: 40px;\\n  background-color: var(--road);\\n  height: 100px;\\n  position: absolute;\\n  width: 100%;\\n}\\n\\n.road-v {\\n  position: absolute;\\n  left: 250px;\\n  height: 200px;\\n  width: 100px;\\n  fill: var(--road);\\n}\\n\\n.spawn-marker {\\n  height: 49px;\\n  position: absolute;\\n  width: 20px;\\n  right: -20px;\\n  z-index: 3;\\n}\\n\\n.spawn-auto {\\n  background: linear-gradient(to right, rgba(255, 0, 0, 0), rgb(44 236 211));\\n}\\n\\n.spawn-user {\\n  background: linear-gradient(to right, rgba(255, 0, 0, 0), rgb(255 110 110));\\n}\\n\\n.spawn-1 {\\n  top: 1px;\\n}\\n\\n.spawn-2 {\\n  top: 51px;\\n}\\n\\n.divider-h {\\n  width: 100%;\\n  border: 1px solid var(--divider);\\n  position: absolute;\\n  top: 50%;\\n}\\n\\n.divider-v {\\n  height: 100%;\\n  border: 1px solid var(--divider);\\n  position: absolute;\\n  left: 50%;\\n}\\n\\n.intersection {\\n  height: 100px;\\n  width: 100px;\\n  background-color: var(--road);\\n  position: absolute;\\n  bottom: 40px;\\n  left: 250px;\\n}\\n\\n.pole-bottom {\\n  width: 8px;\\n  background-color: var(--dark);\\n  height: 48px;\\n}\\n\\n.pole-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  position: absolute;\\n  top: 24px;\\n  left: 200px;\\n}\\n\\n.sun {\\n  width: 48px;\\n  height: 48px;\\n  background-color: var(--sun);\\n  border-radius: 50%;\\n  position: absolute;\\n  top: 30px;\\n  right: 200px;\\n}\\n\\n.cloud {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  left: 480px;\\n  height: 60px;\\n  position: absolute;\\n  top: 55px;\\n  width: 95px;\\n}\\n\\n.cloud-1 {\\n  height: 60px;\\n  width: 95px;\\n  top: 55px;\\n  left: 480px;\\n}\\n.cloud-2 {\\n  height: 36px;\\n  width: 57px;\\n  top: 110px;\\n  left: 800px;\\n}\\n\\n.skyline {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 79px;\\n  left: 326px;\\n  opacity: 0.76;\\n  position: absolute;\\n  top: 127px;\\n  width: 173px;\\n}\\n\\n.car {\\n  position: absolute;\\n  width: 90px;\\n  height: 46px;\\n  z-index: 2;\\n}\\n\\n/**************************************\\n* MODAL\\n*/\\n\\n#modal {\\n  border-radius: 5px;\\n  border: 2px solid var(--modal-border-out);\\n  position: absolute;\\n  left: 50%;\\n  top: calc(50% - 20px);\\n  transform: translate(-50%, -50%);\\n\\n  width: 550px;\\n  height: 450px;\\n  z-index: 2;\\n}\\n\\n.border {\\n  box-sizing: border-box;\\n  border: 8px solid var(--modal-border-in);\\n  border-radius: 5px;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.content {\\n  box-sizing: border-box;\\n  background-color: var(--modal);\\n  border: 2px solid var(--modal-border-out);\\n  border-radius: 2px;\\n  font-size: 14px;\\n  height: 100%;\\n  width: 100%;\\n  padding: 0 1rem;\\n}\\n\\n/**************************************\\n* ANIMATIONS\\n*/\\n\\n.on {\\n  animation-duration: 3s;\\n  animation-iteration-count: 1;\\n  animation-name: brighten;\\n  filter: brightness(1);\\n}\\n\\n@keyframes brighten {\\n  from {\\n    filter: brightness(0.3);\\n  }\\n\\n  to {\\n    filter: brightness(1);\\n  }\\n}\\n\\n.on .sun {\\n  animation-duration: 2.6s;\\n  animation-iteration-count: 1;\\n  animation-name: rise;\\n}\\n\\n@keyframes rise {\\n  from {\\n    top: 170px;\\n    right: 275px;\\n  }\\n\\n  to {\\n    top: 30px;\\n    right: 200px;\\n  }\\n}\\n\\n.cloud {\\n  animation: 160s linear infinite cloud;\\n}\\n\\n@keyframes cloud {\\n  0% {\\n    translate: 0 0;\\n    opacity: 0;\\n  }\\n\\n  1% {\\n    opacity: 1;\\n  }\\n\\n  96% {\\n    opacity: 1;\\n  }\\n\\n  99% {\\n    opacity: 0;\\n  }\\n\\n  100% {\\n    opacity: 0;\\n    translate: -500px 0;\\n  }\\n}\\n\\n.spawn-auto {\\n  animation-duration: 1.6s;\\n  animation-iteration-count: 1;\\n  animation-name: waffle;\\n}\\n\\n.spawn-user {\\n  animation-duration: 2s;\\n  animation-iteration-count: infinite;\\n  animation-name: waffle;\\n}\\n\\n@keyframes waffle {\\n  0% {\\n    translate: 0 0;\\n  }\\n\\n  50% {\\n    translate: -20px 0px;\\n  }\\n\\n  100% {\\n    translate: 0 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://traffic/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/variables.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/variables.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --app-width: 800px;\\n  --btn: #f9d798;\\n  --dark: #2d2d2d;\\n  --divider: #ebebeb;\\n  --ground: #4bc82c;\\n  --green: #20d617;\\n  --red: #ff7b7b;\\n  --modal-border-in: #efa41a;\\n  --modal: #eaba61;\\n  --modal-border-out: #8a1bf1;\\n  --road: #a1a1a1;\\n  --sky: #a0ddf5;\\n  --sun: #ffff00;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://traffic/./src/styles/variables.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://traffic/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://traffic/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://traffic/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://traffic/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://traffic/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://traffic/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://traffic/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://traffic/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://traffic/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://traffic/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/game */ \"./src/js/game.ts\");\n/* harmony import */ var _js_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/car */ \"./src/js/car.ts\");\n/* harmony import */ var _js_traffic_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/traffic_light */ \"./src/js/traffic_light.ts\");\nconst s = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n\n\n\nconst view = document.getElementById(\"view\");\nconst pole = view.querySelector(\".pole\");\nconst trafficLight = new _js_traffic_light__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pole);\nconst game = new _js_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](view, _js_car__WEBPACK_IMPORTED_MODULE_1__[\"default\"], trafficLight);\ngame.init();\nconst initGameButton = document.getElementById(\"init\");\nconst startButton = document.getElementById(\"light-start\");\nconst stopButtonn = document.getElementById(\"light-stop\");\nconst autoButton = document.getElementById(\"auto\");\nconst laneButton = document.getElementById(\"lane\");\nconst addSlowCarButton = document.getElementById(\"add-slow\");\nconst addMediumCarButton = document.getElementById(\"add-medium\");\nconst addFastCarButton = document.getElementById(\"add-fast\");\nstopButtonn.disabled = true;\ninitGameButton.onclick = () => {\n    const modal = document.getElementById(\"modal\");\n    document.querySelector(\".hidden\")?.classList.remove(\"hidden\");\n    modal.remove();\n    view.classList.add(\"on\");\n};\nstartButton.onclick = () => {\n    startButton.disabled = true;\n    stopButtonn.disabled = false;\n    game.startLight();\n};\nstopButtonn.onclick = () => {\n    stopButtonn.disabled = true;\n    game.stopLight();\n    if (game.isLightRed()) {\n        startButton.disabled = false;\n    }\n    else {\n        setTimeout(() => (startButton.disabled = false), 2000);\n    }\n};\nlaneButton.onclick = () => {\n    const lane = game.changeLane();\n    const text = lane === 0 ? \"Top\" : \"Bottom\";\n    laneButton.innerText = text;\n};\nautoButton.onclick = () => {\n    if (autoButton.dataset.on === \"on\") {\n        autoButton.dataset.on = \"off\";\n        autoButton.innerText = \"Auto Off\";\n        game.stopAutoGen();\n    }\n    else {\n        autoButton.dataset.on = \"on\";\n        game.triggerAutoGen();\n        autoButton.innerText = \"Auto On\";\n    }\n};\naddSlowCarButton.onclick = () => game.addCar(\"slow\");\naddMediumCarButton.onclick = () => game.addCar(\"medium\");\naddFastCarButton.onclick = () => game.addCar(\"fast\");\n\n\n//# sourceURL=webpack://traffic/./src/index.ts?");

/***/ }),

/***/ "./src/js/base-element.ts":
/*!********************************!*\
  !*** ./src/js/base-element.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass BaseElement {\n    constructor() { }\n    addStyle(el, styles) {\n        const elStyles = el.style;\n        let key;\n        for (key in styles) {\n            elStyles[key] = styles[key];\n        }\n        return el;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseElement);\n\n\n//# sourceURL=webpack://traffic/./src/js/base-element.ts?");

/***/ }),

/***/ "./src/js/car.ts":
/*!***********************!*\
  !*** ./src/js/car.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_bug_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/bug.png */ \"./src/assets/bug.png\");\n/* harmony import */ var _assets_coupe_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/coupe.png */ \"./src/assets/coupe.png\");\n/* harmony import */ var _assets_taxi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/taxi.png */ \"./src/assets/taxi.png\");\n\n\n\nclass Car {\n    element;\n    length;\n    model;\n    vibration;\n    yAxis;\n    constructor(model, direction = \"left\") {\n        this.element = this.#genElement(model);\n        this.model = model;\n        this.length = 90;\n        this.vibration = false;\n    }\n    move() {\n        const newPosition = this.element.offsetLeft - 1;\n        this.element.style.left = `${newPosition}px`;\n        return newPosition;\n    }\n    vibrate() {\n        const shake = Math.random() > 0.1 ? 1.5 : 0;\n        const newTop = this.yAxis + shake;\n        this.element.style.top = `${newTop}px`;\n        this.vibration = !this.vibration;\n    }\n    /**********************  PRIVATE  **********************/\n    #genElement(model) {\n        const map = {\n            slow: _assets_bug_png__WEBPACK_IMPORTED_MODULE_0__,\n            medium: _assets_taxi_png__WEBPACK_IMPORTED_MODULE_2__,\n            fast: _assets_coupe_png__WEBPACK_IMPORTED_MODULE_1__,\n        };\n        const car = document.createElement(\"img\");\n        car.className = \"car\";\n        car.src = map[model];\n        car.alt = \"\";\n        car.style.left = \"820px\";\n        car.style.top = \"14px\";\n        return car;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n\n//# sourceURL=webpack://traffic/./src/js/car.ts?");

/***/ }),

/***/ "./src/js/game.ts":
/*!************************!*\
  !*** ./src/js/game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ \"./src/js/base-element.ts\");\n\nclass Game extends _base_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    app;\n    autoGen;\n    Car;\n    currentLane;\n    lane1;\n    lane2;\n    junction;\n    trafficLight;\n    road;\n    constructor(app, carMaker, trafficLight) {\n        super();\n        const junction = app.querySelector(\".intersection\");\n        const road = app.querySelector(\".road-h\");\n        this.app = app;\n        this.Car = carMaker;\n        this.trafficLight = trafficLight;\n        this.trafficLight.append();\n        this.currentLane = 0;\n        this.lane1 = [];\n        this.lane2 = [];\n        this.road = road;\n        this.junction = junction;\n        this.autoGen = setTimeout(() => { }, 0);\n    }\n    addCar(model) {\n        if (this.lane1.length + this.lane2.length > 20)\n            return false;\n        const newCar = new this.Car(model);\n        if (this.currentLane === 0) {\n            this.lane1.push(newCar);\n            newCar.yAxis = -14;\n        }\n        else if (this.currentLane === 1) {\n            this.lane2.push(newCar);\n            newCar.yAxis = 34;\n        }\n        this.road.append(newCar.element);\n        return true;\n    }\n    changeLane() {\n        this.currentLane = (this.currentLane + 1) % 2;\n        const userMarker = this.app.querySelector(\"#spawn-user\");\n        userMarker?.classList.toggle(\"spawn-1\");\n        userMarker?.classList.toggle(\"spawn-2\");\n        return this.currentLane;\n    }\n    init() {\n        this.#moveSlow();\n        this.#moveMedium();\n        this.#moveFast();\n        this.#clearCars();\n    }\n    isLightRed() {\n        return this.trafficLight.isRed();\n    }\n    startLight() {\n        this.trafficLight.startCycle();\n    }\n    stopLight() {\n        this.trafficLight.stopCycle();\n    }\n    stopAutoGen() {\n        clearTimeout(this.autoGen);\n    }\n    triggerAutoGen() {\n        this.autoGen = this.#autoGenCar();\n    }\n    /**********************  PRIVATE  **********************/\n    #autoGenCar() {\n        const time = Math.floor(Math.random() * 5000) + 1600;\n        const models = [\"slow\", \"medium\", \"fast\"];\n        return setTimeout(() => {\n            const oldLane = this.currentLane;\n            const lane = Math.random() > 0.5 ? 0 : 1;\n            const model = models[Math.floor(Math.random() * 3)];\n            this.currentLane = lane;\n            const result = this.addCar(model);\n            result && this.#showIndicator(lane);\n            this.currentLane = oldLane;\n            this.autoGen = this.#autoGenCar();\n        }, time);\n    }\n    #clearCars = () => {\n        setInterval(() => {\n            this.#clearLane(this.lane1);\n            this.#clearLane(this.lane2);\n        }, 500);\n    };\n    #moveSlow = () => {\n        this.#evalLane(this.lane1, \"slow\");\n        this.#evalLane(this.lane2, \"slow\");\n        window.requestAnimationFrame(this.#moveSlow);\n    };\n    #moveMedium = () => {\n        setTimeout(() => {\n            this.#evalLane(this.lane1, \"medium\");\n            this.#evalLane(this.lane2, \"medium\");\n            this.#moveMedium();\n        }, 7);\n    };\n    #moveFast() {\n        setInterval(() => {\n            this.#evalLane(this.lane1, \"fast\");\n            this.#evalLane(this.lane2, \"fast\");\n        }, 7);\n    }\n    #showIndicator(lane) {\n        const autoMarker = this.app.querySelector(\"#spawn-auto\");\n        const markerLane = lane === 0 ? \"spawn-1\" : \"spawn-2\";\n        autoMarker.classList.add(\"spawn-auto\");\n        autoMarker.classList.add(markerLane);\n        setTimeout(() => {\n            autoMarker.classList.remove(`spawn-auto`);\n            autoMarker.classList.remove(markerLane);\n        }, 2000);\n    }\n    /**********************  HELPERS  **********************/\n    #canMove = (car, prevCarDistance) => {\n        let canMove = false;\n        // check if last car is too close\n        if (car.element.offsetLeft < prevCarDistance + 12)\n            return false;\n        switch (this.trafficLight.getColor()) {\n            case \"red\":\n                canMove = this.#isBeforeJunction(car) || this.#isFarInJunction(car);\n                break;\n            case \"yellow\":\n                canMove =\n                    this.#haveTimeToContinue(this.trafficLight) ||\n                        this.#isBeforeJunction(car) ||\n                        this.#isFarInJunction(car);\n                break;\n            case \"green\":\n                canMove = true;\n                break;\n            default:\n        }\n        return canMove;\n    };\n    #clearLane(lane) {\n        const car = lane[0];\n        if (car && car.element.offsetLeft < -120) {\n            car.element.remove();\n            lane.shift();\n        }\n    }\n    #evalLane = (lane, filter) => {\n        let prevCarEnd = -100000;\n        for (let car of lane) {\n            if (car.model === filter && this.#canMove(car, prevCarEnd)) {\n                prevCarEnd = car.move() + car.length;\n            }\n            prevCarEnd = car.element.offsetLeft + car.length;\n            car.vibrate();\n        }\n    };\n    #haveTimeToContinue = (trafficLight) => {\n        const timeYellowBegan = trafficLight.timeYellowBegan;\n        const currTime = new Date().getTime();\n        return currTime < timeYellowBegan + 1500;\n    };\n    #isBeforeJunction = (car) => {\n        const right = this.junction.offsetLeft + this.junction.clientWidth;\n        return car.element.offsetLeft > right;\n    };\n    #isFarInJunction = (car) => {\n        const right = this.junction.offsetLeft + this.junction.clientWidth - 20;\n        return car.element.offsetLeft < right;\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://traffic/./src/js/game.ts?");

/***/ }),

/***/ "./src/js/traffic_light.ts":
/*!*********************************!*\
  !*** ./src/js/traffic_light.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ \"./src/js/base-element.ts\");\n\nclass TrafficLight extends _base_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    parent;\n    dom;\n    colors;\n    currLight;\n    cycle;\n    timeYellowBegan;\n    constructor(parent) {\n        super();\n        this.parent = parent;\n        this.colors = this.#getLightsArray();\n        this.currLight = 0;\n        this.dom = this.#buildLight(this.colors);\n        this.timeYellowBegan;\n        const activeLight = this.dom.querySelector(`#${this.colors[this.currLight]}`);\n        this.addStyle(activeLight, {\n            filter: \"brightness(1)\",\n        });\n    }\n    append() {\n        this.parent.append(this.dom);\n    }\n    change() {\n        this.currLight =\n            (this.currLight + (this.colors.length - 1)) % this.colors.length;\n        this.colors.forEach((color, i) => {\n            const light = this.getLight(color);\n            const filter = i === this.currLight ? \"brightness(1)\" : \"brightness(0.1)\";\n            this.addStyle(light, { filter });\n        });\n    }\n    getLight(color) {\n        return this.dom.querySelector(`#${color}`);\n    }\n    getColor() {\n        const lights = this.#getLightsArray();\n        return lights[this.currLight];\n    }\n    isRed() {\n        return this.currLight === 0;\n    }\n    isYellow() {\n        return this.currLight === 1;\n    }\n    isGreen() {\n        return this.currLight === 2;\n    }\n    startCycle() {\n        // first red to green\n        this.change();\n        this.#cycle();\n    }\n    getState() {\n        return this.colors[this.currLight];\n    }\n    stopCycle() {\n        clearTimeout(this.cycle);\n        if (this.isRed())\n            return;\n        this.timeYellowBegan = new Date().getTime();\n        if (this.isYellow()) {\n            setTimeout(() => {\n                this.change();\n            }, 2000);\n        }\n        if (this.isGreen()) {\n            this.change();\n            setTimeout(() => {\n                this.change();\n            }, 2050);\n        }\n    }\n    /*****************************************\n     * PRIVATE\n     */\n    #buildLight(initLights) {\n        const trafficLight = document.createElement(\"div\");\n        this.addStyle(trafficLight, {\n            backgroundColor: \"#333333\",\n            border: \"2px solid #222222\",\n            width: \"36px\",\n            height: \"72px\",\n            padding: \"2px 0\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n        });\n        const colorMap = {\n            green: \"#30ff30\",\n            red: \"red\",\n            yellow: \"yellow\",\n        };\n        const lights = initLights.map((color) => {\n            const light = document.createElement(\"div\");\n            const fill = document.createElement(\"div\");\n            this.addStyle(light, {\n                borderRadius: \"100%\",\n                height: \"20px\",\n                width: \"20px\",\n            });\n            this.addStyle(fill, {\n                backgroundColor: colorMap[color],\n                borderRadius: \"100%\",\n                height: \"20px\",\n                filter: \"brightness(0.1)\",\n                width: \"20px\",\n            });\n            light.id = `${color}-light`;\n            fill.id = color;\n            light.append(fill);\n            return light;\n        });\n        trafficLight.append(...lights);\n        return trafficLight;\n    }\n    #cycle() {\n        this.cycle = setTimeout(() => {\n            // green to yellow\n            this.timeYellowBegan = new Date().getTime();\n            this.change();\n            this.cycle = setTimeout(() => {\n                // yellow to red\n                this.change();\n                this.cycle = setTimeout(() => {\n                    // red to green\n                    this.change();\n                    this.#cycle();\n                }, 4500);\n            }, 2500);\n        }, 7000);\n    }\n    #getLightsArray() {\n        return [\"red\", \"yellow\", \"green\"];\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrafficLight);\n\n\n//# sourceURL=webpack://traffic/./src/js/traffic_light.ts?");

/***/ }),

/***/ "./src/assets/bug.png":
/*!****************************!*\
  !*** ./src/assets/bug.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c908b7868a3f5b224ed4.png\";\n\n//# sourceURL=webpack://traffic/./src/assets/bug.png?");

/***/ }),

/***/ "./src/assets/cloud.svg":
/*!******************************!*\
  !*** ./src/assets/cloud.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06f194689f006a58d103.svg\";\n\n//# sourceURL=webpack://traffic/./src/assets/cloud.svg?");

/***/ }),

/***/ "./src/assets/coupe.png":
/*!******************************!*\
  !*** ./src/assets/coupe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d6d4be18e4f23a203d6.png\";\n\n//# sourceURL=webpack://traffic/./src/assets/coupe.png?");

/***/ }),

/***/ "./src/assets/skyline.png":
/*!********************************!*\
  !*** ./src/assets/skyline.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ad0c4710931a5bf35af.png\";\n\n//# sourceURL=webpack://traffic/./src/assets/skyline.png?");

/***/ }),

/***/ "./src/assets/taxi.png":
/*!*****************************!*\
  !*** ./src/assets/taxi.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10a1fdba529436f6274c.png\";\n\n//# sourceURL=webpack://traffic/./src/assets/taxi.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;