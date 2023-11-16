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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _observerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observerEvents */ \"./src/Observer/observerEvents.ts\");\n\nclass Subject {\n    constructor() {\n        this.events = _observerEvents__WEBPACK_IMPORTED_MODULE_0__.observerEventsContainer;\n    }\n    subscribe(eventName, callback) {\n        if (!(eventName in this.events)) {\n            this.events[eventName] = [];\n        }\n        this.events[eventName].push(callback);\n    }\n    unsubscribe(eventName) {\n        delete this.events[eventName];\n    }\n    notify(eventName, argc) {\n        if (eventName in this.events) {\n            for (const callback of this.events[eventName]) {\n                callback(argc);\n            }\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Subject());\n\n\n//# sourceURL=webpack://new/./src/Observer/Subject.ts?");

/***/ }),

/***/ "./src/Observer/index.ts":
/*!*******************************!*\
  !*** ./src/Observer/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ObserverEvents: () => (/* reexport safe */ _observerEvents__WEBPACK_IMPORTED_MODULE_1__.ObserverEvents),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   observerEventsContainer: () => (/* reexport safe */ _observerEvents__WEBPACK_IMPORTED_MODULE_1__.observerEventsContainer)\n/* harmony export */ });\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ \"./src/Observer/Subject.ts\");\n/* harmony import */ var _observerEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observerEvents */ \"./src/Observer/observerEvents.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n\n//# sourceURL=webpack://new/./src/Observer/index.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n\n\nconst operations = {\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.PLUS]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.LOW,\n        calculate: (a, b) => a + b,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.BINARY,\n        associativity: _services__WEBPACK_IMPORTED_MODULE_1__.Associativity.LEFT,\n    },\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.MINUS]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.LOW,\n        calculate: (a, b) => a - b,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.BINARY,\n        associativity: _services__WEBPACK_IMPORTED_MODULE_1__.Associativity.LEFT,\n    },\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.MULTIPLICATION]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.MEDIUM,\n        calculate: (a, b) => a * b,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.BINARY,\n        associativity: _services__WEBPACK_IMPORTED_MODULE_1__.Associativity.LEFT,\n    },\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.DIVISION]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.MEDIUM,\n        calculate: (a, b) => a / b,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.BINARY,\n        associativity: _services__WEBPACK_IMPORTED_MODULE_1__.Associativity.LEFT,\n    },\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.COS]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.HIGH,\n        calculate: Math.cos,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.UNARY_RIGHT,\n        associativity: _services__WEBPACK_IMPORTED_MODULE_1__.Associativity.LEFT,\n    },\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.SIN]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.HIGH,\n        calculate: Math.sin,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.UNARY_RIGHT,\n        associativity: _services__WEBPACK_IMPORTED_MODULE_1__.Associativity.LEFT,\n    },\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.TAN]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.HIGH,\n        calculate: Math.tan,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.UNARY_RIGHT,\n        associativity: _services__WEBPACK_IMPORTED_MODULE_1__.Associativity.LEFT,\n    },\n    [_services__WEBPACK_IMPORTED_MODULE_1__.MathOperators.FACTORIAL]: {\n        priority: _services__WEBPACK_IMPORTED_MODULE_1__.MathOperationPriority.CRITICAL,\n        calculate: _utils__WEBPACK_IMPORTED_MODULE_0__.factorial,\n        type: _services__WEBPACK_IMPORTED_MODULE_1__.OperatorType.UNARY_LEFT,\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze({\n    operations,\n    CalculationMethod: _services__WEBPACK_IMPORTED_MODULE_1__.CalculationMethods.REGEX_CALCULATION,\n}));\n\n\n//# sourceURL=webpack://new/./src/config/operations.ts?");

/***/ }),

/***/ "./src/controller/calculatorController.ts":
/*!************************************************!*\
  !*** ./src/controller/calculatorController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CalculatorController: () => (/* binding */ CalculatorController)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @observer */ \"./src/Observer/index.ts\");\n\nclass CalculatorController {\n    constructor() {\n        _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_BUTTON_CLICK, (expression) => {\n            _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_EXPRESSION, expression);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/controller/calculatorController.ts?");

/***/ }),

/***/ "./src/controller/index.ts":
/*!*********************************!*\
  !*** ./src/controller/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CalculatorController: () => (/* reexport safe */ _calculatorController__WEBPACK_IMPORTED_MODULE_0__.CalculatorController)\n/* harmony export */ });\n/* harmony import */ var _calculatorController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorController */ \"./src/controller/calculatorController.ts\");\n\n\n\n//# sourceURL=webpack://new/./src/controller/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @view */ \"./src/view/index.ts\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @model */ \"./src/model/index.ts\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @controller */ \"./src/controller/index.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n\n\n\n\n\nnew _view__WEBPACK_IMPORTED_MODULE_0__.CalculatorView();\nnew _model__WEBPACK_IMPORTED_MODULE_1__.CalculatorModel(_services__WEBPACK_IMPORTED_MODULE_4__.services[_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CalculationMethod]);\nnew _controller__WEBPACK_IMPORTED_MODULE_2__.CalculatorController();\n\n\n//# sourceURL=webpack://new/./src/index.ts?");

/***/ }),

/***/ "./src/model/calculatorModel.ts":
/*!**************************************!*\
  !*** ./src/model/calculatorModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CalculatorModel: () => (/* binding */ CalculatorModel)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @observer */ \"./src/Observer/index.ts\");\n\nclass CalculatorModel {\n    constructor(service) {\n        this.calculationService = service;\n        _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_EXPRESSION, this.handleEvaluateExpression.bind(this));\n    }\n    handleEvaluateExpression(expression) {\n        try {\n            const result = this.evaluate(expression);\n            _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.CALCULATED, result);\n        }\n        catch (error) {\n            if (error instanceof Error) {\n                _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.SHOW_ERROR, error.message);\n            }\n        }\n    }\n    evaluate(expression) {\n        return this.calculationService.evaluate(expression);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/model/calculatorModel.ts?");

/***/ }),

