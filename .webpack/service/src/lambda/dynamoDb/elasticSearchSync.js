/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lambda/dynamoDb/elasticSearchSync.ts":
/*!**************************************************!*\
  !*** ./src/lambda/dynamoDb/elasticSearchSync.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var elasticsearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elasticsearch */ \"elasticsearch\");\n/* harmony import */ var elasticsearch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elasticsearch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http_aws_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-aws-es */ \"http-aws-es\");\n/* harmony import */ var http_aws_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_aws_es__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst esEndpoint = process.env.ES_ENDPOINT;\nconst es = new elasticsearch__WEBPACK_IMPORTED_MODULE_1__.Client({\n    hosts: [esEndpoint],\n    connectionClass: http_aws_es__WEBPACK_IMPORTED_MODULE_2__\n});\nconst handler = async (event) => {\n    console.log(\"Processing batch events from DynamoDb: \", JSON.stringify(event));\n    for (const record of event.Records) {\n        console.log(\"Processing record: \", JSON.stringify(record));\n        if (record.eventName == \"INSERT\") {\n            await processRecord(record);\n        }\n    }\n};\nasync function processRecord(record) {\n    const item = record.dynamodb.NewImage;\n    const imageId = item.imageId.S;\n    const body = {\n        imageId: imageId,\n        groupId: item.groupId.S,\n        imageUrl: item.imageUrl.S,\n        title: item.title.S,\n        timestamp: item.timestamp.S,\n    };\n    await es.index({\n        index: 'images-index',\n        type: 'images',\n        id: imageId,\n        body\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhL2R5bmFtb0RiL2VsYXN0aWNTZWFyY2hTeW5jLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZpY2UtMTAtdWRhZ3JhbS1hcHAvLi9zcmMvbGFtYmRhL2R5bmFtb0RiL2VsYXN0aWNTZWFyY2hTeW5jLnRzP2RiYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJTdHJlYW1FdmVudCwgRHluYW1vREJTdHJlYW1IYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSdcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuaW1wb3J0ICogYXMgZWxhc3RpY3NlYXJjaCBmcm9tICdlbGFzdGljc2VhcmNoJ1xuaW1wb3J0ICogYXMgaHR0cEF3c0VzIGZyb20gJ2h0dHAtYXdzLWVzJ1xuXG5cbmNvbnN0IGVzRW5kcG9pbnQgPSBwcm9jZXNzLmVudi5FU19FTkRQT0lOVFxuY29uc3QgZXMgPSBuZXcgZWxhc3RpY3NlYXJjaC5DbGllbnQoe1xuICAgIGhvc3RzOiBbZXNFbmRwb2ludF0sXG4gICAgY29ubmVjdGlvbkNsYXNzOiBodHRwQXdzRXNcbn0pXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBEeW5hbW9EQlN0cmVhbUhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IER5bmFtb0RCU3RyZWFtRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3NpbmcgYmF0Y2ggZXZlbnRzIGZyb20gRHluYW1vRGI6IFwiLCBKU09OLnN0cmluZ2lmeShldmVudCkpXG5cbiAgICBmb3IgKGNvbnN0IHJlY29yZCBvZiBldmVudC5SZWNvcmRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvY2Vzc2luZyByZWNvcmQ6IFwiLCBKU09OLnN0cmluZ2lmeShyZWNvcmQpKVxuICAgICAgICBpZiAocmVjb3JkLmV2ZW50TmFtZSA9PSBcIklOU0VSVFwiKSB7XG4gICAgICAgICAgICBhd2FpdCBwcm9jZXNzUmVjb3JkKHJlY29yZClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1JlY29yZChyZWNvcmQ6IGFueSkge1xuICAgIGNvbnN0IGl0ZW0gPSByZWNvcmQuZHluYW1vZGIuTmV3SW1hZ2VcbiAgICBjb25zdCBpbWFnZUlkID0gaXRlbS5pbWFnZUlkLlNcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICBpbWFnZUlkOiBpbWFnZUlkLFxuICAgICAgICBncm91cElkOiBpdGVtLmdyb3VwSWQuUyxcbiAgICAgICAgaW1hZ2VVcmw6IGl0ZW0uaW1hZ2VVcmwuUyxcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUuUyxcbiAgICAgICAgdGltZXN0YW1wOiBpdGVtLnRpbWVzdGFtcC5TLFxuICAgIH1cbiAgICBhd2FpdCBlcy5pbmRleCh7XG4gICAgICAgIGluZGV4OiAnaW1hZ2VzLWluZGV4JyxcbiAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgIGlkOiBpbWFnZUlkLFxuICAgICAgICBib2R5XG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lambda/dynamoDb/elasticSearchSync.ts\n");

/***/ }),

/***/ "elasticsearch":
/*!********************************!*\
  !*** external "elasticsearch" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("elasticsearch");

/***/ }),

/***/ "http-aws-es":
/*!******************************!*\
  !*** external "http-aws-es" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-aws-es");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda/dynamoDb/elasticSearchSync.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;