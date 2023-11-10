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

/***/ "./src/Observer/Subject.ts":
/*!*********************************!*\
  !*** ./src/Observer/Subject.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observer/observerEvents */ \"./src/Observer/observerEvents.ts\");\n\nclass Subject {\n    constructor() {\n        this.events = _Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__.observerEventsContainer;\n    }\n    subscribe(eventName, callback) {\n        if (!(eventName in this.events)) {\n            this.events[eventName] = [];\n        }\n        this.events[eventName].push(callback);\n    }\n    unsubscribe(eventName) {\n        delete this.events[eventName];\n    }\n    notify(eventName, argc) {\n        if (eventName in this.events) {\n            for (const callback of this.events[eventName]) {\n                callback(argc);\n            }\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Subject());\n\n\n//# sourceURL=webpack://new/./src/Observer/Subject.ts?");

/***/ }),

/***/ "./src/Observer/observerEvents.ts":
/*!****************************************!*\
  !*** ./src/Observer/observerEvents.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ObserverEvents: () => (/* binding */ ObserverEvents),\n/* harmony export */   observerEventsContainer: () => (/* binding */ observerEventsContainer)\n/* harmony export */ });\n/* eslint-disable @typescript-eslint/no-explicit-any */\nvar ObserverEvents;\n(function (ObserverEvents) {\n    ObserverEvents[\"CALCULATED\"] = \"calculated\";\n    ObserverEvents[\"SHOW_ERROR\"] = \"showError\";\n    ObserverEvents[\"EVALUATE_BUTTON_CLICK\"] = \"evaluateButtonClick\";\n    ObserverEvents[\"EVALUATE_EXPRESSION\"] = \"evaluateExpression\";\n})(ObserverEvents || (ObserverEvents = {}));\nconst observerEventsContainer = {\n    [ObserverEvents.CALCULATED]: [],\n    [ObserverEvents.SHOW_ERROR]: [],\n    [ObserverEvents.EVALUATE_BUTTON_CLICK]: [],\n    [ObserverEvents.EVALUATE_EXPRESSION]: [],\n};\n\n\n//# sourceURL=webpack://new/./src/Observer/observerEvents.ts?");

/***/ }),

/***/ "./src/config/operations.ts":
/*!**********************************!*\
  !*** ./src/config/operations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_regexCalculation_FactorialProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/regexCalculation/FactorialProcessor */ \"./src/services/regexCalculation/FactorialProcessor.ts\");\n/* harmony import */ var _services_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/regexCalculation/RegularProcessor */ \"./src/services/regexCalculation/RegularProcessor.ts\");\n/* harmony import */ var _services_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/regexCalculation/TrigonometryProcessor */ \"./src/services/regexCalculation/TrigonometryProcessor.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constants */ \"./src/services/constants.ts\");\n\n\n\n\n\nconst operations = {\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.PLUS]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.ADD_AND_SUB,\n        calculate: (a, b) => a + b,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _services_constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorConstructor: new _services_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.MINUS]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.ADD_AND_SUB,\n        calculate: (a, b) => a - b,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _services_constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorConstructor: new _services_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.MULTIPLICATION]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.MULT_AND_DIVISION,\n        calculate: (a, b) => a * b,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _services_constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorConstructor: new _services_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.DIVISION]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.MULT_AND_DIVISION,\n        calculate: (a, b) => a / b,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _services_constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorConstructor: new _services_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.COS]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.TRIGONOMETRIC,\n        calculate: Math.cos,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.UNARY,\n        associativity: _services_constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorConstructor: new _services_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__.TrigonometryProcessor(),\n    },\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.SIN]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.TRIGONOMETRIC,\n        calculate: Math.sin,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.TRIGONOMETRIC,\n        associativity: _services_constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorConstructor: new _services_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__.TrigonometryProcessor()\n    },\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.TAN]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.TRIGONOMETRIC,\n        calculate: Math.tan,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.TRIGONOMETRIC,\n        associativity: _services_constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorConstructor: new _services_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__.TrigonometryProcessor()\n    },\n    [_services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.FACTORIAL]: {\n        priority: _services_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.FACTORIAL,\n        calculate: _utils_utils__WEBPACK_IMPORTED_MODULE_3__.factorial,\n        type: _services_constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.UNARY,\n        processorConstructor: new _services_regexCalculation_FactorialProcessor__WEBPACK_IMPORTED_MODULE_0__.FactorialProcessor()\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze({\n    operations,\n    calculationMethod: _services_constants__WEBPACK_IMPORTED_MODULE_4__.calculationMethods.POLISH_NOTATION\n}));\n\n\n//# sourceURL=webpack://new/./src/config/operations.ts?");

