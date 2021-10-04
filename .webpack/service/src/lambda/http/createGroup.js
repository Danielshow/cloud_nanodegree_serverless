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

/***/ "./src/Logic/groups.ts":
/*!*****************************!*\
  !*** ./src/Logic/groups.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllGroups\": () => (/* binding */ getAllGroups),\n/* harmony export */   \"createGroup\": () => (/* binding */ createGroup)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_groupsAccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/groupsAccess */ \"./src/data/groupsAccess.ts\");\n/* harmony import */ var src_auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/auth/utils */ \"./src/auth/utils.ts\");\n\n\n\nconst groupsAccess = new _data_groupsAccess__WEBPACK_IMPORTED_MODULE_1__.GroupsAccess();\nasync function getAllGroups(jwtToken) {\n    const userId = (0,src_auth_utils__WEBPACK_IMPORTED_MODULE_2__.getUserId)(jwtToken);\n    const groups = await groupsAccess.getAllGroups(userId);\n    return groups.map((group) => {\n        return {\n            id: group.id,\n            name: group.name,\n            description: group.description,\n            userId: group.userId\n        };\n    });\n}\nasync function createGroup(createGroupRequest, jwtToken) {\n    const userId = (0,src_auth_utils__WEBPACK_IMPORTED_MODULE_2__.getUserId)(jwtToken);\n    const groupId = uuid__WEBPACK_IMPORTED_MODULE_0__.v4();\n    const newGroup = {\n        id: groupId,\n        name: createGroupRequest.name,\n        description: createGroupRequest.description,\n        userId\n    };\n    await groupsAccess.createGroup(newGroup);\n    return newGroup;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTG9naWMvZ3JvdXBzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZS0xMC11ZGFncmFtLWFwcC8uL3NyYy9Mb2dpYy9ncm91cHMudHM/Y2IwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuLi9tb2RlbHMvR3JvdXBcIjtcbmltcG9ydCB7IEdyb3Vwc0FjY2VzcyB9IGZyb20gXCIuLi9kYXRhL2dyb3Vwc0FjY2Vzc1wiO1xuaW1wb3J0IHsgQ3JlYXRlR3JvdXBSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3RzL0NyZWF0ZUdyb3VwUmVxdWVzdFwiO1xuaW1wb3J0IHsgZ2V0VXNlcklkIH0gZnJvbSBcInNyYy9hdXRoL3V0aWxzXCI7XG5cbmNvbnN0IGdyb3Vwc0FjY2VzcyA9IG5ldyBHcm91cHNBY2Nlc3MoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEdyb3Vwcyhqd3RUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxHcm91cFtdPiB7XG4gIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChqd3RUb2tlbik7XG4gIGNvbnN0IGdyb3VwcyA9IGF3YWl0IGdyb3Vwc0FjY2Vzcy5nZXRBbGxHcm91cHModXNlcklkKTtcbiAgcmV0dXJuIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBncm91cC5pZCxcbiAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZ3JvdXAuZGVzY3JpcHRpb24sXG4gICAgICB1c2VySWQ6IGdyb3VwLnVzZXJJZFxuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JvdXAoXG4gIGNyZWF0ZUdyb3VwUmVxdWVzdDogQ3JlYXRlR3JvdXBSZXF1ZXN0LFxuICBqd3RUb2tlbjogc3RyaW5nXG4pOiBQcm9taXNlPEdyb3VwPiB7XG4gIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChqd3RUb2tlbik7XG4gIGNvbnN0IGdyb3VwSWQgPSB1dWlkLnY0KCk7XG4gIGNvbnN0IG5ld0dyb3VwID0ge1xuICAgIGlkOiBncm91cElkLFxuICAgIG5hbWU6IGNyZWF0ZUdyb3VwUmVxdWVzdC5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBjcmVhdGVHcm91cFJlcXVlc3QuZGVzY3JpcHRpb24sXG4gICAgdXNlcklkXG4gIH07XG4gIGF3YWl0IGdyb3Vwc0FjY2Vzcy5jcmVhdGVHcm91cChuZXdHcm91cCk7XG4gIHJldHVybiBuZXdHcm91cDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Logic/groups.ts\n");