/***/ "./src/model/index.ts":
/*!****************************!*\
  !*** ./src/model/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CalculatorModel: () => (/* reexport safe */ _calculatorModel__WEBPACK_IMPORTED_MODULE_0__.CalculatorModel)\n/* harmony export */ });\n/* harmony import */ var _calculatorModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorModel */ \"./src/model/calculatorModel.ts\");\n\n\n\n//# sourceURL=webpack://new/./src/model/index.ts?");

/***/ }),

/***/ "./src/regex/index.ts":
/*!****************************!*\
  !*** ./src/regex/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PARENTHESES_EXPRESSION: () => (/* reexport safe */ _parenthesesRegex__WEBPACK_IMPORTED_MODULE_0__.PARENTHESES_EXPRESSION),\n/* harmony export */   TOKENIZE_REGEX_PATTERN: () => (/* reexport safe */ _tokenizeRegex__WEBPACK_IMPORTED_MODULE_2__.TOKENIZE_REGEX_PATTERN),\n/* harmony export */   getPrioritizedRegexes: () => (/* reexport safe */ _priorityRegexes__WEBPACK_IMPORTED_MODULE_1__.getPrioritizedRegexes),\n/* harmony export */   validOperatorsPattern: () => (/* reexport safe */ _tokenizeRegex__WEBPACK_IMPORTED_MODULE_2__.validOperatorsPattern)\n/* harmony export */ });\n/* harmony import */ var _parenthesesRegex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parenthesesRegex */ \"./src/regex/parenthesesRegex.ts\");\n/* harmony import */ var _priorityRegexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priorityRegexes */ \"./src/regex/priorityRegexes.ts\");\n/* harmony import */ var _tokenizeRegex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenizeRegex */ \"./src/regex/tokenizeRegex.ts\");\n\n\n\n\n\n//# sourceURL=webpack://new/./src/regex/index.ts?");

/***/ }),

/***/ "./src/regex/parenthesesRegex.ts":
/*!***************************************!*\
  !*** ./src/regex/parenthesesRegex.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PARENTHESES_EXPRESSION: () => (/* binding */ PARENTHESES_EXPRESSION)\n/* harmony export */ });\n// PARENTHESES_EXPRESSION consists of 3 parts:\n//   - \\( : matches an open parenthesis\n//   - [^()]* : matches any characters except for parentheses, allowing for nested parentheses\n//   - \\) : matches a closing parenthesis\nconst PARENTHESES_EXPRESSION = /(\\([^()]*\\))/g;\n\n\n//# sourceURL=webpack://new/./src/regex/parenthesesRegex.ts?");

/***/ }),

/***/ "./src/regex/priorityRegexes.ts":
/*!**************************************!*\
  !*** ./src/regex/priorityRegexes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPrioritizedRegexes: () => (/* binding */ getPrioritizedRegexes)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n\n\nfunction getPrioritizedRegexes(regexArr) {\n    return regexArr.map((item) => {\n        if (item.type === _services__WEBPACK_IMPORTED_MODULE_0__.OperatorType.UNARY_LEFT) {\n            return {\n                type: item.type,\n                regExp: new RegExp(`(\\\\d+\\\\.?\\\\d*)\\\\s*(${item.operators.map(_utils__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp).join('|')})`),\n            };\n        }\n        else if (item.type === _services__WEBPACK_IMPORTED_MODULE_0__.OperatorType.UNARY_RIGHT) {\n            return {\n                type: item.type,\n                regExp: new RegExp(`(${item.operators.map(_utils__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp).join('|')})\\\\s*(-?\\\\d+\\\\.?\\\\d*)`, 'i'),\n            };\n        }\n        else {\n            return {\n                type: item.type,\n                regExp: new RegExp(`(-?\\\\d+\\\\.?\\\\d*)\\\\s*(${item.operators.map(_utils__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp).join('|')})\\\\s*(-?\\\\d+\\\\.?\\\\d*)`, 'i'),\n            };\n        }\n    });\n}\n\n\n//# sourceURL=webpack://new/./src/regex/priorityRegexes.ts?");

/***/ }),

/***/ "./src/regex/tokenizeRegex.ts":
/*!************************************!*\
  !*** ./src/regex/tokenizeRegex.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TOKENIZE_REGEX_PATTERN: () => (/* binding */ TOKENIZE_REGEX_PATTERN),\n/* harmony export */   validOperatorsPattern: () => (/* binding */ validOperatorsPattern)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n\n\nconst escapedOperators = [...Object.keys(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations), ...Object.values(_services__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators)]\n    .map((operator) => operator.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'))\n    .map((operator) => (operator === '-' ? `\\\\-` : operator));\nconst validOperatorsPattern = escapedOperators.join('|');\n// TOKENIZE_REGEX_PATTERN RegExp consist of 3 parts:\n// - `\\\\d+(\\\\.\\\\d+)?`: Matches numbers\n// - `${validOperatorsPattern}`: Matches valid operators.\nconst TOKENIZE_REGEX_PATTERN = new RegExp(`\\\\d+(\\\\.\\\\d+)?|${validOperatorsPattern}`, 'g');\n\n\n//# sourceURL=webpack://new/./src/regex/tokenizeRegex.ts?");

/***/ }),

