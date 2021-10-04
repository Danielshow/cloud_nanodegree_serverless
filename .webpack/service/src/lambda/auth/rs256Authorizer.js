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

/***/ "./src/lambda/auth/rs256Authorizer.ts":
/*!********************************************!*\
  !*** ./src/lambda/auth/rs256Authorizer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst cert = `\n-----BEGIN CERTIFICATE-----\nMIIDDTCCAfWgAwIBAgIJUOZcoG46t4lwMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNV\nBAMTGWRldi1rNW40YmZqaS51cy5hdXRoMC5jb20wHhcNMjEwOTI4MTIzNzA3WhcN\nMzUwNjA3MTIzNzA3WjAkMSIwIAYDVQQDExlkZXYtazVuNGJmamkudXMuYXV0aDAu\nY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnYOeYQz+33SC0xMv\njf+sUBRJZ0Fl0LCK8Lf+JJDAKKRacqdVJSgqNJ0g5//UFItU5KJlm28ic+tA+RYO\n07+vu1a0JH1GP9DCH3NYHWEokhGUZpwWiGdhmc0Vm5mrFcxl3+L+AVhZOgW1NpyG\nK1wmXN6zassiREuVQc9Jq+K/kXp+956cnrrSItrStGJgEtigr2QUDYxEJf52KcBf\nd0xLWSVqAeNsoigjwIFTQWs36W29Yq5Y5iDa9iD7uzNNW5R0vTUZaD31PpdiK+p7\nQCDdtGTrvmqy5vrBNIddcM2sr1ZOpoc61POS1I2O8LjQyyKuY5My71Wu85zAz50Z\nB7ZHIwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSU/YD6rL7x\nl6F6gHqb0GXDRfDljDAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEB\nACTjU9Qbq4XwbuiUqajMtRdVsyAycUwnp1L+kVvH89K8yVUXvFdIf8izpQ/pOePy\nF0y8J+Bv7BTO7fP2r61IK2/ESF6ek6vWtQlGZzdLEtTCWizYyfeSk6E40aKurh8c\nJ4OHxkBYpjlAbYeot1YIOthvd7f1kOlV+HuYV8hFPeFCujJIkaLRzncfhfp5ZaYE\n5uWS/TfUCIkPt5/5NPhgYq9pvL5ieYqQsOJaGBpZCr4J32dqOk/zsNXROnk00A0d\n5ZE/Aworwwl/7sPE5Kuq17bBtVG6laW4z3TvXtajvHcv7AJlLOo9f8h8tbzj9W1m\nOYBi21CJgZu4lJd1eSa2fy4=\n-----END CERTIFICATE-----\n`;\nconst handler = async (event) => {\n    try {\n        const decodedToken = verifyToken(event.authorizationToken);\n        console.log('Authorized');\n        return {\n            principalId: decodedToken.sub,\n            policyDocument: {\n                Version: '2012-10-17',\n                Statement: [\n                    {\n                        Action: 'execute-api:Invoke',\n                        Effect: 'Allow',\n                        Resource: '*'\n                    }\n                ]\n            }\n        };\n    }\n    catch (err) {\n        console.log(\"user was not authorized: \", err.message);\n        return {\n            principalId: 'user',\n            policyDocument: {\n                Version: '2012-10-17',\n                Statement: [\n                    {\n                        Action: 'execute-api:Invoke',\n                        Effect: 'Deny',\n                        Resource: '*'\n                    }\n                ]\n            }\n        };\n    }\n};\nfunction verifyToken(authHeader) {\n    const token = getToken(authHeader);\n    return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.verify)(token, cert, { algorithms: ['RS256'] });\n}\nfunction getToken(authHeader) {\n    if (!authHeader)\n        throw new Error('No authentication header');\n    if (!authHeader.toLowerCase().startsWith('bearer '))\n        throw new Error('Invalid authentication header');\n    const split = authHeader.split(' ');\n    const token = split[1];\n    return token;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhL2F1dGgvcnMyNTZBdXRob3JpemVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZpY2UtMTAtdWRhZ3JhbS1hcHAvLi9zcmMvbGFtYmRhL2F1dGgvcnMyNTZBdXRob3JpemVyLnRzPzkzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheUF1dGhvcml6ZXJSZXN1bHQsIEFQSUdhdGV3YXlUb2tlbkF1dGhvcml6ZXJFdmVudCB9IGZyb20gJ2F3cy1sYW1iZGEnXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcbmltcG9ydCB7IHZlcmlmeSB9IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBKd3RUb2tlbiB9IGZyb20gJ3NyYy9hdXRoL2p3dFRva2VuJztcblxuXG5jb25zdCBjZXJ0ID0gYFxuLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlERFRDQ0FmV2dBd0lCQWdJSlVPWmNvRzQ2dDRsd01BMEdDU3FHU0liM0RRRUJDd1VBTUNReElqQWdCZ05WXG5CQU1UR1dSbGRpMXJOVzQwWW1acWFTNTFjeTVoZFhSb01DNWpiMjB3SGhjTk1qRXdPVEk0TVRJek56QTNXaGNOXG5NelV3TmpBM01USXpOekEzV2pBa01TSXdJQVlEVlFRREV4bGtaWFl0YXpWdU5HSm1hbWt1ZFhNdVlYVjBhREF1XG5ZMjl0TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFuWU9lWVF6KzMzU0MweE12XG5qZitzVUJSSlowRmwwTENLOExmK0pKREFLS1JhY3FkVkpTZ3FOSjBnNS8vVUZJdFU1S0psbTI4aWMrdEErUllPXG4wNyt2dTFhMEpIMUdQOURDSDNOWUhXRW9raEdVWnB3V2lHZGhtYzBWbTVtckZjeGwzK0wrQVZoWk9nVzFOcHlHXG5LMXdtWE42emFzc2lSRXVWUWM5SnErSy9rWHArOTU2Y25yclNJdHJTdEdKZ0V0aWdyMlFVRFl4RUpmNTJLY0JmXG5kMHhMV1NWcUFlTnNvaWdqd0lGVFFXczM2VzI5WXE1WTVpRGE5aUQ3dXpOTlc1UjB2VFVaYUQzMVBwZGlLK3A3XG5RQ0RkdEdUcnZtcXk1dnJCTklkZGNNMnNyMVpPcG9jNjFQT1MxSTJPOExqUXl5S3VZNU15NzFXdTg1ekF6NTBaXG5CN1pISXdJREFRQUJvMEl3UURBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUIwR0ExVWREZ1FXQkJTVS9ZRDZyTDd4XG5sNkY2Z0hxYjBHWERSZkRsakRBT0JnTlZIUThCQWY4RUJBTUNBb1F3RFFZSktvWklodmNOQVFFTEJRQURnZ0VCXG5BQ1RqVTlRYnE0WHdidWlVcWFqTXRSZFZzeUF5Y1V3bnAxTCtrVnZIODlLOHlWVVh2RmRJZjhpenBRL3BPZVB5XG5GMHk4SitCdjdCVE83ZlAycjYxSUsyL0VTRjZlazZ2V3RRbEdaemRMRXRUQ1dpell5ZmVTazZFNDBhS3VyaDhjXG5KNE9IeGtCWXBqbEFiWWVvdDFZSU90aHZkN2Yxa09sVitIdVlWOGhGUGVGQ3VqSklrYUxSem5jZmhmcDVaYVlFXG41dVdTL1RmVUNJa1B0NS81TlBoZ1lxOXB2TDVpZVlxUXNPSmFHQnBaQ3I0SjMyZHFPay96c05YUk9uazAwQTBkXG41WkUvQXdvcnd3bC83c1BFNUt1cTE3YkJ0Vkc2bGFXNHozVHZYdGFqdkhjdjdBSmxMT285ZjhoOHRiemo5VzFtXG5PWUJpMjFDSmdadTRsSmQxZVNhMmZ5ND1cbi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS1cbmA7XG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheVRva2VuQXV0aG9yaXplckV2ZW50KTogUHJvbWlzZTxBUElHYXRld2F5QXV0aG9yaXplclJlc3VsdD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHZlcmlmeVRva2VuKGV2ZW50LmF1dGhvcml6YXRpb25Ub2tlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBdXRob3JpemVkJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHByaW5jaXBhbElkOiBkZWNvZGVkVG9rZW4uc3ViLFxuICAgICAgICAgICAgICBwb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICAgICAgVmVyc2lvbjogJzIwMTItMTAtMTcnLFxuICAgICAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb246ICdleGVjdXRlLWFwaTpJbnZva2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3Q6ICdBbGxvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlc291cmNlOiAnKidcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgd2FzIG5vdCBhdXRob3JpemVkOiBcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHByaW5jaXBhbElkOiAndXNlcicsXG4gICAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgICBWZXJzaW9uOiAnMjAxMi0xMC0xNycsXG4gICAgICAgICAgICAgICAgICBTdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbjogJ2V4ZWN1dGUtYXBpOkludm9rZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdDogJ0RlbnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNvdXJjZTogJyonXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgXG4gICAgICB9XG59XG5cblxuZnVuY3Rpb24gdmVyaWZ5VG9rZW4oYXV0aEhlYWRlcjogc3RyaW5nKTogSnd0VG9rZW4ge1xuICAgIGNvbnN0IHRva2VuID0gIGdldFRva2VuKGF1dGhIZWFkZXIpO1xuICAgIHJldHVybiB2ZXJpZnkoXG4gICAgICAgIHRva2VuLFxuICAgICAgICBjZXJ0LFxuICAgICAgICB7IGFsZ29yaXRobXM6IFsnUlMyNTYnXSB9XG4gICAgKSBhcyBKd3RUb2tlblxufVxuXG5cbmZ1bmN0aW9uIGdldFRva2VuKGF1dGhIZWFkZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFhdXRoSGVhZGVyKSB0aHJvdyBuZXcgRXJyb3IoJ05vIGF1dGhlbnRpY2F0aW9uIGhlYWRlcicpO1xuXG4gICAgaWYgKCFhdXRoSGVhZGVyLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnYmVhcmVyICcpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXV0aGVudGljYXRpb24gaGVhZGVyJyk7XG5cbiAgICBjb25zdCBzcGxpdCA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKTtcbiAgICBjb25zdCB0b2tlbiA9IHNwbGl0WzFdO1xuXG4gICAgcmV0dXJuIHRva2VuO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lambda/auth/rs256Authorizer.ts\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda/auth/rs256Authorizer.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;