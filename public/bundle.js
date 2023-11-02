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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst observerEvents_1 = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\nclass Subject {\n    constructor() {\n        this.events = observerEvents_1.observerEventsContainer;\n    }\n    subscribe(eventName, callback) {\n        if (!(eventName in this.events)) {\n            this.events[eventName] = [];\n        }\n        this.events[eventName].push(callback);\n    }\n    unsubscribe(eventName) {\n        delete this.events[eventName];\n    }\n    notify(eventName, argc) {\n        if (eventName in this.events) {\n            for (const callback of this.events[eventName]) {\n                callback(argc);\n            }\n        }\n    }\n}\nexports[\"default\"] = new Subject();\n\n\n//# sourceURL=webpack://new/./src/Observer/Subject.ts?");

/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.OperatorType = exports.MathOperationPriority = exports.SpecialOperators = exports.MathOperators = void 0;\nvar MathOperators;\n(function (MathOperators) {\n    MathOperators[\"PLUS\"] = \"+\";\n    MathOperators[\"MINUS\"] = \"-\";\n    MathOperators[\"MULTIPLICATION\"] = \"*\";\n    MathOperators[\"DIVISION\"] = \"/\";\n})(MathOperators || (exports.MathOperators = MathOperators = {}));\nvar SpecialOperators;\n(function (SpecialOperators) {\n    SpecialOperators[\"LEFT_BRACKET\"] = \"(\";\n    SpecialOperators[\"RIGHT_BRACKET\"] = \")\";\n    SpecialOperators[\"DOT\"] = \".\";\n    SpecialOperators[\"CLEAR_ALL\"] = \"C\";\n})(SpecialOperators || (exports.SpecialOperators = SpecialOperators = {}));\nvar MathOperationPriority;\n(function (MathOperationPriority) {\n    MathOperationPriority[MathOperationPriority[\"ADD_AND_SUB\"] = 0] = \"ADD_AND_SUB\";\n    MathOperationPriority[MathOperationPriority[\"MULT_AND_DIVISION\"] = 1] = \"MULT_AND_DIVISION\";\n    MathOperationPriority[MathOperationPriority[\"EXPONENTIATION\"] = 2] = \"EXPONENTIATION\";\n    MathOperationPriority[MathOperationPriority[\"PARENTHESES\"] = 3] = \"PARENTHESES\";\n})(MathOperationPriority || (exports.MathOperationPriority = MathOperationPriority = {}));\nvar OperatorType;\n(function (OperatorType) {\n    OperatorType[\"BINARY\"] = \"binary\";\n    OperatorType[\"UNARY\"] = \"unary\";\n})(OperatorType || (exports.OperatorType = OperatorType = {}));\n\n\n//# sourceURL=webpack://new/./src/config/constants.ts?");

/***/ }),

/***/ "./src/config/observerEvents.ts":
/*!**************************************!*\
  !*** ./src/config/observerEvents.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.observerEventsContainer = exports.ObserverEvents = void 0;\n/* eslint-disable @typescript-eslint/no-explicit-any */\nvar ObserverEvents;\n(function (ObserverEvents) {\n    ObserverEvents[\"CALCULATED\"] = \"calculated\";\n    ObserverEvents[\"SHOW_ERROR\"] = \"showError\";\n    ObserverEvents[\"EVALUATE_BUTTON_CLICK\"] = \"evaluateButtonClick\";\n})(ObserverEvents || (exports.ObserverEvents = ObserverEvents = {}));\nexports.observerEventsContainer = {\n    [ObserverEvents.CALCULATED]: [],\n    [ObserverEvents.SHOW_ERROR]: [],\n    [ObserverEvents.EVALUATE_BUTTON_CLICK]: []\n};\n\n\n//# sourceURL=webpack://new/./src/config/observerEvents.ts?");

/***/ }),