/***/ "./src/services/constants.ts":
/*!***********************************!*\
  !*** ./src/services/constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Associativity: () => (/* binding */ Associativity),\n/* harmony export */   CalculationMethods: () => (/* binding */ CalculationMethods),\n/* harmony export */   Errors: () => (/* binding */ Errors),\n/* harmony export */   MathOperationPriority: () => (/* binding */ MathOperationPriority),\n/* harmony export */   MathOperators: () => (/* binding */ MathOperators),\n/* harmony export */   OperatorType: () => (/* binding */ OperatorType),\n/* harmony export */   SpecialOperators: () => (/* binding */ SpecialOperators)\n/* harmony export */ });\nvar CalculationMethods;\n(function (CalculationMethods) {\n    CalculationMethods[\"POLISH_NOTATION\"] = \"polishNotation\";\n    CalculationMethods[\"REGEX_CALCULATION\"] = \"regexCalculation\";\n})(CalculationMethods || (CalculationMethods = {}));\nvar MathOperators;\n(function (MathOperators) {\n    MathOperators[\"PLUS\"] = \"+\";\n    MathOperators[\"MINUS\"] = \"-\";\n    MathOperators[\"MULTIPLICATION\"] = \"*\";\n    MathOperators[\"DIVISION\"] = \"/\";\n    MathOperators[\"COS\"] = \"cos\";\n    MathOperators[\"SIN\"] = \"sin\";\n    MathOperators[\"TAN\"] = \"tan\";\n    MathOperators[\"FACTORIAL\"] = \"!\";\n})(MathOperators || (MathOperators = {}));\nvar Errors;\n(function (Errors) {\n    Errors[\"INVALID_SYMBOL\"] = \"Invalid symbols in the input expression.\";\n    Errors[\"INVALID_EXPRESSION\"] = \"Invalid math expression\";\n    Errors[\"UNMATCHED_PARENTHESES\"] = \"Unmatched parentheses\";\n})(Errors || (Errors = {}));\nvar SpecialOperators;\n(function (SpecialOperators) {\n    SpecialOperators[\"LEFT_BRACKET\"] = \"(\";\n    SpecialOperators[\"RIGHT_BRACKET\"] = \")\";\n    SpecialOperators[\"DOT\"] = \".\";\n    SpecialOperators[\"CLEAR_ALL\"] = \"C\";\n})(SpecialOperators || (SpecialOperators = {}));\nvar Associativity;\n(function (Associativity) {\n    Associativity[\"LEFT\"] = \"left\";\n    Associativity[\"RIGHT\"] = \"right\";\n})(Associativity || (Associativity = {}));\nvar MathOperationPriority;\n(function (MathOperationPriority) {\n    MathOperationPriority[MathOperationPriority[\"LOW\"] = 1] = \"LOW\";\n    MathOperationPriority[MathOperationPriority[\"MEDIUM\"] = 2] = \"MEDIUM\";\n    MathOperationPriority[MathOperationPriority[\"HIGH\"] = 3] = \"HIGH\";\n    MathOperationPriority[MathOperationPriority[\"CRITICAL\"] = 4] = \"CRITICAL\";\n    MathOperationPriority[MathOperationPriority[\"TOP\"] = 5] = \"TOP\";\n    MathOperationPriority[MathOperationPriority[\"MAXIMUM\"] = 6] = \"MAXIMUM\";\n})(MathOperationPriority || (MathOperationPriority = {}));\nvar OperatorType;\n(function (OperatorType) {\n    OperatorType[\"BINARY\"] = \"binary\";\n    OperatorType[\"UNARY_LEFT\"] = \"unaryLeft\";\n    OperatorType[\"UNARY_RIGHT\"] = \"unaryRight\";\n})(OperatorType || (OperatorType = {}));\n\n\n//# sourceURL=webpack://new/./src/services/constants.ts?");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Associativity: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Associativity),\n/* harmony export */   BinaryProcessor: () => (/* reexport safe */ _regexCalculation_processors_index__WEBPACK_IMPORTED_MODULE_3__.BinaryProcessor),\n/* harmony export */   CalculationMethods: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CalculationMethods),\n/* harmony export */   Errors: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Errors),\n/* harmony export */   LeftBracketProcessor: () => (/* reexport safe */ _polishNotation_processors_index__WEBPACK_IMPORTED_MODULE_2__.LeftBracketProcessor),\n/* harmony export */   MathOperationPriority: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MathOperationPriority),\n/* harmony export */   MathOperators: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators),\n/* harmony export */   OperatorProcessor: () => (/* reexport safe */ _polishNotation_processors_index__WEBPACK_IMPORTED_MODULE_2__.OperatorProcessor),\n/* harmony export */   OperatorType: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.OperatorType),\n/* harmony export */   PolishNotation: () => (/* reexport safe */ _polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_5__.PolishNotation),\n/* harmony export */   RegexCalculation: () => (/* reexport safe */ _regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_4__.RegexCalculation),\n/* harmony export */   RightBracketProcessor: () => (/* reexport safe */ _polishNotation_processors_index__WEBPACK_IMPORTED_MODULE_2__.RightBracketProcessor),\n/* harmony export */   SpecialOperators: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators),\n/* harmony export */   UnaryLeftProcessor: () => (/* reexport safe */ _regexCalculation_processors_index__WEBPACK_IMPORTED_MODULE_3__.UnaryLeftProcessor),\n/* harmony export */   UnaryRightProcessor: () => (/* reexport safe */ _regexCalculation_processors_index__WEBPACK_IMPORTED_MODULE_3__.UnaryRightProcessor),\n/* harmony export */   services: () => (/* reexport safe */ _servicesOptions__WEBPACK_IMPORTED_MODULE_1__.services)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/services/constants.ts\");\n/* harmony import */ var _servicesOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicesOptions */ \"./src/services/servicesOptions.ts\");\n/* harmony import */ var _polishNotation_processors_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polishNotation/processors/index */ \"./src/services/polishNotation/processors/index.ts\");\n/* harmony import */ var _regexCalculation_processors_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regexCalculation/processors/index */ \"./src/services/regexCalculation/processors/index.ts\");\n/* harmony import */ var _regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regexCalculation/RegexCalculation */ \"./src/services/regexCalculation/RegexCalculation.ts\");\n/* harmony import */ var _polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polishNotation/PolishNotation */ \"./src/services/polishNotation/PolishNotation.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://new/./src/services/index.ts?");

/***/ }),