/***/ }),

/***/ "./src/controller/CalculatorController.ts":
/*!************************************************!*\
  !*** ./src/controller/CalculatorController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observer/observerEvents */ \"./src/Observer/observerEvents.ts\");\n/* harmony import */ var _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\");\n\n\nclass CalculatorController {\n    constructor() {\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_BUTTON_CLICK, (expression) => {\n            _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notify(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_EXPRESSION, expression);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorController);\n\n\n//# sourceURL=webpack://new/./src/controller/CalculatorController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_CalculatorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/CalculatorView */ \"./src/view/CalculatorView.ts\");\n/* harmony import */ var _model_CalculatorModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/CalculatorModel */ \"./src/model/CalculatorModel.ts\");\n/* harmony import */ var _controller_CalculatorController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/CalculatorController */ \"./src/controller/CalculatorController.ts\");\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _services_servicesOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/servicesOptions */ \"./src/services/servicesOptions.ts\");\n\n\n\n\n\nnew _view_CalculatorView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nnew _model_CalculatorModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_services_servicesOptions__WEBPACK_IMPORTED_MODULE_4__.services[_config_operations__WEBPACK_IMPORTED_MODULE_3__[\"default\"].calculationMethod]);\nnew _controller_CalculatorController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n\n//# sourceURL=webpack://new/./src/index.ts?");

/***/ }),

/***/ "./src/model/CalculatorModel.ts":
/*!**************************************!*\
  !*** ./src/model/CalculatorModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observer/observerEvents */ \"./src/Observer/observerEvents.ts\");\n/* harmony import */ var _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\");\n\n\nclass CalculatorModel {\n    constructor(service) {\n        this.calculationService = service;\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_EXPRESSION, this.handleEvaluateExpression.bind(this));\n    }\n    handleEvaluateExpression(expression) {\n        try {\n            const result = this.evaluate(expression);\n            _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notify(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.CALCULATED, result);\n        }\n        catch (error) {\n            if (error instanceof Error) {\n                _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notify(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.SHOW_ERROR, error.message);\n            }\n        }\n    }\n    evaluate(expression) {\n        return this.calculationService.evaluate(expression);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorModel);\n\n\n//# sourceURL=webpack://new/./src/model/CalculatorModel.ts?");

/***/ }),

/***/ "./src/regex/factorialRegex.ts":
/*!*************************************!*\
  !*** ./src/regex/factorialRegex.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FACTORIAL_EXPRESSION: () => (/* binding */ FACTORIAL_EXPRESSION)\n/* harmony export */ });\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/constants */ \"./src/services/constants.ts\");\n\n// FACTORIAL_EXPRESSION RegExp consist of 3 parts:\n// - (\\\\d+\\\\.?\\\\d*): Matches a number,\n// - \\\\s*: Matches optional whitespace\n// - ${MathOperators.FACTORIAL}: Matches factorial operator\nconst FACTORIAL_EXPRESSION = new RegExp(`(\\\\d+\\\\.?\\\\d*)\\\\s*${_services_constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators.FACTORIAL}`);\n\n\n//# sourceURL=webpack://new/./src/regex/factorialRegex.ts?");

/***/ }),

/***/ "./src/regex/parenthesesRegex.ts":
/*!***************************************!*\
  !*** ./src/regex/parenthesesRegex.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PARENTHESES_EXPRESSION: () => (/* binding */ PARENTHESES_EXPRESSION)\n/* harmony export */ });\n// PARENTHESES_EXPRESSION consists of 3 parts:\n//   - \\( : matches an open parenthesis \n//   - [^()]* : matches any characters except for parentheses, allowing for nested parentheses\n//   - \\) : matches a closing parenthesis \nconst PARENTHESES_EXPRESSION = /(\\([^()]*\\))/g;\n\n\n//# sourceURL=webpack://new/./src/regex/parenthesesRegex.ts?");

/***/ }),