/***/ "./src/config/operations.ts":
/*!**********************************!*\
  !*** ./src/config/operations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TOKENIZE_REGEX_PATTERN = exports.operations = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/config/constants.ts\");\nexports.operations = {\n    [constants_1.MathOperators.PLUS]: {\n        priority: constants_1.MathOperationPriority.ADD_AND_SUB,\n        calculate: (a, b) => a + b,\n        type: constants_1.OperatorType.BINARY,\n    },\n    [constants_1.MathOperators.MINUS]: {\n        priority: constants_1.MathOperationPriority.ADD_AND_SUB,\n        calculate: (a, b) => a - b,\n        type: constants_1.OperatorType.BINARY,\n    },\n    [constants_1.MathOperators.MULTIPLICATION]: {\n        priority: constants_1.MathOperationPriority.MULT_AND_DIVISION,\n        calculate: (a, b) => a * b,\n        type: constants_1.OperatorType.BINARY,\n    },\n    [constants_1.MathOperators.DIVISION]: {\n        priority: constants_1.MathOperationPriority.MULT_AND_DIVISION,\n        calculate: (a, b) => a / b,\n        type: constants_1.OperatorType.BINARY,\n    },\n};\nexports.TOKENIZE_REGEX_PATTERN = new RegExp(`\\\\d+(\\\\.\\\\d+)?|[()+${Object.keys(exports.operations).join(\"\\\\|\\\\\")}]`, \"g\");\n\n\n//# sourceURL=webpack://new/./src/config/operations.ts?");

/***/ }),

/***/ "./src/controller/CalculatorController.ts":
/*!************************************************!*\
  !*** ./src/controller/CalculatorController.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst observerEvents_1 = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\nconst Subject_1 = __importDefault(__webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\"));\nclass CalculatorController {\n    constructor(model) {\n        this.model = model;\n        Subject_1.default.subscribe(observerEvents_1.ObserverEvents.EVALUATE_BUTTON_CLICK, (expression) => {\n            try {\n                const calculationResult = this.model.evaluate(expression);\n                Subject_1.default.notify(observerEvents_1.ObserverEvents.CALCULATED, calculationResult);\n            }\n            catch (error) {\n                if (error instanceof Error) {\n                    Subject_1.default.notify(observerEvents_1.ObserverEvents.SHOW_ERROR, error.message);\n                }\n            }\n        });\n    }\n}\nexports[\"default\"] = CalculatorController;\n\n\n//# sourceURL=webpack://new/./src/controller/CalculatorController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst CalculatorView_1 = __importDefault(__webpack_require__(/*! ./view/CalculatorView */ \"./src/view/CalculatorView.ts\"));\nconst CalculatorModel_1 = __importDefault(__webpack_require__(/*! ./model/CalculatorModel */ \"./src/model/CalculatorModel.ts\"));\nconst CalculatorController_1 = __importDefault(__webpack_require__(/*! ./controller/CalculatorController */ \"./src/controller/CalculatorController.ts\"));\nconst operations_1 = __webpack_require__(/*! ./config/operations */ \"./src/config/operations.ts\");\nconst view = new CalculatorView_1.default();\nconst model = new CalculatorModel_1.default(operations_1.operations);\nconst controller = new CalculatorController_1.default(model);\n\n\n//# sourceURL=webpack://new/./src/index.ts?");

/***/ }),