/***/ "./src/services/polishNotation/PolishNotation.ts":
/*!*******************************************************!*\
  !*** ./src/services/polishNotation/PolishNotation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PolishNotation: () => (/* binding */ PolishNotation)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @regex */ \"./src/regex/index.ts\");\n/* harmony import */ var _processors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processors */ \"./src/services/polishNotation/processors/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n\n\n\n\nclass PolishNotation {\n    constructor(operators) {\n        this.availableOperators = operators;\n        this.operatorProcessors = this.initializeOperatorProcessor(operators);\n    }\n    initializeOperatorProcessor(operators) {\n        const mathOperators = [...Object.keys(operators), _services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.CLEAR_ALL, _services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.DOT];\n        return Object.assign(Object.assign({}, mathOperators.reduce((obj, key) => {\n            if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isMathOperator)(key)) {\n                obj[key] = new _processors__WEBPACK_IMPORTED_MODULE_2__.OperatorProcessor(this.availableOperators);\n            }\n            return obj;\n        }, {})), { [_services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET]: new _processors__WEBPACK_IMPORTED_MODULE_2__.LeftBracketProcessor(), [_services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.RIGHT_BRACKET]: new _processors__WEBPACK_IMPORTED_MODULE_2__.RightBracketProcessor() });\n    }\n    isSpecialOperator(token) {\n        return Object.values(_services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators).includes(token);\n    }\n    executeOperatorProcessor(expressionOperators, output, token) {\n        const opProcessor = this.operatorProcessors[token];\n        if (opProcessor) {\n            opProcessor.process(expressionOperators, output, token);\n        }\n        else {\n            throw new Error('There is no processor for this token!');\n        }\n    }\n    infixToPostfix(expression) {\n        const output = [];\n        const expressionOperators = [];\n        let stringOperators = '';\n        expression.forEach((token) => {\n            stringOperators += token;\n            if (!isNaN(parseFloat(token))) {\n                output.push(token);\n            }\n            else if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isMathOperator)(token) || this.isSpecialOperator(token)) {\n                this.executeOperatorProcessor(expressionOperators, output, token);\n                stringOperators = '';\n            }\n            else if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isMathOperator)(stringOperators)) {\n                this.executeOperatorProcessor(expressionOperators, output, stringOperators);\n                stringOperators = '';\n            }\n        });\n        output.push(...expressionOperators.reverse());\n        return output;\n    }\n    tokenize(expression) {\n        if (expression.trim() === '') {\n            return ['0'];\n        }\n        const expressionWithoutSpaces = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.reduceAllSpaces)(expression);\n        const pattern = _regex__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN;\n        const tokens = expressionWithoutSpaces.match(pattern);\n        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {\n            const invalidChars = [...expressionWithoutSpaces.replace(_regex__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN, '')];\n            const uniqueInvalidChars = [...new Set(invalidChars)];\n            throw new Error('Invalid symbols: ' + uniqueInvalidChars);\n        }\n        const result = [];\n        for (let i = 0; i < tokens.length; i++) {\n            const token = tokens[i];\n            const prevToken = tokens[i - 1];\n            if (token === _services__WEBPACK_IMPORTED_MODULE_0__.MathOperators.MINUS &&\n                (!prevToken || prevToken === _services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isMathOperator)(prevToken))) {\n                const nextToken = tokens[i + 1];\n                if (nextToken && !isNaN(parseFloat(nextToken))) {\n                    result.push(token + nextToken);\n                    i++;\n                }\n                else {\n                    result.push(token);\n                }\n            }\n            else {\n                result.push(token);\n            }\n        }\n        return result;\n    }\n    evaluateBinaryOperator(calculate, stack = []) {\n        const a = stack.pop();\n        const b = stack.pop();\n        stack.push(calculate(b, a));\n    }\n    evaluateUnaryOperator(calculate, stack = []) {\n        const a = stack.pop();\n        stack.push(calculate(a));\n    }\n    evaluate(expression) {\n        var _a;\n        const tokens = (_a = this.tokenize(expression)) !== null && _a !== void 0 ? _a : [];\n        const postfixExpression = this.infixToPostfix(tokens);\n        const stack = [];\n        postfixExpression.forEach((token) => {\n            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isMathOperator)(token)) {\n                stack.push(parseFloat(token));\n            }\n            else {\n                const operator = this.availableOperators[token];\n                if (operator.type === _services__WEBPACK_IMPORTED_MODULE_0__.OperatorType.BINARY) {\n                    this.evaluateBinaryOperator(operator.calculate, stack);\n                }\n                else if (operator.type === _services__WEBPACK_IMPORTED_MODULE_0__.OperatorType.UNARY_LEFT || operator.type === _services__WEBPACK_IMPORTED_MODULE_0__.OperatorType.UNARY_RIGHT) {\n                    this.evaluateUnaryOperator(operator.calculate, stack);\n                }\n            }\n        });\n        const result = stack.pop();\n        if (!result && result !== 0) {\n            throw new Error(_services__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        return result;\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/PolishNotation.ts?");

/***/ }),

/***/ "./src/services/polishNotation/processors/LeftBracket.ts":
/*!***************************************************************!*\
  !*** ./src/services/polishNotation/processors/LeftBracket.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LeftBracketProcessor: () => (/* binding */ LeftBracketProcessor)\n/* harmony export */ });\nclass LeftBracketProcessor {\n    process(expressionOperators, _output, token) {\n        expressionOperators.push(token);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/processors/LeftBracket.ts?");

/***/ }),

/***/ "./src/services/polishNotation/processors/Operator.ts":
/*!************************************************************!*\
  !*** ./src/services/polishNotation/processors/Operator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OperatorProcessor: () => (/* binding */ OperatorProcessor)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n\nclass OperatorProcessor {\n    constructor(availableOperators) {\n        this.availableOperators = availableOperators;\n    }\n    process(expressionOperators, output, token) {\n        while (expressionOperators.length &&\n            expressionOperators[expressionOperators.length - 1] !== _services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET &&\n            (this.availableOperators[expressionOperators[expressionOperators.length - 1]].priority >\n                this.availableOperators[token].priority ||\n                (this.availableOperators[expressionOperators[expressionOperators.length - 1]].priority ===\n                    this.availableOperators[token].priority &&\n                    this.availableOperators[token].associativity === _services__WEBPACK_IMPORTED_MODULE_0__.Associativity.LEFT))) {\n            output.push(expressionOperators.pop());\n        }\n        expressionOperators.push(token);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/processors/Operator.ts?");

/***/ }),

/***/ "./src/services/polishNotation/processors/RightBracket.ts":
/*!****************************************************************!*\
  !*** ./src/services/polishNotation/processors/RightBracket.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RightBracketProcessor: () => (/* binding */ RightBracketProcessor)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n\nclass RightBracketProcessor {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    process(expressionOperators, output, _token) {\n        while (expressionOperators.length &&\n            expressionOperators[expressionOperators.length - 1] !== _services__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET) {\n            output.push(expressionOperators.pop());\n        }\n        expressionOperators.pop();\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/processors/RightBracket.ts?");

/***/ }),