/***/ "./src/regex/tokenizeRegex.ts":
/*!************************************!*\
  !*** ./src/regex/tokenizeRegex.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TOKENIZE_REGEX_PATTERN: () => (/* binding */ TOKENIZE_REGEX_PATTERN)\n/* harmony export */ });\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/constants */ \"./src/services/constants.ts\");\n\n\nconst escapedOperators = [...Object.keys(_config_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations), ...Object.values(_services_constants__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators)]\n    .map((operator) => (operator !== '-' ? operator : '\\\\' + operator))\n    .map((operator) => operator.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'));\nconst validOperatorsPattern = escapedOperators.join('|');\nconst invalidCharactersPattern = '[^\\\\d\\\\s' + validOperatorsPattern + ']';\n// TOKENIZE_REGEX_PATTERN RegExp consist of 3 parts:\n// - `\\\\d+(\\\\.\\\\d+)?`: Matches numbers\n// - `${validOperatorsPattern}`: Matches valid operators.\n// - `${invalidCharactersPattern}`: Matches invalid characters.\nconst TOKENIZE_REGEX_PATTERN = new RegExp(`\\\\d+(\\\\.\\\\d+)?|${validOperatorsPattern}|${invalidCharactersPattern}`, 'g');\n\n\n//# sourceURL=webpack://new/./src/regex/tokenizeRegex.ts?");

/***/ }),

/***/ "./src/regex/unaryMinusExpression.ts":
/*!*******************************************!*\
  !*** ./src/regex/unaryMinusExpression.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UNARY_MINUS_EXPRESSION: () => (/* binding */ UNARY_MINUS_EXPRESSION)\n/* harmony export */ });\n// UNARY_MINUS_EXPRESSION RegExp consist of 2 parts:\n// - (([\\\\+\\\\-]?[\\\\d]+): Matches optional sign (+ or -) followed by one or more digits\n// - ([\\\\+\\\\-\\\\*\\\\/]))*: Matches an operator (+, -, *, or /) and represents a binary operation\n// - The whole regex can match a single unary minus, e.g -1, as well as unary minus in a binary operation, e.g 1*-2\nconst UNARY_MINUS_EXPRESSION = new RegExp(`(([\\\\+\\\\-]?[\\\\d]+)([\\\\+\\\\-\\\\*\\\\/]))*([\\\\+\\\\-]?[\\\\d]+)`);\n\n\n//# sourceURL=webpack://new/./src/regex/unaryMinusExpression.ts?");

/***/ }),

