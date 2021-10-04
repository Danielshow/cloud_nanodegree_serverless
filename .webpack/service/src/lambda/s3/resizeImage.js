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

/***/ "./src/lambda/s3/resizeImage.ts":
/*!**************************************!*\
  !*** ./src/lambda/s3/resizeImage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimp/es */ \"jimp/es\");\n/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jimp_es__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst imagesBucket = process.env.IMAGES_BUCKET;\nconst thumbnailBucket = process.env.THUMBNAILS_S3_BUCKET;\nconst s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__.S3({\n    signatureVersion: 'v4',\n});\nconst handler = async (event) => {\n    console.log('Processing SNS event: ', JSON.stringify(event));\n    for (const snsRecord of event.Records) {\n        const s3EventStr = snsRecord.Sns.Message;\n        console.log('Processing S3 event record: ', s3EventStr);\n        const s3Event = JSON.parse(s3EventStr);\n        await processImage(s3Event);\n    }\n};\nasync function processImage(event) {\n    for (const record of event.Records) {\n        const key = record.s3.object.key;\n        console.log('Processing s3 item with Key: ', key);\n        const response = await s3\n            .getObject({\n            Bucket: imagesBucket,\n            Key: key\n        }).promise();\n        const body = response.Body;\n        const image = await jimp_es__WEBPACK_IMPORTED_MODULE_2__.read(body);\n        image.resize(150, jimp_es__WEBPACK_IMPORTED_MODULE_2__.AUTO);\n        const convertedBuffer = await image.getBufferAsync(jimp_es__WEBPACK_IMPORTED_MODULE_2__.MIME_JPEG);\n        await s3\n            .putObject({\n            Bucket: thumbnailBucket,\n            Key: `${key}.jpeg`,\n            Body: convertedBuffer\n        }).promise();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhL3MzL3Jlc2l6ZUltYWdlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZS0xMC11ZGFncmFtLWFwcC8uL3NyYy9sYW1iZGEvczMvcmVzaXplSW1hZ2UudHM/MGIyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM0V2ZW50LCBTTlNFdmVudCwgU05TSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcbmltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJ1xuaW1wb3J0ICogYXMgSmltcCBmcm9tICdqaW1wL2VzJ1xuXG5jb25zdCBpbWFnZXNCdWNrZXQgPSBwcm9jZXNzLmVudi5JTUFHRVNfQlVDS0VUXG5jb25zdCB0aHVtYm5haWxCdWNrZXQgPSBwcm9jZXNzLmVudi5USFVNQk5BSUxTX1MzX0JVQ0tFVFxuXG5jb25zdCBzMyA9IG5ldyBBV1MuUzMoe1xuICAgIHNpZ25hdHVyZVZlcnNpb246ICd2NCcsXG59KVxuXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBTTlNIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBTTlNFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIFNOUyBldmVudDogJywgSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgIGZvciAoY29uc3Qgc25zUmVjb3JkIG9mIGV2ZW50LlJlY29yZHMpIHtcbiAgICAgICAgY29uc3QgczNFdmVudFN0ciA9IHNuc1JlY29yZC5TbnMuTWVzc2FnZVxuICAgICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBTMyBldmVudCByZWNvcmQ6ICcsIHMzRXZlbnRTdHIpXG4gICAgICAgIGNvbnN0IHMzRXZlbnQgPSBKU09OLnBhcnNlKHMzRXZlbnRTdHIpXG4gICAgICAgIGF3YWl0IHByb2Nlc3NJbWFnZShzM0V2ZW50KVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ltYWdlIChldmVudDogUzNFdmVudCkge1xuICAgIGZvciAoY29uc3QgcmVjb3JkIG9mIGV2ZW50LlJlY29yZHMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gcmVjb3JkLnMzLm9iamVjdC5rZXlcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2Nlc3NpbmcgczMgaXRlbSB3aXRoIEtleTogJywga2V5KVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHMzXG4gICAgICAgICAgICAuZ2V0T2JqZWN0KHtcbiAgICAgICAgICAgICAgICBCdWNrZXQ6IGltYWdlc0J1Y2tldCxcbiAgICAgICAgICAgICAgICBLZXk6IGtleVxuICAgICAgICAgICAgfSkucHJvbWlzZSgpXG5cbiAgICAgICAgY29uc3QgYm9keSA9IHJlc3BvbnNlLkJvZHkgYXMgQnVmZmVyO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IEppbXAucmVhZChib2R5KVxuICAgICAgICBpbWFnZS5yZXNpemUoMTUwLCBKaW1wLkFVVE8pXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZEJ1ZmZlciA9IGF3YWl0IGltYWdlLmdldEJ1ZmZlckFzeW5jKEppbXAuTUlNRV9KUEVHKVxuICAgICAgICBhd2FpdCBzM1xuICAgICAgICAgICAgLnB1dE9iamVjdCh7XG4gICAgICAgICAgICAgICAgQnVja2V0OiB0aHVtYm5haWxCdWNrZXQsXG4gICAgICAgICAgICAgICAgS2V5OiBgJHtrZXl9LmpwZWdgLFxuICAgICAgICAgICAgICAgIEJvZHk6IGNvbnZlcnRlZEJ1ZmZlclxuICAgICAgICAgICAgfSkucHJvbWlzZSgpXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lambda/s3/resizeImage.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "jimp/es":
/*!**************************!*\
  !*** external "jimp/es" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("jimp/es");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda/s3/resizeImage.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;