/***/ "./src/services/polishNotation/processors/index.ts":
/*!*********************************************************!*\
  !*** ./src/services/polishNotation/processors/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LeftBracketProcessor: () => (/* reexport safe */ _LeftBracket__WEBPACK_IMPORTED_MODULE_0__.LeftBracketProcessor),\n/* harmony export */   OperatorProcessor: () => (/* reexport safe */ _Operator__WEBPACK_IMPORTED_MODULE_1__.OperatorProcessor),\n/* harmony export */   RightBracketProcessor: () => (/* reexport safe */ _RightBracket__WEBPACK_IMPORTED_MODULE_2__.RightBracketProcessor)\n/* harmony export */ });\n/* harmony import */ var _LeftBracket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeftBracket */ \"./src/services/polishNotation/processors/LeftBracket.ts\");\n/* harmony import */ var _Operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Operator */ \"./src/services/polishNotation/processors/Operator.ts\");\n/* harmony import */ var _RightBracket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RightBracket */ \"./src/services/polishNotation/processors/RightBracket.ts\");\n\n\n\n\n\n//# sourceURL=webpack://new/./src/services/polishNotation/processors/index.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/RegexCalculation.ts":
/*!***********************************************************!*\
  !*** ./src/services/regexCalculation/RegexCalculation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegexCalculation: () => (/* binding */ RegexCalculation)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @regex */ \"./src/regex/index.ts\");\n/* harmony import */ var _processors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processors */ \"./src/services/regexCalculation/processors/index.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/services/index.ts\");\n\n\n\n\nclass RegexCalculation {\n    constructor(operations) {\n        this.availableOperators = operations;\n        this.operatorProcessors = this.initializeOperatorProcessor(this.availableOperators);\n    }\n    initializeOperatorProcessor(operators) {\n        return Object.assign({}, Object.keys(operators).reduce((obj, key) => {\n            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isMathOperator)(key)) {\n                if (this.availableOperators[key].type === _index__WEBPACK_IMPORTED_MODULE_3__.OperatorType.BINARY) {\n                    obj[key] = new _processors__WEBPACK_IMPORTED_MODULE_2__.BinaryProcessor();\n                }\n                else if (this.availableOperators[key].type === _index__WEBPACK_IMPORTED_MODULE_3__.OperatorType.UNARY_LEFT) {\n                    obj[key] = new _processors__WEBPACK_IMPORTED_MODULE_2__.UnaryLeftProcessor();\n                }\n                else {\n                    obj[key] = new _processors__WEBPACK_IMPORTED_MODULE_2__.UnaryRightProcessor();\n                }\n            }\n            return obj;\n        }, {}));\n    }\n    findHighestPriorityOperatorResult(expression) {\n        const priorityRegexes = (0,_regex__WEBPACK_IMPORTED_MODULE_1__.getPrioritizedRegexes)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPriorityInfoArray)(this.availableOperators));\n        for (const priorityRegex of priorityRegexes) {\n            const matches = expression.match(priorityRegex.regExp);\n            if (matches) {\n                const operatorIndex = priorityRegex.type === _index__WEBPACK_IMPORTED_MODULE_3__.OperatorType.UNARY_RIGHT ? 1 : 2;\n                return {\n                    subExpressionResult: this.operatorProcessors[matches[operatorIndex]].process(matches),\n                    subExpressionMatch: matches[0],\n                };\n            }\n        }\n        return null;\n    }\n    calculate(tokens) {\n        const expression = tokens.join('');\n        const highestPriorityOperator = this.findHighestPriorityOperatorResult(expression);\n        if (!highestPriorityOperator) {\n            if (tokens.length === 1) {\n                return parseFloat(tokens[0]);\n            }\n            else {\n                throw new Error(_index__WEBPACK_IMPORTED_MODULE_3__.Errors.INVALID_EXPRESSION);\n            }\n        }\n        const updatedExpression = expression.replace(highestPriorityOperator.subExpressionMatch, highestPriorityOperator.subExpressionResult.toString());\n        const updatedTokens = updatedExpression.match(_regex__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN);\n        if (!updatedTokens) {\n            throw new Error(_index__WEBPACK_IMPORTED_MODULE_3__.Errors.INVALID_EXPRESSION);\n        }\n        if (updatedTokens[0] === _index__WEBPACK_IMPORTED_MODULE_3__.MathOperators.MINUS) {\n            updatedTokens.splice(0, 2, updatedTokens[0] + updatedTokens[1]);\n        }\n        return this.calculate(updatedTokens);\n    }\n    evaluateExpression(tokens) {\n        while (tokens.includes(_index__WEBPACK_IMPORTED_MODULE_3__.SpecialOperators.LEFT_BRACKET)) {\n            const matches = tokens.join('').match(_regex__WEBPACK_IMPORTED_MODULE_1__.PARENTHESES_EXPRESSION);\n            if (!matches) {\n                throw new Error(_index__WEBPACK_IMPORTED_MODULE_3__.Errors.UNMATCHED_PARENTHESES);\n            }\n            matches.forEach((match) => {\n                var _a;\n                const subExpression = match.slice(1, -1);\n                const subResult = this.evaluate(subExpression);\n                tokens = (_a = tokens.join('').replace(match, subResult.toString()).match(_regex__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN)) !== null && _a !== void 0 ? _a : [];\n            });\n        }\n        tokens = [this.calculate(tokens).toString()];\n        if (tokens.length !== 1) {\n            throw new Error(_index__WEBPACK_IMPORTED_MODULE_3__.Errors.INVALID_EXPRESSION);\n        }\n        return parseFloat(tokens[0]);\n    }\n    evaluate(expression) {\n        if (expression.trim() === '') {\n            return 0;\n        }\n        const tokens = expression.match(_regex__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN);\n        const expressionWithoutSpaces = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.reduceAllSpaces)(expression);\n        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {\n            const invalidChars = [...expressionWithoutSpaces.replace(_regex__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN, '')];\n            const uniqueInvalidChars = [...new Set(invalidChars)];\n            throw new Error('Invalid symbols: ' + uniqueInvalidChars);\n        }\n        return this.evaluateExpression(tokens);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/RegexCalculation.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/processors/Binary.ts":