/***/ "./src/services/constants.ts":
/*!***********************************!*\
  !*** ./src/services/constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Associativity: () => (/* binding */ Associativity),\n/* harmony export */   Errors: () => (/* binding */ Errors),\n/* harmony export */   MathOperationPriority: () => (/* binding */ MathOperationPriority),\n/* harmony export */   MathOperators: () => (/* binding */ MathOperators),\n/* harmony export */   OperatorType: () => (/* binding */ OperatorType),\n/* harmony export */   SpecialOperators: () => (/* binding */ SpecialOperators),\n/* harmony export */   calculationMethods: () => (/* binding */ calculationMethods)\n/* harmony export */ });\nvar calculationMethods;\n(function (calculationMethods) {\n    calculationMethods[\"POLISH_NOTATION\"] = \"polishNotation\";\n    calculationMethods[\"REGEX_CALCULATION\"] = \"regexCalculation\";\n})(calculationMethods || (calculationMethods = {}));\nvar MathOperators;\n(function (MathOperators) {\n    MathOperators[\"PLUS\"] = \"+\";\n    MathOperators[\"MINUS\"] = \"-\";\n    MathOperators[\"MULTIPLICATION\"] = \"*\";\n    MathOperators[\"DIVISION\"] = \"/\";\n    MathOperators[\"COS\"] = \"cos\";\n    MathOperators[\"SIN\"] = \"sin\";\n    MathOperators[\"TAN\"] = \"tan\";\n    MathOperators[\"FACTORIAL\"] = \"!\";\n})(MathOperators || (MathOperators = {}));\nvar Errors;\n(function (Errors) {\n    Errors[\"INVALID_SYMBOL\"] = \"Invalid symbols in the input expression.\";\n    Errors[\"INVALID_EXPRESSION\"] = \"Invalid math expression\";\n    Errors[\"UNMATCHED_PARENTHESES\"] = \"Unmatched parentheses\";\n})(Errors || (Errors = {}));\nvar SpecialOperators;\n(function (SpecialOperators) {\n    SpecialOperators[\"LEFT_BRACKET\"] = \"(\";\n    SpecialOperators[\"RIGHT_BRACKET\"] = \")\";\n    SpecialOperators[\"DOT\"] = \".\";\n    SpecialOperators[\"CLEAR_ALL\"] = \"C\";\n})(SpecialOperators || (SpecialOperators = {}));\nvar Associativity;\n(function (Associativity) {\n    Associativity[\"LEFT\"] = \"left\";\n    Associativity[\"RIGHT\"] = \"right\";\n})(Associativity || (Associativity = {}));\nvar MathOperationPriority;\n(function (MathOperationPriority) {\n    MathOperationPriority[MathOperationPriority[\"ADD_AND_SUB\"] = 1] = \"ADD_AND_SUB\";\n    MathOperationPriority[MathOperationPriority[\"MULT_AND_DIVISION\"] = 2] = \"MULT_AND_DIVISION\";\n    MathOperationPriority[MathOperationPriority[\"FACTORIAL\"] = 3] = \"FACTORIAL\";\n    MathOperationPriority[MathOperationPriority[\"TRIGONOMETRIC\"] = 4] = \"TRIGONOMETRIC\";\n    MathOperationPriority[MathOperationPriority[\"EXPONENTIATION\"] = 5] = \"EXPONENTIATION\";\n    MathOperationPriority[MathOperationPriority[\"PARENTHESES\"] = 6] = \"PARENTHESES\";\n})(MathOperationPriority || (MathOperationPriority = {}));\nvar OperatorType;\n(function (OperatorType) {\n    OperatorType[\"BINARY\"] = \"binary\";\n    OperatorType[\"UNARY\"] = \"unary\";\n    OperatorType[\"TRIGONOMETRIC\"] = \"trigonometric\";\n})(OperatorType || (OperatorType = {}));\n\n\n//# sourceURL=webpack://new/./src/services/constants.ts?");

/***/ }),

/***/ "./src/services/polishNotation/LeftBracketsProcessor.ts":
/*!**************************************************************!*\
  !*** ./src/services/polishNotation/LeftBracketsProcessor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LeftBracketProcessor: () => (/* binding */ LeftBracketProcessor)\n/* harmony export */ });\nclass LeftBracketProcessor {\n    process(expressionOperators, _output, token) {\n        expressionOperators.push(token);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/LeftBracketsProcessor.ts?");

/***/ }),

/***/ "./src/services/polishNotation/OperatorProcessor.ts":
/*!**********************************************************!*\
  !*** ./src/services/polishNotation/OperatorProcessor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OperatorProcessor: () => (/* binding */ OperatorProcessor)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/services/constants.ts\");\n\nclass OperatorProcessor {\n    constructor(availableOperators) {\n        this.availableOperators = availableOperators;\n    }\n    process(expressionOperators, output, token) {\n        while (expressionOperators.length &&\n            expressionOperators[expressionOperators.length - 1] !== _constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET &&\n            (this.availableOperators[expressionOperators[expressionOperators.length - 1]].priority >\n                this.availableOperators[token].priority ||\n                (this.availableOperators[expressionOperators[expressionOperators.length - 1]].priority ===\n                    this.availableOperators[token].priority &&\n                    this.availableOperators[token].associativity === _constants__WEBPACK_IMPORTED_MODULE_0__.Associativity.LEFT))) {\n            output.push(expressionOperators.pop());\n        }\n        expressionOperators.push(token);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/OperatorProcessor.ts?");

/***/ }),