/***/ "./src/model/CalculatorModel.ts":
/*!**************************************!*\
  !*** ./src/model/CalculatorModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst constants_1 = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.ts\");\nconst operations_1 = __webpack_require__(/*! ../config/operations */ \"./src/config/operations.ts\");\nclass CalculatorModel {\n    constructor(operators) {\n        this.availableOperators = operators;\n    }\n    isOperator(token) {\n        return token in this.availableOperators;\n    }\n    infixToPostfix(expression) {\n        const output = [];\n        const expressionOperators = [];\n        expression.forEach((token) => {\n            if (!isNaN(parseFloat(token))) {\n                output.push(token);\n            }\n            else if (this.isOperator(token)) {\n                const topOperator = expressionOperators[expressionOperators.length - 1];\n                while (expressionOperators.length &&\n                    expressionOperators[expressionOperators.length - 1] !== constants_1.SpecialOperators.LEFT_BRACKET &&\n                    this.availableOperators[topOperator].priority >= this.availableOperators[token].priority) {\n                    output.push(expressionOperators.pop());\n                }\n                expressionOperators.push(token);\n            }\n            else if (token === constants_1.SpecialOperators.LEFT_BRACKET) {\n                expressionOperators.push(token);\n            }\n            else if (token === constants_1.SpecialOperators.RIGHT_BRACKET) {\n                while (expressionOperators.length && expressionOperators[expressionOperators.length - 1] !== constants_1.SpecialOperators.LEFT_BRACKET) {\n                    output.push(expressionOperators.pop());\n                }\n                expressionOperators.pop();\n            }\n        });\n        while (expressionOperators.length) {\n            output.push(expressionOperators.pop());\n        }\n        return output;\n    }\n    tokenize(expression) {\n        const pattern = operations_1.TOKENIZE_REGEX_PATTERN;\n        const tokens = expression.match(pattern);\n        if (!tokens) {\n            const invalidSymbols = expression.split('').filter(symbol => !pattern.test(symbol)).join('');\n            throw new Error(`Invalid symbol(s): - ${invalidSymbols}`);\n        }\n        return tokens;\n    }\n    evaluate(expression) {\n        const tokens = this.tokenize(expression) || [];\n        const postfixExpression = this.infixToPostfix(tokens);\n        const stack = [];\n        postfixExpression.forEach(token => {\n            if (!this.isOperator(token)) {\n                stack.push(parseFloat(token));\n            }\n            else {\n                const operator = this.availableOperators[token];\n                if (operator.type === constants_1.OperatorType.BINARY) {\n                    const a = stack.pop();\n                    const b = stack.pop();\n                    stack.push(operator.calculate(b, a));\n                }\n                else if (operator.type === constants_1.OperatorType.UNARY) {\n                    const a = stack.pop();\n                    stack.push(operator.calculate(a));\n                }\n            }\n        });\n        const result = stack.pop();\n        if (!result && result !== 0) {\n            throw new Error(`Invalid math expression`);\n        }\n        return result;\n    }\n}\nexports[\"default\"] = CalculatorModel;\n\n\n//# sourceURL=webpack://new/./src/model/CalculatorModel.ts?");

/***/ }),

/***/ "./src/view/CalculatorView.ts":
/*!************************************!*\
  !*** ./src/view/CalculatorView.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Subject_1 = __importDefault(__webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\"));\nconst constants_1 = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.ts\");\nconst observerEvents_1 = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\nclass CalculatorView {\n    constructor() {\n        this.inputEl = document.querySelector('#expression');\n        this.resultEl = document.querySelector('.result');\n        this.buttonContainer = document.querySelector('.button-container');\n        this.evaluateBtn = document.querySelector('.eval-button');\n        this.errorBlock = document.querySelector('.error-block');\n        this.buttonContainer.onclick = (event) => {\n            if (event && event.target instanceof HTMLButtonElement) {\n                if (event.target.dataset.calcBtn === constants_1.SpecialOperators.CLEAR_ALL) {\n                    this.inputEl.value = '';\n                    this.resultEl.innerText = '';\n                }\n                else {\n                    this.inputEl.value += event.target.dataset.calcBtn;\n                }\n            }\n        };\n        this.evaluateBtn.addEventListener('click', () => {\n            Subject_1.default.notify(observerEvents_1.ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);\n        });\n        Subject_1.default.subscribe(observerEvents_1.ObserverEvents.CALCULATED, (result) => {\n            this.resultEl.innerText = result + '';\n        });\n        Subject_1.default.subscribe(observerEvents_1.ObserverEvents.SHOW_ERROR, (errorMessage) => {\n            this.errorBlock.style.display = 'block';\n            this.errorBlock.innerText = errorMessage;\n        });\n    }\n}\nexports[\"default\"] = CalculatorView;\n\n\n//# sourceURL=webpack://new/./src/view/CalculatorView.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;