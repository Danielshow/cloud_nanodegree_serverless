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

/***/ "./src/lambda/s3/sendNotifications.ts":
/*!********************************************!*\
  !*** ./src/lambda/s3/sendNotifications.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst docClient = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__.DynamoDB.DocumentClient();\nconst connectionsTable = process.env.CONNECTIONS_TABLE;\nconst stage = process.env.STAGE;\nconst apiId = process.env.API_ID;\nconst connectionParams = {\n    apiVersion: '2018-11-29',\n    endpoint: `${apiId}.execute-api.us-west-2.amazonaws.com/${stage}`\n};\nconst apiGateway = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__.ApiGatewayManagementApi(connectionParams);\nconst handler = async (event) => {\n    console.log('Processing SNS event: ', JSON.stringify(event));\n    for (const snsRecord of event.Records) {\n        const s3EventStr = snsRecord.Sns.Message;\n        console.log('Processing S3 event record: ', s3EventStr);\n        const s3Event = JSON.parse(s3EventStr);\n        await processS3Event(s3Event);\n    }\n};\nasync function processS3Event(event) {\n    for (const record of event.Records) {\n        const key = record.s3.object.key;\n        console.log('Processing s3 item with Key: ', key);\n        const connections = await docClient.scan({\n            TableName: connectionsTable\n        }).promise();\n        const payload = {\n            imageId: key,\n        };\n        for (const connection of connections.Items) {\n            const connectionId = connection.connectionId;\n            await sendMessageToClient(connectionId, payload);\n        }\n    }\n}\nasync function sendMessageToClient(connectionId, payload) {\n    try {\n        console.log(\"sending message to a connection: \", connectionId);\n        await apiGateway.postToConnection({\n            ConnectionId: connectionId,\n            Data: JSON.stringify(payload)\n        }).promise();\n    }\n    catch (err) {\n        console.log(\"error sending message to a connection: \", JSON.stringify(err));\n        if (err.statusCode == 410) {\n            await docClient.delete({\n                TableName: connectionsTable,\n                Key: {\n                    connectionId: connectionId\n                }\n            }).promise();\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhL3MzL3NlbmROb3RpZmljYXRpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZpY2UtMTAtdWRhZ3JhbS1hcHAvLi9zcmMvbGFtYmRhL3MzL3NlbmROb3RpZmljYXRpb25zLnRzPzFlM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUzNFdmVudCwgU05TRXZlbnQsIFNOU0hhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJ1xuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXG5pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkaydcblxuY29uc3QgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuY29uc3QgY29ubmVjdGlvbnNUYWJsZSA9IHByb2Nlc3MuZW52LkNPTk5FQ1RJT05TX1RBQkxFO1xuY29uc3Qgc3RhZ2UgPSBwcm9jZXNzLmVudi5TVEFHRTtcbmNvbnN0IGFwaUlkID0gcHJvY2Vzcy5lbnYuQVBJX0lEO1xuXG5jb25zdCBjb25uZWN0aW9uUGFyYW1zID0ge1xuICAgIGFwaVZlcnNpb246ICcyMDE4LTExLTI5JyxcbiAgICBlbmRwb2ludDogYCR7YXBpSWR9LmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tLyR7c3RhZ2V9YFxufVxuXG5jb25zdCBhcGlHYXRld2F5ID0gbmV3IEFXUy5BcGlHYXRld2F5TWFuYWdlbWVudEFwaShjb25uZWN0aW9uUGFyYW1zKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBTTlNIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBTTlNFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIFNOUyBldmVudDogJywgSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxuICAgIGZvciAoY29uc3Qgc25zUmVjb3JkIG9mIGV2ZW50LlJlY29yZHMpIHtcbiAgICAgICAgY29uc3QgczNFdmVudFN0ciA9IHNuc1JlY29yZC5TbnMuTWVzc2FnZVxuICAgICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBTMyBldmVudCByZWNvcmQ6ICcsIHMzRXZlbnRTdHIpXG4gICAgICAgIGNvbnN0IHMzRXZlbnQgPSBKU09OLnBhcnNlKHMzRXZlbnRTdHIpXG4gICAgICAgIGF3YWl0IHByb2Nlc3NTM0V2ZW50KHMzRXZlbnQpXG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1MzRXZlbnQgKGV2ZW50OiBTM0V2ZW50KSB7XG4gICAgZm9yIChjb25zdCByZWNvcmQgb2YgZXZlbnQuUmVjb3Jkcykge1xuICAgICAgICBjb25zdCBrZXkgPSByZWNvcmQuczMub2JqZWN0LmtleVxuICAgICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBzMyBpdGVtIHdpdGggS2V5OiAnLCBrZXkpXG5cbiAgICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSBhd2FpdCBkb2NDbGllbnQuc2Nhbih7XG4gICAgICAgICAgICBUYWJsZU5hbWU6IGNvbm5lY3Rpb25zVGFibGVcbiAgICAgICAgfSkucHJvbWlzZSgpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgaW1hZ2VJZDoga2V5LFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIGNvbm5lY3Rpb25zLkl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uSWQgPSBjb25uZWN0aW9uLmNvbm5lY3Rpb25JZFxuICAgICAgICAgICAgYXdhaXQgc2VuZE1lc3NhZ2VUb0NsaWVudChjb25uZWN0aW9uSWQsIHBheWxvYWQpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9DbGllbnQoY29ubmVjdGlvbklkLCBwYXlsb2FkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBtZXNzYWdlIHRvIGEgY29ubmVjdGlvbjogXCIsIGNvbm5lY3Rpb25JZClcbiAgICAgIGF3YWl0IGFwaUdhdGV3YXkucG9zdFRvQ29ubmVjdGlvbih7XG4gICAgICAgIENvbm5lY3Rpb25JZDogY29ubmVjdGlvbklkLFxuICAgICAgICBEYXRhOiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxuICAgICAgfSkucHJvbWlzZSgpXG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBzZW5kaW5nIG1lc3NhZ2UgdG8gYSBjb25uZWN0aW9uOiBcIiwgSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAgICAgIGlmIChlcnIuc3RhdHVzQ29kZSA9PSA0MTApe1xuICAgICAgICAgIGF3YWl0IGRvY0NsaWVudC5kZWxldGUoe1xuICAgICAgICAgICAgVGFibGVOYW1lOiBjb25uZWN0aW9uc1RhYmxlLFxuICAgICAgICAgICAgS2V5OiB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbklkOiBjb25uZWN0aW9uSWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5wcm9taXNlKClcbiAgICAgIH1cbiAgICB9XG59ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lambda/s3/sendNotifications.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda/s3/sendNotifications.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;