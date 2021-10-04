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

/***/ "./src/auth/utils.ts":
/*!***************************!*\
  !*** ./src/auth/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserId\": () => (/* binding */ getUserId)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getUserId(jwtToken) {\n    const token = jwtToken.replace('Bearer ', '');\n    const { sub } = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.decode)(token);\n    return sub;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC91dGlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlLTEwLXVkYWdyYW0tYXBwLy4vc3JjL2F1dGgvdXRpbHMudHM/Y2NjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWNvZGUgfSBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgSnd0VG9rZW4gIH0gZnJvbSAnLi9qd3RUb2tlbic7XG5cbi8qKlxuICogUGFyc2UgSldUVG9rZW4gYW5kIHJldHVybiB1c2VySWRcbiAqIEBwYXJhbSBqd3RUb2tlbiBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKGp3dFRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRva2VuID0gand0VG9rZW4ucmVwbGFjZSgnQmVhcmVyICcsICcnKTtcbiAgICBjb25zdCB7IHN1YiB9ID0gZGVjb2RlKHRva2VuKSBhcyBKd3RUb2tlbjtcbiAgICByZXR1cm4gc3ViO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/auth/utils.ts\n");

/***/ }),

/***/ "./src/lambda/http/createImage.ts":
/*!****************************************!*\
  !*** ./src/lambda/http/createImage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var middy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! middy */ \"middy\");\n/* harmony import */ var middy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(middy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var middy_middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! middy/middlewares */ \"middy/middlewares\");\n/* harmony import */ var middy_middlewares__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(middy_middlewares__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_auth_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/auth/utils */ \"./src/auth/utils.ts\");\n\n\n\n\n\n\nconst docClient = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__.DynamoDB.DocumentClient();\nconst groupsTable = process.env.GROUPS_TABLE;\nconst imagesTable = process.env.IMAGES_TABLE;\nconst bucketName = process.env.IMAGES_BUCKET;\nconst SIGNED_URL_EXPIRATION = process.env.SIGNED_URL_EXPIRATION || 60 * 60 * 24 * 7;\nconst s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__.S3({\n    signatureVersion: 'v4',\n});\nconst handler = middy__WEBPACK_IMPORTED_MODULE_3__(async (event) => {\n    console.log('Caller event', event);\n    const groupId = event.pathParameters.groupId;\n    const validGroupId = await groupExists(groupId);\n    const parsedBody = JSON.parse(event.body);\n    if (!validGroupId) {\n        return {\n            statusCode: 404,\n            body: JSON.stringify({\n                error: 'Group does not exist'\n            })\n        };\n    }\n    const imageId = uuid__WEBPACK_IMPORTED_MODULE_2__.v4();\n    const newImage = {\n        groupId,\n        imageId,\n        ...parsedBody,\n        imageUrl: `https://${bucketName}.s3.amazonaws.com/${imageId}`,\n        userId: (0,src_auth_utils__WEBPACK_IMPORTED_MODULE_5__.getUserId)(event.headers.Authorization),\n        timestamp: new Date().toISOString(),\n    };\n    const url = getUploadUrl(imageId);\n    await docClient.put({\n        TableName: imagesTable,\n        Item: newImage\n    }).promise();\n    return {\n        statusCode: 201,\n        body: JSON.stringify({\n            newItem: newImage,\n            uploadUrl: url\n        })\n    };\n});\nasync function groupExists(groupId) {\n    const result = await docClient\n        .get({\n        TableName: groupsTable,\n        Key: {\n            id: groupId\n        }\n    })\n        .promise();\n    console.log('Get group: ', result);\n    return !!result.Item;\n}\nfunction getUploadUrl(imageId) {\n    const params = {\n        Bucket: bucketName,\n        Key: imageId,\n        Expires: Number(SIGNED_URL_EXPIRATION)\n    };\n    return s3.getSignedUrl('putObject', params);\n}\nhandler.use((0,middy_middlewares__WEBPACK_IMPORTED_MODULE_4__.cors)({\n    credentials: true\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhL2h0dHAvY3JlYXRlSW1hZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZS0xMC11ZGFncmFtLWFwcC8uL3NyYy9sYW1iZGEvaHR0cC9jcmVhdGVJbWFnZS50cz85NWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQgfSBmcm9tICdhd3MtbGFtYmRhJ1xuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXG5pbXBvcnQgKiBhcyBBV1MgIGZyb20gJ2F3cy1zZGsnXG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gJ3V1aWQnXG5pbXBvcnQgKiBhcyBtaWRkeSBmcm9tICdtaWRkeSc7XG5pbXBvcnQgeyBjb3JzIH0gZnJvbSAnbWlkZHkvbWlkZGxld2FyZXMnO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSAnc3JjL2F1dGgvdXRpbHMnO1xuXG5jb25zdCBkb2NDbGllbnQgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KClcblxuY29uc3QgZ3JvdXBzVGFibGUgPSBwcm9jZXNzLmVudi5HUk9VUFNfVEFCTEVcbmNvbnN0IGltYWdlc1RhYmxlID0gcHJvY2Vzcy5lbnYuSU1BR0VTX1RBQkxFXG5jb25zdCBidWNrZXROYW1lID0gcHJvY2Vzcy5lbnYuSU1BR0VTX0JVQ0tFVFxuY29uc3QgU0lHTkVEX1VSTF9FWFBJUkFUSU9OID0gcHJvY2Vzcy5lbnYuU0lHTkVEX1VSTF9FWFBJUkFUSU9OIHx8IDYwICogNjAgKiAyNCAqIDdcblxuY29uc3QgczMgPSBuZXcgQVdTLlMzKHtcbiAgc2lnbmF0dXJlVmVyc2lvbjogJ3Y0Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gbWlkZHkoYXN5bmMgKGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4gIGNvbnNvbGUubG9nKCdDYWxsZXIgZXZlbnQnLCBldmVudClcbiAgY29uc3QgZ3JvdXBJZCA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzLmdyb3VwSWRcbiAgY29uc3QgdmFsaWRHcm91cElkID0gYXdhaXQgZ3JvdXBFeGlzdHMoZ3JvdXBJZClcbiAgY29uc3QgcGFyc2VkQm9keSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSk7XG5cbiAgaWYgKCF2YWxpZEdyb3VwSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlcnJvcjogJ0dyb3VwIGRvZXMgbm90IGV4aXN0J1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBUT0RPOiBDcmVhdGUgYW4gaW1hZ2VcbiAgY29uc3QgaW1hZ2VJZCA9IHV1aWQudjQoKVxuXG4gIGNvbnN0IG5ld0ltYWdlID0ge1xuICAgICAgZ3JvdXBJZCxcbiAgICAgIGltYWdlSWQsXG4gICAgICAuLi5wYXJzZWRCb2R5LFxuICAgICAgaW1hZ2VVcmw6IGBodHRwczovLyR7YnVja2V0TmFtZX0uczMuYW1hem9uYXdzLmNvbS8ke2ltYWdlSWR9YCxcbiAgICAgIHVzZXJJZDogZ2V0VXNlcklkKGV2ZW50LmhlYWRlcnMuQXV0aG9yaXphdGlvbiksXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfVxuXG4gIGNvbnN0IHVybCA9IGdldFVwbG9hZFVybChpbWFnZUlkKTtcblxuICBhd2FpdCBkb2NDbGllbnQucHV0KHtcbiAgICAgIFRhYmxlTmFtZTogaW1hZ2VzVGFibGUsXG4gICAgICBJdGVtOiBuZXdJbWFnZVxuICB9KS5wcm9taXNlKClcblxuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuZXdJdGVtOiBuZXdJbWFnZSxcbiAgICAgIHVwbG9hZFVybDogdXJsXG4gICAgfSlcbiAgfVxufSlcblxuYXN5bmMgZnVuY3Rpb24gZ3JvdXBFeGlzdHMoZ3JvdXBJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRvY0NsaWVudFxuICAgIC5nZXQoe1xuICAgICAgVGFibGVOYW1lOiBncm91cHNUYWJsZSxcbiAgICAgIEtleToge1xuICAgICAgICBpZDogZ3JvdXBJZFxuICAgICAgfVxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuXG4gIGNvbnNvbGUubG9nKCdHZXQgZ3JvdXA6ICcsIHJlc3VsdClcbiAgcmV0dXJuICEhcmVzdWx0Lkl0ZW1cbn1cblxuZnVuY3Rpb24gZ2V0VXBsb2FkVXJsKGltYWdlSWQ6IHN0cmluZykge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgQnVja2V0OiBidWNrZXROYW1lLFxuICAgIEtleTogaW1hZ2VJZCxcbiAgICBFeHBpcmVzOiBOdW1iZXIoU0lHTkVEX1VSTF9FWFBJUkFUSU9OKVxuICB9XG4gIHJldHVybiBzMy5nZXRTaWduZWRVcmwoJ3B1dE9iamVjdCcsIHBhcmFtcylcbn1cblxuaGFuZGxlci51c2UoXG4gIGNvcnMoe1xuICAgIGNyZWRlbnRpYWxzOiB0cnVlXG4gIH0pXG4pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lambda/http/createImage.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "middy":
/*!************************!*\
  !*** external "middy" ***!
  \************************/
/***/ ((module) => {

module.exports = require("middy");

/***/ }),

/***/ "middy/middlewares":
/*!************************************!*\
  !*** external "middy/middlewares" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("middy/middlewares");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda/http/createImage.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;