/***/ "./src/services/polishNotation/PolishNotation.ts":
/*!*******************************************************!*\
  !*** ./src/services/polishNotation/PolishNotation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PolishNotation: () => (/* binding */ PolishNotation)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _regex_tokenizeRegex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../regex/tokenizeRegex */ \"./src/regex/tokenizeRegex.ts\");\n/* harmony import */ var _LeftBracketsProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftBracketsProcessor */ \"./src/services/polishNotation/LeftBracketsProcessor.ts\");\n/* harmony import */ var _RightBracketsProcessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightBracketsProcessor */ \"./src/services/polishNotation/RightBracketsProcessor.ts\");\n/* harmony import */ var _OperatorProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OperatorProcessor */ \"./src/services/polishNotation/OperatorProcessor.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n\n\n\n\n\n\nclass PolishNotation {\n    constructor(operators) {\n        this.availableOperators = operators;\n        this.operatorProcessors = this.initializeOperatorProcessor(operators);\n    }\n    initializeOperatorProcessor(operators) {\n        const mathOperators = [...Object.keys(operators), _constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.CLEAR_ALL, _constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.DOT];\n        return Object.assign(Object.assign({}, mathOperators.reduce((obj, key) => {\n            if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(key)) {\n                obj[key] = new _OperatorProcessor__WEBPACK_IMPORTED_MODULE_4__.OperatorProcessor(this.availableOperators);\n            }\n            return obj;\n        }, {})), { [_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET]: new _LeftBracketsProcessor__WEBPACK_IMPORTED_MODULE_2__.LeftBracketProcessor(), [_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.RIGHT_BRACKET]: new _RightBracketsProcessor__WEBPACK_IMPORTED_MODULE_3__.RightBracketProcessor() });\n    }\n    isSpecialOperator(token) {\n        return Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators).includes(token);\n    }\n    executeOperatorProcessor(expressionOperators, output, token) {\n        const opProcessor = this.operatorProcessors[token];\n        if (opProcessor) {\n            opProcessor.process(expressionOperators, output, token);\n        }\n        else {\n            throw new Error('There is no processor for this token!');\n        }\n    }\n    infixToPostfix(expression) {\n        const output = [];\n        const expressionOperators = [];\n        let stringOperators = '';\n        expression.forEach((token) => {\n            stringOperators += token;\n            if (!isNaN(parseFloat(token))) {\n                output.push(token);\n            }\n            else if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(token) || this.isSpecialOperator(token)) {\n                this.executeOperatorProcessor(expressionOperators, output, token);\n                stringOperators = '';\n            }\n            else if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(stringOperators)) {\n                this.executeOperatorProcessor(expressionOperators, output, stringOperators);\n                stringOperators = '';\n            }\n        });\n        output.push(...expressionOperators.reverse());\n        return output;\n    }\n    tokenize(expression) {\n        if (expression.trim() === '') {\n            return ['0'];\n        }\n        const expressionWithoutSpaces = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.reduceAllSpaces)(expression);\n        const pattern = _regex_tokenizeRegex__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN;\n        const tokens = expressionWithoutSpaces.match(pattern);\n        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_SYMBOL);\n        }\n        const result = [];\n        for (let i = 0; i < tokens.length; i++) {\n            const token = tokens[i];\n            const prevToken = tokens[i - 1];\n            if (token === _constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators.MINUS &&\n                (!prevToken || prevToken === _constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(prevToken))) {\n                const nextToken = tokens[i + 1];\n                if (nextToken && !isNaN(parseFloat(nextToken))) {\n                    result.push(token + nextToken);\n                    i++;\n                }\n                else {\n                    result.push(token);\n                }\n            }\n            else {\n                result.push(token);\n            }\n        }\n        return result;\n    }\n    evaluateBinaryOperator(calculate, stack = []) {\n        const a = stack.pop();\n        const b = stack.pop();\n        stack.push(calculate(b, a));\n    }\n    evaluateUnaryOperator(calculate, stack = []) {\n        const a = stack.pop();\n        stack.push(calculate(a));\n    }\n    evaluate(expression) {\n        const tokens = this.tokenize(expression) || [];\n        const postfixExpression = this.infixToPostfix(tokens);\n        const stack = [];\n        postfixExpression.forEach((token) => {\n            if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(token)) {\n                stack.push(parseFloat(token));\n            }\n            else {\n                const operator = this.availableOperators[token];\n                if (operator.type === _constants__WEBPACK_IMPORTED_MODULE_0__.OperatorType.BINARY) {\n                    this.evaluateBinaryOperator(operator.calculate, stack);\n                }\n                else if (operator.type === _constants__WEBPACK_IMPORTED_MODULE_0__.OperatorType.UNARY || operator.type === _constants__WEBPACK_IMPORTED_MODULE_0__.OperatorType.TRIGONOMETRIC) {\n                    this.evaluateUnaryOperator(operator.calculate, stack);\n                }\n            }\n        });\n        const result = stack.pop();\n        if (!result && result !== 0) {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        return result;\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/PolishNotation.ts?");