/***/ }),

/***/ "./src/auth/utils.ts":
/*!***************************!*\
  !*** ./src/auth/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserId\": () => (/* binding */ getUserId)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getUserId(jwtToken) {\n    const token = jwtToken.replace('Bearer ', '');\n    const { sub } = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.decode)(token);\n    return sub;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC91dGlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2aWNlLTEwLXVkYWdyYW0tYXBwLy4vc3JjL2F1dGgvdXRpbHMudHM/Y2NjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWNvZGUgfSBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgSnd0VG9rZW4gIH0gZnJvbSAnLi9qd3RUb2tlbic7XG5cbi8qKlxuICogUGFyc2UgSldUVG9rZW4gYW5kIHJldHVybiB1c2VySWRcbiAqIEBwYXJhbSBqd3RUb2tlbiBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKGp3dFRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRva2VuID0gand0VG9rZW4ucmVwbGFjZSgnQmVhcmVyICcsICcnKTtcbiAgICBjb25zdCB7IHN1YiB9ID0gZGVjb2RlKHRva2VuKSBhcyBKd3RUb2tlbjtcbiAgICByZXR1cm4gc3ViO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/auth/utils.ts\n");

/***/ }),

/***/ "./src/data/groupsAccess.ts":
/*!**********************************!*\
  !*** ./src/data/groupsAccess.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GroupsAccess\": () => (/* binding */ GroupsAccess)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nclass GroupsAccess {\n    constructor(docClient = createDynamoDBClient(), groupsTable = process.env.GROUPS_TABLE) {\n        this.docClient = docClient;\n        this.groupsTable = groupsTable;\n    }\n    async getAllGroups(userId) {\n        const result = await this.docClient\n            .query({\n            TableName: this.groupsTable,\n            KeyConditionExpression: \"userId = :userId\",\n            ExpressionAttributeValues: {\n                \":userId\": userId\n            }\n        })\n            .promise();\n        const items = result.Items;\n        return items;\n    }\n    async createGroup(group) {\n        await this.docClient\n            .put({\n            TableName: this.groupsTable,\n            Item: group\n        })\n            .promise();\n        return group;\n    }\n}\nfunction createDynamoDBClient() {\n    if (process.env.IS_OFFLINE) {\n        console.log(\"Creating a local DynamoDB instance\");\n        return new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient({\n            region: \"localhost\",\n            endpoint: \"http://localhost:8000\"\n        });\n    }\n    return new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9ncm91cHNBY2Nlc3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZS0xMC11ZGFncmFtLWFwcC8uL3NyYy9kYXRhL2dyb3Vwc0FjY2Vzcy50cz9kMzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRDbGllbnQgfSBmcm9tIFwiYXdzLXNkay9jbGllbnRzL2R5bmFtb2RiXCI7XG5cbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4uL21vZGVscy9Hcm91cFwiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBzQWNjZXNzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NDbGllbnQ6IERvY3VtZW50Q2xpZW50ID0gY3JlYXRlRHluYW1vREJDbGllbnQoKSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdyb3Vwc1RhYmxlID0gcHJvY2Vzcy5lbnYuR1JPVVBTX1RBQkxFXG4gICkge31cblxuICBhc3luYyBnZXRBbGxHcm91cHModXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwW10+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRvY0NsaWVudFxuICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgVGFibGVOYW1lOiB0aGlzLmdyb3Vwc1RhYmxlLFxuICAgICAgICBLZXlDb25kaXRpb25FeHByZXNzaW9uOiBcInVzZXJJZCA9IDp1c2VySWRcIixcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuICAgICAgICAgIFwiOnVzZXJJZFwiOiB1c2VySWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5wcm9taXNlKCk7XG5cbiAgICBjb25zdCBpdGVtcyA9IHJlc3VsdC5JdGVtcztcblxuICAgIHJldHVybiBpdGVtcyBhcyBHcm91cFtdO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlR3JvdXAoZ3JvdXA6IEdyb3VwKTogUHJvbWlzZTxHcm91cD4ge1xuICAgIGF3YWl0IHRoaXMuZG9jQ2xpZW50XG4gICAgICAucHV0KHtcbiAgICAgICAgVGFibGVOYW1lOiB0aGlzLmdyb3Vwc1RhYmxlLFxuICAgICAgICBJdGVtOiBncm91cFxuICAgICAgfSlcbiAgICAgIC5wcm9taXNlKCk7XG5cbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRHluYW1vREJDbGllbnQoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5JU19PRkZMSU5FKSB7XG4gICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBhIGxvY2FsIER5bmFtb0RCIGluc3RhbmNlXCIpO1xuICAgIHJldHVybiBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KHtcbiAgICAgIHJlZ2lvbjogXCJsb2NhbGhvc3RcIixcbiAgICAgIGVuZHBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/groupsAccess.ts\n");

/***/ }),

/***/ "./src/lambda/http/createGroup.ts":
/*!****************************************!*\
  !*** ./src/lambda/http/createGroup.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var middy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! middy */ \"middy\");\n/* harmony import */ var middy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(middy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var middy_middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! middy/middlewares */ \"middy/middlewares\");\n/* harmony import */ var middy_middlewares__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(middy_middlewares__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_Logic_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Logic/groups */ \"./src/Logic/groups.ts\");\n\n\n\n\nconst handler = middy__WEBPACK_IMPORTED_MODULE_1__(async (event) => {\n    console.log('Processing event: ', event);\n    const parsedBody = JSON.parse(event.body);\n    const newItem = {\n        name: parsedBody.name,\n        description: parsedBody.description,\n    };\n    const group = await (0,src_Logic_groups__WEBPACK_IMPORTED_MODULE_3__.createGroup)(newItem, event.headers.Authorization);\n    return {\n        statusCode: 201,\n        body: JSON.stringify({\n            newItem: group\n        })\n    };\n});\nhandler.use((0,middy_middlewares__WEBPACK_IMPORTED_MODULE_2__.cors)());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhL2h0dHAvY3JlYXRlR3JvdXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZS0xMC11ZGFncmFtLWFwcC8uL3NyYy9sYW1iZGEvaHR0cC9jcmVhdGVHcm91cC50cz84N2FkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQgfSBmcm9tICdhd3MtbGFtYmRhJ1xuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXG5pbXBvcnQgKiBhcyBtaWRkeSBmcm9tICdtaWRkeSc7XG5pbXBvcnQgeyBjb3JzIH0gZnJvbSAnbWlkZHkvbWlkZGxld2FyZXMnO1xuaW1wb3J0IHsgY3JlYXRlR3JvdXAgfSBmcm9tICdzcmMvTG9naWMvZ3JvdXBzJztcblxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IG1pZGR5KGFzeW5jIChldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQpOiBQcm9taXNlPEFQSUdhdGV3YXlQcm94eVJlc3VsdD4gPT4ge1xuICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIGV2ZW50OiAnLCBldmVudClcbiAgICBjb25zdCBwYXJzZWRCb2R5ID0gSlNPTi5wYXJzZShldmVudC5ib2R5KTtcbiAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgICBuYW1lOiBwYXJzZWRCb2R5Lm5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwYXJzZWRCb2R5LmRlc2NyaXB0aW9uLFxuICAgIH1cbiAgICBjb25zdCBncm91cCA9IGF3YWl0IGNyZWF0ZUdyb3VwKG5ld0l0ZW0sIGV2ZW50LmhlYWRlcnMuQXV0aG9yaXphdGlvbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiAyMDEsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5ld0l0ZW06IGdyb3VwXG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuaGFuZGxlci51c2UoXG4gIGNvcnMoKVxuKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lambda/http/createGroup.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda/http/createGroup.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;