/*!************************************************************!*\
  !*** ./src/services/regexCalculation/processors/Binary.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BinaryProcessor: () => (/* binding */ BinaryProcessor)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n\nclass BinaryProcessor {\n    process(matches) {\n        const operator = matches[2];\n        const operand1 = parseFloat(matches[1]);\n        const operand2 = parseFloat(matches[3]);\n        return _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations[operator].calculate(operand1, operand2);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/processors/Binary.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/processors/UnaryLeft.ts":
/*!***************************************************************!*\
  !*** ./src/services/regexCalculation/processors/UnaryLeft.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UnaryLeftProcessor: () => (/* binding */ UnaryLeftProcessor)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n\n\nclass UnaryLeftProcessor {\n    process(matches) {\n        const operand1 = parseFloat(matches[1]);\n        return _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].operations[_services__WEBPACK_IMPORTED_MODULE_0__.MathOperators.FACTORIAL].calculate(operand1);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/processors/UnaryLeft.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/processors/UnaryRight.ts":
/*!****************************************************************!*\
  !*** ./src/services/regexCalculation/processors/UnaryRight.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UnaryRightProcessor: () => (/* binding */ UnaryRightProcessor)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n\nclass UnaryRightProcessor {\n    process(matches) {\n        const operator = matches[1];\n        const operand1 = parseFloat(matches[2]);\n        return _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations[operator].calculate(operand1);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/processors/UnaryRight.ts?");

/***/ }),

/***/ "./src/services/regexCalculation/processors/index.ts":
/*!***********************************************************!*\
  !*** ./src/services/regexCalculation/processors/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BinaryProcessor: () => (/* reexport safe */ _Binary__WEBPACK_IMPORTED_MODULE_1__.BinaryProcessor),\n/* harmony export */   UnaryLeftProcessor: () => (/* reexport safe */ _UnaryLeft__WEBPACK_IMPORTED_MODULE_0__.UnaryLeftProcessor),\n/* harmony export */   UnaryRightProcessor: () => (/* reexport safe */ _UnaryRight__WEBPACK_IMPORTED_MODULE_2__.UnaryRightProcessor)\n/* harmony export */ });\n/* harmony import */ var _UnaryLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnaryLeft */ \"./src/services/regexCalculation/processors/UnaryLeft.ts\");\n/* harmony import */ var _Binary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Binary */ \"./src/services/regexCalculation/processors/Binary.ts\");\n/* harmony import */ var _UnaryRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnaryRight */ \"./src/services/regexCalculation/processors/UnaryRight.ts\");\n\n\n\n\n\n//# sourceURL=webpack://new/./src/services/regexCalculation/processors/index.ts?");

/***/ }),

/***/ "./src/services/servicesOptions.ts":
/*!*****************************************!*\
  !*** ./src/services/servicesOptions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   services: () => (/* binding */ services)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n/* harmony import */ var _polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polishNotation/PolishNotation */ \"./src/services/polishNotation/PolishNotation.ts\");\n/* harmony import */ var _regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regexCalculation/RegexCalculation */ \"./src/services/regexCalculation/RegexCalculation.ts\");\n\n\n\nconst services = Object.freeze({\n    polishNotation: new _polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_1__.PolishNotation(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations),\n    regexCalculation: new _regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_2__.RegexCalculation(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations),\n});\n\n\n//# sourceURL=webpack://new/./src/services/servicesOptions.ts?");

/***/ }),

/***/ "./src/utils/escapeRegExp.ts":
/*!***********************************!*\
  !*** ./src/utils/escapeRegExp.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp)\n/* harmony export */ });\nfunction escapeRegExp(string) {\n    return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');\n}\n\n\n//# sourceURL=webpack://new/./src/utils/escapeRegExp.ts?");

/***/ }),

/***/ "./src/utils/factorial.ts":
/*!********************************!*\
  !*** ./src/utils/factorial.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorial: () => (/* binding */ factorial)\n/* harmony export */ });\nfunction factorial(num) {\n    if (num === 0 || num === 1) {\n        return 1;\n    }\n    else {\n        return num * factorial(num - 1);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/utils/factorial.ts?");

/***/ }),

/***/ "./src/utils/getPriorityInfoArray.ts":
/*!*******************************************!*\
  !*** ./src/utils/getPriorityInfoArray.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPriorityInfoArray: () => (/* binding */ getPriorityInfoArray)\n/* harmony export */ });\nfunction getPriorityInfoArray(operations) {\n    return Object.entries(operations)\n        .reduce((priorityArr, [operator, operatorInfo]) => {\n        const existingIndex = priorityArr.findIndex((item) => item.priority === operatorInfo.priority);\n        if (existingIndex !== -1) {\n            priorityArr[existingIndex].operators.push(operator);\n        }\n        else {\n            priorityArr.push({\n                priority: operatorInfo.priority,\n                operators: [operator],\n                type: operatorInfo.type,\n            });\n        }\n        return priorityArr;\n    }, [])\n        .sort((a, b) => b.priority - a.priority);\n}\n\n\n//# sourceURL=webpack://new/./src/utils/getPriorityInfoArray.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeRegExp: () => (/* reexport safe */ _escapeRegExp__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp),\n/* harmony export */   factorial: () => (/* reexport safe */ _factorial__WEBPACK_IMPORTED_MODULE_0__.factorial),\n/* harmony export */   getPriorityInfoArray: () => (/* reexport safe */ _getPriorityInfoArray__WEBPACK_IMPORTED_MODULE_2__.getPriorityInfoArray),\n/* harmony export */   isMathOperator: () => (/* reexport safe */ _isMathOperator__WEBPACK_IMPORTED_MODULE_3__.isMathOperator),\n/* harmony export */   reduceAllSpaces: () => (/* reexport safe */ _reduceAllSpaces__WEBPACK_IMPORTED_MODULE_4__.reduceAllSpaces)\n/* harmony export */ });\n/* harmony import */ var _factorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factorial */ \"./src/utils/factorial.ts\");\n/* harmony import */ var _escapeRegExp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escapeRegExp */ \"./src/utils/escapeRegExp.ts\");\n/* harmony import */ var _getPriorityInfoArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPriorityInfoArray */ \"./src/utils/getPriorityInfoArray.ts\");\n/* harmony import */ var _isMathOperator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isMathOperator */ \"./src/utils/isMathOperator.ts\");\n/* harmony import */ var _reduceAllSpaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduceAllSpaces */ \"./src/utils/reduceAllSpaces.ts\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://new/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/isMathOperator.ts":