/***/ }),

/***/ "./src/services/polishNotation/RightBracketsProcessor.ts":
/*!***************************************************************!*\
  !*** ./src/services/polishNotation/RightBracketsProcessor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RightBracketProcessor: () => (/* binding */ RightBracketProcessor)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/services/constants.ts\");\n\nclass RightBracketProcessor {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    process(expressionOperators, output, _token) {\n        while (expressionOperators.length &&\n            expressionOperators[expressionOperators.length - 1] !== _constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET) {\n            output.push(expressionOperators.pop());\n        }\n        expressionOperators.pop();\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/RightBracketsProcessor.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/FactorialProcessor.ts":
/*!*************************************************************!*\
  !*** ./src/services/regexCalculation/FactorialProcessor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FactorialProcessor: () => (/* binding */ FactorialProcessor)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _regex_factorialRegex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../regex/factorialRegex */ \"./src/regex/factorialRegex.ts\");\n\n\n\nclass FactorialProcessor {\n    process(expression, highestPriorityOperator) {\n        const subExpressionMatch = expression.match(_regex_factorialRegex__WEBPACK_IMPORTED_MODULE_2__.FACTORIAL_EXPRESSION);\n        if (subExpressionMatch === null) {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        const operand1 = parseFloat(subExpressionMatch[1]);\n        return {\n            subExpressionResult: _config_operations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].operations[highestPriorityOperator].calculate(operand1),\n            subExpressionRegex: _regex_factorialRegex__WEBPACK_IMPORTED_MODULE_2__.FACTORIAL_EXPRESSION\n        };\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/FactorialProcessor.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/RegexCalculation.ts":
/*!***********************************************************!*\
  !*** ./src/services/regexCalculation/RegexCalculation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegexCalculation: () => (/* binding */ RegexCalculation)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var _regex_tokenizeRegex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../regex/tokenizeRegex */ \"./src/regex/tokenizeRegex.ts\");\n/* harmony import */ var _regex_parenthesesRegex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../regex/parenthesesRegex */ \"./src/regex/parenthesesRegex.ts\");\n\n\n\n\nclass RegexCalculation {\n    constructor(operations) {\n        this.availableOperators = operations;\n    }\n    findhighestPriorityOperator(operatorRegex, expression) {\n        let highestPriorityOperator = null;\n        let highestPriority = -1;\n        let match;\n        while ((match = operatorRegex.exec(expression)) !== null) {\n            const operator = match[0];\n            if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isMathOperator)(operator)) {\n                const currentPriority = this.availableOperators[operator].priority;\n                if (currentPriority > highestPriority) {\n                    highestPriority = currentPriority;\n                    highestPriorityOperator = operator;\n                }\n            }\n        }\n        return highestPriorityOperator;\n    }\n    calculate(tokens) {\n        const expression = tokens.join('');\n        const operatorRegex = new RegExp(Object.keys(this.availableOperators).map(_utils_utils__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp).join('|'), 'g');\n        let highestPriorityOperator = this.findhighestPriorityOperator(operatorRegex, expression);\n        if (highestPriorityOperator === _constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators.MINUS && expression[0] === _constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators.MINUS) {\n            highestPriorityOperator = this.findhighestPriorityOperator(operatorRegex, expression.slice(1));\n        }\n        if (highestPriorityOperator === null) {\n            if (tokens.length === 1) {\n                return parseFloat(tokens[0]);\n            }\n            else {\n                throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n            }\n        }\n        const { subExpressionResult, subExpressionRegex } = this.availableOperators[highestPriorityOperator].processorConstructor.process(expression, highestPriorityOperator);\n        const updatedExpression = expression.replace(subExpressionRegex, subExpressionResult.toString());\n        const updatedTokens = updatedExpression.match(_regex_tokenizeRegex__WEBPACK_IMPORTED_MODULE_2__.TOKENIZE_REGEX_PATTERN);\n        if (!updatedTokens) {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        if (updatedTokens[0] === _constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators.MINUS) {\n            updatedTokens.splice(0, 2, updatedTokens[0] + updatedTokens[1]);\n        }\n        return this.calculate(updatedTokens);\n    }\n    evaluateExpression(tokens) {\n        while (tokens.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET)) {\n            const match = tokens.join('').match(_regex_parenthesesRegex__WEBPACK_IMPORTED_MODULE_3__.PARENTHESES_EXPRESSION);\n            if (!match) {\n                throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.UNMATCHED_PARENTHESES);\n            }\n            const subExpression = match[0].slice(1, -1);\n            const subResult = this.evaluate(subExpression);\n            tokens = tokens.join('').replace(_regex_parenthesesRegex__WEBPACK_IMPORTED_MODULE_3__.PARENTHESES_EXPRESSION, subResult.toString()).match(_regex_tokenizeRegex__WEBPACK_IMPORTED_MODULE_2__.TOKENIZE_REGEX_PATTERN) || [];\n        }\n        tokens = [this.calculate(tokens).toString()];\n        if (tokens.length !== 1) {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        return parseFloat(tokens[0]);\n    }\n    evaluate(expression) {\n        if (expression.trim() === '') {\n            return 0;\n        }\n        const tokens = expression.match(_regex_tokenizeRegex__WEBPACK_IMPORTED_MODULE_2__.TOKENIZE_REGEX_PATTERN);\n        const expressionWithoutSpaces = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.reduceAllSpaces)(expression);\n        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        return this.evaluateExpression(tokens);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/RegexCalculation.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/RegularProcessor.ts":
