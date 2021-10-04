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

/***/ "./src/lambda/auth/authorizer.ts":
/*!***************************************!*\
  !*** ./src/lambda/auth/authorizer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var middy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! middy */ \"middy\");\n/* harmony import */ var middy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(middy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var middy_middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! middy/middlewares */ \"middy/middlewares\");\n/* harmony import */ var middy_middlewares__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(middy_middlewares__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst secretId = process.env.AUTH_0_SECRET_ID;\nconst secretField = process.env.AUTH_0_SECRET_FIELD;\nconst handler = middy__WEBPACK_IMPORTED_MODULE_1__(async (event, context) => {\n    try {\n        const decodedToken = verifyToken(event.authorizationToken, context.AUTH0_SECRET[secretField]);\n        console.log('Authorized');\n        return {\n            principalId: decodedToken.sub,\n            policyDocument: {\n                Version: '2012-10-17',\n                Statement: [\n                    {\n                        Action: 'execute-api:Invoke',\n                        Effect: 'Allow',\n                        Resource: '*'\n                    }\n                ]\n            }\n        };\n    }\n    catch (err) {\n        console.log(\"user was not authorized: \", err.message);\n        return {\n            principalId: 'user',\n            policyDocument: {\n                Version: '2012-10-17',\n                Statement: [\n                    {\n                        Action: 'execute-api:Invoke',\n                        Effect: 'Deny',\n                        Resource: '*'\n                    }\n                ]\n            }\n        };\n    }\n});\nfunction verifyToken(authHeader, secret) {\n    const token = getToken(authHeader);\n    return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, secret);\n}\nfunction getToken(authHeader) {\n    if (!authHeader)\n        throw new Error('No authentication header');\n    if (!authHeader.toLowerCase().startsWith('bearer '))\n        throw new Error('Invalid authentication header');\n    const split = authHeader.split(' ');\n    const token = split[1];\n    return token;\n}\nhandler.use((0,middy_middlewares__WEBPACK_IMPORTED_MODULE_2__.secretsManager)({\n    cache: true,\n    cacheExpiryInMillis: 60000,\n    throwOnFailedCall: true,\n    secrets: {\n        AUTH0_SECRET: secretId\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhL2F1dGgvYXV0aG9yaXplci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlLTEwLXVkYWdyYW0tYXBwLy4vc3JjL2xhbWJkYS9hdXRoL2F1dGhvcml6ZXIudHM/NThiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5QXV0aG9yaXplclJlc3VsdCwgQVBJR2F0ZXdheVRva2VuQXV0aG9yaXplckV2ZW50IH0gZnJvbSAnYXdzLWxhbWJkYSdcbmltcG9ydCB7IHZlcmlmeSB9IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBKd3RUb2tlbiB9IGZyb20gJy4uLy4uL2F1dGgvand0VG9rZW4nO1xuaW1wb3J0ICogYXMgbWlkZHkgZnJvbSAnbWlkZHknO1xuaW1wb3J0IHsgc2VjcmV0c01hbmFnZXIgfSBmcm9tICdtaWRkeS9taWRkbGV3YXJlcyc7XG5cbmNvbnN0IHNlY3JldElkID0gcHJvY2Vzcy5lbnYuQVVUSF8wX1NFQ1JFVF9JRDtcbmNvbnN0IHNlY3JldEZpZWxkID0gcHJvY2Vzcy5lbnYuQVVUSF8wX1NFQ1JFVF9GSUVMRDtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBtaWRkeShhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlUb2tlbkF1dGhvcml6ZXJFdmVudCwgY29udGV4dCk6IFByb21pc2U8QVBJR2F0ZXdheUF1dGhvcml6ZXJSZXN1bHQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gdmVyaWZ5VG9rZW4oZXZlbnQuYXV0aG9yaXphdGlvblRva2VuLCBjb250ZXh0LkFVVEgwX1NFQ1JFVFtzZWNyZXRGaWVsZF0pO1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZWQnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmluY2lwYWxJZDogZGVjb2RlZFRva2VuLnN1YixcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgVmVyc2lvbjogJzIwMTItMTAtMTcnLFxuICAgICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb246ICdleGVjdXRlLWFwaTpJbnZva2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0OiAnQWxsb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzb3VyY2U6ICcqJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgd2FzIG5vdCBhdXRob3JpemVkOiBcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJpbmNpcGFsSWQ6ICd1c2VyJyxcbiAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgVmVyc2lvbjogJzIwMTItMTAtMTcnLFxuICAgICAgICAgICAgICAgIFN0YXRlbWVudDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb246ICdleGVjdXRlLWFwaTpJbnZva2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRWZmZWN0OiAnRGVueScsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXNvdXJjZTogJyonXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufSlcblxuZnVuY3Rpb24gdmVyaWZ5VG9rZW4oYXV0aEhlYWRlcjogc3RyaW5nLCBzZWNyZXQ6IHN0cmluZyk6IEp3dFRva2VuIHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKGF1dGhIZWFkZXIpO1xuICAgIHJldHVybiB2ZXJpZnkodG9rZW4sIHNlY3JldCkgYXMgSnd0VG9rZW47XG59XG5cbmZ1bmN0aW9uIGdldFRva2VuKGF1dGhIZWFkZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFhdXRoSGVhZGVyKSB0aHJvdyBuZXcgRXJyb3IoJ05vIGF1dGhlbnRpY2F0aW9uIGhlYWRlcicpO1xuXG4gICAgaWYgKCFhdXRoSGVhZGVyLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnYmVhcmVyICcpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXV0aGVudGljYXRpb24gaGVhZGVyJyk7XG5cbiAgICBjb25zdCBzcGxpdCA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKTtcbiAgICBjb25zdCB0b2tlbiA9IHNwbGl0WzFdO1xuXG4gICAgcmV0dXJuIHRva2VuO1xufVxuXG5oYW5kbGVyLnVzZShcbiAgICBzZWNyZXRzTWFuYWdlcih7XG4gICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICBjYWNoZUV4cGlyeUluTWlsbGlzOiA2MDAwMCxcbiAgICAgICAgdGhyb3dPbkZhaWxlZENhbGw6IHRydWUsXG4gICAgICAgIHNlY3JldHM6IHtcbiAgICAgICAgICAgIEFVVEgwX1NFQ1JFVDogc2VjcmV0SWRcbiAgICAgICAgfVxuICAgIH0pXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lambda/auth/authorizer.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda/auth/authorizer.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;