/*!*************************************!*\
  !*** ./src/utils/isMathOperator.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isMathOperator: () => (/* binding */ isMathOperator)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n\nfunction isMathOperator(token) {\n    return token in _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operations;\n}\n\n\n//# sourceURL=webpack://new/./src/utils/isMathOperator.ts?");

/***/ }),

/***/ "./src/utils/reduceAllSpaces.ts":
/*!**************************************!*\
  !*** ./src/utils/reduceAllSpaces.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reduceAllSpaces: () => (/* binding */ reduceAllSpaces)\n/* harmony export */ });\nfunction reduceAllSpaces(expression) {\n    return expression.replace(' ', '');\n}\n\n\n//# sourceURL=webpack://new/./src/utils/reduceAllSpaces.ts?");

/***/ }),

/***/ "./src/view/calculatorView.ts":
/*!************************************!*\
  !*** ./src/view/calculatorView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CalculatorView: () => (/* binding */ CalculatorView)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @observer */ \"./src/Observer/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config */ \"./src/config/operations.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./src/view/index.ts\");\n\n\n\n\n\nclass CalculatorView {\n    constructor() {\n        this.buttonsPerRow = _index__WEBPACK_IMPORTED_MODULE_4__.INITIAL_BUTTON_PER_ROW;\n        this.calculatorContainer = document.querySelector('.calculator-container');\n        this.inputEl = document.querySelector('#expression');\n        this.resultEl = document.querySelector('.result');\n        this.buttonContainer = document.querySelector('.button-container');\n        this.evaluateBtn = document.querySelector('.eval-button');\n        this.errorBlock = document.querySelector('.error-block');\n        this.backspaceBtn = document.querySelector('.backspace');\n        this.operators = [...Object.keys(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].operations), ...Object.values(_services__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators)];\n        this.setupEventListeners();\n        this.renderButtons();\n        _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.CALCULATED, this.showResult.bind(this));\n        _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.SHOW_ERROR, this.showError.bind(this));\n    }\n    setupEventListeners() {\n        var _a;\n        this.buttonContainer.addEventListener('click', this.handleButtonClick.bind(this));\n        this.evaluateBtn.addEventListener('click', this.handleEvaluateButtonClick.bind(this));\n        this.inputEl.addEventListener('keydown', this.handleInputKeyDown.bind(this));\n        (_a = this.backspaceBtn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.handleBackspaceButtonClick.bind(this));\n    }\n    handleButtonClick(event) {\n        var _a;\n        const target = event.target;\n        if (target && target.dataset.calcBtn === _services__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators.CLEAR_ALL) {\n            this.inputEl.value = '';\n            this.resultEl.innerText = '0';\n        }\n        else if (target instanceof HTMLButtonElement) {\n            this.inputEl.value += (_a = target.dataset.calcBtn) !== null && _a !== void 0 ? _a : '';\n        }\n    }\n    handleEvaluateButtonClick() {\n        _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);\n    }\n    handleInputKeyDown(event) {\n        if (event.key === _index__WEBPACK_IMPORTED_MODULE_4__.ENTER_CALCULATE_BUTTON) {\n            _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_observer__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);\n        }\n    }\n    handleBackspaceButtonClick() {\n        const inputValue = this.inputEl.value;\n        let stringOperator = '';\n        let isFoundOperator = false;\n        for (let i = inputValue.length - 1; i >= 0; i--) {\n            stringOperator = inputValue[i] + stringOperator;\n            if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isMathOperator)(stringOperator)) {\n                this.inputEl.value = inputValue.slice(0, -stringOperator.length);\n                isFoundOperator = true;\n                break;\n            }\n        }\n        if (!isFoundOperator) {\n            this.inputEl.value = inputValue.slice(0, -1);\n        }\n    }\n    createButton({ content, isOperator }) {\n        const button = document.createElement('button');\n        button.style.minWidth = `${_index__WEBPACK_IMPORTED_MODULE_4__.calculatorViewConstants.BUTTON_MIN_WIDTH}px`;\n        if (isOperator) {\n            Object.values(_index__WEBPACK_IMPORTED_MODULE_4__.operatorButtonClasses).forEach((operatorClass) => {\n                button.classList.add(operatorClass);\n            });\n        }\n        else {\n            Object.values(_index__WEBPACK_IMPORTED_MODULE_4__.numberButtonClasses).forEach((numberClass) => {\n                button.classList.add(numberClass);\n            });\n        }\n        button.setAttribute(_index__WEBPACK_IMPORTED_MODULE_4__.DATA_ATTRIBUTE_BUTTON, content);\n        button.textContent = content;\n        return button;\n    }\n    createRowWrapper() {\n        const rowWrapper = document.createElement('div');\n        rowWrapper.classList.add(_index__WEBPACK_IMPORTED_MODULE_4__.rowWrapperClasses.DISPLAY, _index__WEBPACK_IMPORTED_MODULE_4__.rowWrapperClasses.MARGIN, _index__WEBPACK_IMPORTED_MODULE_4__.rowWrapperClasses.GAP);\n        return rowWrapper;\n    }\n    renderButtons() {\n        this.buttonContainer.innerHTML = '';\n        const isRowLevelReached = this.buttonsPerRow * _index__WEBPACK_IMPORTED_MODULE_4__.calculatorViewConstants.THRESHOLD_ROW_LEVEL <\n            this.operators.length + _index__WEBPACK_IMPORTED_MODULE_4__.calculatorViewConstants.NUMBERS_AMOUNT;\n        if (isRowLevelReached) {\n            this.buttonsPerRow++;\n            this.calculatorContainer.style.width = `${parseFloat(this.calculatorContainer.style.width) + _index__WEBPACK_IMPORTED_MODULE_4__.calculatorViewConstants.BUTTON_WIDTH}px`;\n            return this.renderButtons();\n        }\n        let buttonCounter = 0;\n        let operatorIndex = 0;\n        let currentRow = this.createRowWrapper();\n        let isRowCompleted = false;\n        const addButtonToRow = (button) => {\n            if (!currentRow) {\n                currentRow = this.createRowWrapper();\n            }\n            currentRow.appendChild(button);\n            buttonCounter++;\n        };\n        const addRowToContainer = () => {\n            if (currentRow) {\n                this.buttonContainer.appendChild(currentRow);\n                currentRow = this.createRowWrapper();\n            }\n        };\n        for (let i = _index__WEBPACK_IMPORTED_MODULE_4__.calculatorViewConstants.MIN_BUTTON_VALUE; i <= _index__WEBPACK_IMPORTED_MODULE_4__.calculatorViewConstants.MAX_BUTTON_VALUE; i++) {\n            const button = this.createButton({ content: `${i}`, isOperator: false });\n            addButtonToRow(button);\n            if (i % _index__WEBPACK_IMPORTED_MODULE_4__.calculatorViewConstants.NUMBERS_COLUMNS_AMOUNT === 0 && operatorIndex < this.operators.length) {\n                for (let j = buttonCounter; j < this.buttonsPerRow; j++) {\n                    const operatorButton = this.createButton({ content: `${this.operators[operatorIndex]}`, isOperator: true });\n                    addButtonToRow(operatorButton);\n                    operatorIndex++;\n                }\n                isRowCompleted = true;\n            }\n            if (isRowCompleted) {\n                addRowToContainer();\n                isRowCompleted = false;\n                buttonCounter = 0;\n            }\n        }\n        if (isRowCompleted) {\n            currentRow = this.createRowWrapper();\n            isRowCompleted = false;\n        }\n        const zeroButton = this.createButton({ content: `0`, isOperator: false });\n        addButtonToRow(zeroButton);\n        buttonCounter = 1;\n        while (operatorIndex < this.operators.length) {\n            if (buttonCounter % this.buttonsPerRow === 0) {\n                addRowToContainer();\n            }\n            const operatorButton = this.createButton({ content: `${this.operators[operatorIndex]}`, isOperator: true });\n            addButtonToRow(operatorButton);\n            operatorIndex++;\n        }\n        addRowToContainer();\n    }\n    showResult(result) {\n        this.errorBlock.innerText = '';\n        this.resultEl.innerText = result.toString();\n    }\n    showError(errorMessage) {\n        this.errorBlock.innerText = errorMessage;\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/view/calculatorView.ts?");