/*!***********************************************************!*\
  !*** ./src/services/regexCalculation/RegularProcessor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegularProcessor: () => (/* binding */ RegularProcessor)\n/* harmony export */ });\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var _regex_unaryMinusExpression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../regex/unaryMinusExpression */ \"./src/regex/unaryMinusExpression.ts\");\n\n\n\n\nclass RegularProcessor {\n    process(expression, highestPriorityOperator) {\n        const operatorRegexPattern = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.escapeRegExp)(highestPriorityOperator);\n        let subExpressionRegex = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getRegularExpressionRegex)(operatorRegexPattern);\n        const subExpressionMatch = expression.match(subExpressionRegex);\n        const unaryMinusExpressionMatch = expression.match(_regex_unaryMinusExpression__WEBPACK_IMPORTED_MODULE_3__.UNARY_MINUS_EXPRESSION);\n        let subExpressionResult;\n        if (subExpressionMatch) {\n            const operand1 = parseFloat(subExpressionMatch[1]);\n            const operand2 = parseFloat(subExpressionMatch[2]);\n            subExpressionResult = _config_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations[highestPriorityOperator].calculate(operand1, operand2);\n        }\n        else if (unaryMinusExpressionMatch) {\n            subExpressionResult = parseFloat(expression);\n            subExpressionRegex = _regex_unaryMinusExpression__WEBPACK_IMPORTED_MODULE_3__.UNARY_MINUS_EXPRESSION;\n        }\n        else {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_1__.Errors.INVALID_EXPRESSION);\n        }\n        return {\n            subExpressionResult: subExpressionResult,\n            subExpressionRegex\n        };\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/RegularProcessor.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/TrigonometryProcessor.ts":
/*!****************************************************************!*\
  !*** ./src/services/regexCalculation/TrigonometryProcessor.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrigonometryProcessor: () => (/* binding */ TrigonometryProcessor)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n\n\n\nclass TrigonometryProcessor {\n    process(expression, highestPriorityOperator) {\n        const operatorRegexPattern = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.escapeRegExp)(highestPriorityOperator);\n        const subExpressionRegex = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getTrigonometricExpressionRegex)(operatorRegexPattern);\n        const subExpressionMatch = expression.match(subExpressionRegex);\n        if (subExpressionMatch === null) {\n            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        const operand1 = parseFloat(subExpressionMatch[1]);\n        return {\n            subExpressionResult: _config_operations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].operations[highestPriorityOperator].calculate(operand1),\n            subExpressionRegex\n        };\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/TrigonometryProcessor.ts?");

/***/ }),

/***/ "./src/services/servicesOptions.ts":
/*!*****************************************!*\
  !*** ./src/services/servicesOptions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   services: () => (/* binding */ services)\n/* harmony export */ });\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polishNotation/PolishNotation */ \"./src/services/polishNotation/PolishNotation.ts\");\n/* harmony import */ var _regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regexCalculation/RegexCalculation */ \"./src/services/regexCalculation/RegexCalculation.ts\");\n\n\n\nconst services = Object.freeze({\n    polishNotation: new _polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_1__.PolishNotation(_config_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations),\n    regexCalculation: new _regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_2__.RegexCalculation(_config_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations)\n});\n\n\n//# sourceURL=webpack://new/./src/services/servicesOptions.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp),\n/* harmony export */   factorial: () => (/* binding */ factorial),\n/* harmony export */   getRegularExpressionRegex: () => (/* binding */ getRegularExpressionRegex),\n/* harmony export */   getTrigonometricExpressionRegex: () => (/* binding */ getTrigonometricExpressionRegex),\n/* harmony export */   isMathOperator: () => (/* binding */ isMathOperator),\n/* harmony export */   reduceAllSpaces: () => (/* binding */ reduceAllSpaces)\n/* harmony export */ });\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/operations */ \"./src/config/operations.ts\");\n\nfunction factorial(num) {\n    if (num === 0 || num === 1) {\n        return 1;\n    }\n    else {\n        return num * factorial(num - 1);\n    }\n}\nfunction isMathOperator(token) {\n    return token in _config_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations;\n}\nfunction reduceAllSpaces(expression) {\n    return expression.split('').reduce((acc, char) => {\n        if (char !== ' ') {\n            acc += char;\n        }\n        return acc;\n    }, '');\n}\nfunction escapeRegExp(string) {\n    return string.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n}\nfunction getTrigonometricExpressionRegex(operatorRegexPattern) {\n    return new RegExp(`${operatorRegexPattern}\\\\s*(-?\\\\d+\\\\.?\\\\d*)`, 'i');\n}\nfunction getRegularExpressionRegex(operatorRegexPattern) {\n    return new RegExp(`(-?\\\\d+\\\\.?\\\\d*)\\\\s*${operatorRegexPattern}\\\\s*(-?\\\\d+\\\\.?\\\\d*)`);\n}\n\n\n//# sourceURL=webpack://new/./src/utils/utils.ts?");

/***/ }),

/***/ "./src/view/CalculatorView.ts":
/*!************************************!*\
  !*** ./src/view/CalculatorView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\");\n/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _Observer_observerEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer/observerEvents */ \"./src/Observer/observerEvents.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.ts\");\n\n\n\n\nclass CalculatorView {\n    constructor() {\n        this.inputEl = document.querySelector('#expression');\n        this.resultEl = document.querySelector('.result');\n        this.buttonContainer = document.querySelector('.button-container');\n        this.evaluateBtn = document.querySelector('.eval-button');\n        this.errorBlock = document.querySelector('.error-block');\n        this.backspaceBtn = document.querySelector('.backspace');\n        this.buttonContainer.onclick = (event) => {\n            if (event && event.target instanceof HTMLButtonElement) {\n                if (event.target.dataset.calcBtn === _services_constants__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators.CLEAR_ALL) {\n                    this.inputEl.value = '';\n                    this.resultEl.innerText = '0';\n                }\n                else {\n                    this.inputEl.value += event.target.dataset.calcBtn;\n                }\n            }\n        };\n        this.evaluateBtn.addEventListener('click', () => {\n            _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);\n        });\n        this.inputEl.addEventListener('keydown', (event) => {\n            if (event.key === 'Enter') {\n                _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);\n            }\n        });\n        this.backspaceBtn.addEventListener('click', () => {\n            const inputValue = this.inputEl.value;\n            let stringOperator = '';\n            let isFoundOperator = false;\n            for (let i = inputValue.length - 1; i >= 0; i--) {\n                stringOperator = inputValue[i] + stringOperator;\n                if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.isMathOperator)(stringOperator)) {\n                    this.inputEl.value = inputValue.slice(0, -stringOperator.length);\n                    isFoundOperator = true;\n                    break;\n                }\n            }\n            if (!isFoundOperator) {\n                this.inputEl.value = inputValue.slice(0, -1);\n            }\n        });\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.CALCULATED, this.showResult.bind(this));\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_Observer_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.SHOW_ERROR, this.showError.bind(this));\n    }\n    showResult(result) {\n        this.errorBlock.innerText = '';\n        this.resultEl.innerText = result + '';\n    }\n    showError(errorMessage) {\n        this.errorBlock.innerText = errorMessage;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorView);\n\n\n//# sourceURL=webpack://new/./src/view/CalculatorView.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;