/***/ }),

/***/ "./src/view/constants.ts":
/*!*******************************!*\
  !*** ./src/view/constants.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DATA_ATTRIBUTE_BUTTON: () => (/* binding */ DATA_ATTRIBUTE_BUTTON),\n/* harmony export */   ENTER_CALCULATE_BUTTON: () => (/* binding */ ENTER_CALCULATE_BUTTON),\n/* harmony export */   INITIAL_BUTTON_PER_ROW: () => (/* binding */ INITIAL_BUTTON_PER_ROW),\n/* harmony export */   calculatorViewConstants: () => (/* binding */ calculatorViewConstants),\n/* harmony export */   numberButtonClasses: () => (/* binding */ numberButtonClasses),\n/* harmony export */   operatorButtonClasses: () => (/* binding */ operatorButtonClasses),\n/* harmony export */   rowWrapperClasses: () => (/* binding */ rowWrapperClasses)\n/* harmony export */ });\nconst INITIAL_BUTTON_PER_ROW = 4;\nconst DATA_ATTRIBUTE_BUTTON = 'data-calc-btn';\nconst ENTER_CALCULATE_BUTTON = 'Enter';\nconst calculatorViewConstants = {\n    MIN_BUTTON_VALUE: 1,\n    MAX_BUTTON_VALUE: 9,\n    NUMBERS_COLUMNS_AMOUNT: 3,\n    THRESHOLD_ROW_LEVEL: 6,\n    NUMBERS_AMOUNT: 10,\n    BUTTON_WIDTH: 102,\n    BUTTON_MIN_WIDTH: 70,\n};\nconst operatorButtonClasses = {\n    PADDING: 'p-2',\n    BACKGROUND_COLOR: 'bg-green-500',\n    TEXT_COLOR: 'text-white',\n    BORDER_RADIUS: 'rounded',\n    HOVER: 'hover:bg-green-700',\n};\nconst numberButtonClasses = {\n    PADDING: 'p-2',\n    BACKGROUND_COLOR: 'bg-blue-500',\n    TEXT_COLOR: 'text-white',\n    BORDER_RADIUS: 'rounded',\n    HOVER: 'hover:bg-blue-700',\n};\nconst rowWrapperClasses = {\n    DISPLAY: 'flex',\n    MARGIN: 'mb-4',\n    GAP: 'gap-8',\n};\n\n\n//# sourceURL=webpack://new/./src/view/constants.ts?");

/***/ }),

/***/ "./src/view/index.ts":
/*!***************************!*\
  !*** ./src/view/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CalculatorView: () => (/* reexport safe */ _calculatorView__WEBPACK_IMPORTED_MODULE_0__.CalculatorView),\n/* harmony export */   DATA_ATTRIBUTE_BUTTON: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.DATA_ATTRIBUTE_BUTTON),\n/* harmony export */   ENTER_CALCULATE_BUTTON: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.ENTER_CALCULATE_BUTTON),\n/* harmony export */   INITIAL_BUTTON_PER_ROW: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_BUTTON_PER_ROW),\n/* harmony export */   calculatorViewConstants: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.calculatorViewConstants),\n/* harmony export */   numberButtonClasses: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.numberButtonClasses),\n/* harmony export */   operatorButtonClasses: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.operatorButtonClasses),\n/* harmony export */   rowWrapperClasses: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.rowWrapperClasses)\n/* harmony export */ });\n/* harmony import */ var _calculatorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorView */ \"./src/view/calculatorView.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/view/constants.ts\");\n\n\n\n\n//# sourceURL=webpack://new/./src/view/index.ts?");

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