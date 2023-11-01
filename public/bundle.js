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
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Subject {\n    constructor() {\n        this.events = {};\n    }\n    subscribe(eventName, callback) {\n        if (!(eventName in this.events)) {\n            this.events[eventName] = [];\n        }\n        this.events[eventName].push(callback);\n    }\n    unsubscribe(eventName) {\n        delete this.events[eventName];\n    }\n    notify(eventName, argc) {\n        if (eventName in this.events) {\n            for (const callback of this.events[eventName]) {\n                callback(argc);\n            }\n        }\n    }\n}\nexports[\"default\"] = new Subject();\n\n\n//# sourceURL=webpack://new/./src/Observer/Subject.ts?");

/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TOKENIZE_REGEX_PATTERN = exports.OperatorType = exports.MathOperationPriority = exports.Operators = void 0;\nvar Operators;\n(function (Operators) {\n    Operators[\"PLUS\"] = \"+\";\n    Operators[\"MINUS\"] = \"-\";\n    Operators[\"MULTIPLICATION\"] = \"*\";\n    Operators[\"DIVISION\"] = \"/\";\n    Operators[\"COS\"] = \"cos\";\n    Operators[\"SIN\"] = \"sin\";\n    Operators[\"TAN\"] = \"tan\";\n    Operators[\"FACTORIAL\"] = \"!\";\n    Operators[\"LEFT_BRACKET\"] = \"(\";\n    Operators[\"RIGHT_BRACKET\"] = \")\";\n    Operators[\"DOT\"] = \".\";\n    Operators[\"CLEAR_ALL\"] = \"C\";\n})(Operators || (exports.Operators = Operators = {}));\nvar MathOperationPriority;\n(function (MathOperationPriority) {\n    MathOperationPriority[MathOperationPriority[\"PLUS\"] = 1] = \"PLUS\";\n    MathOperationPriority[MathOperationPriority[\"MINUS\"] = 1] = \"MINUS\";\n    MathOperationPriority[MathOperationPriority[\"MULTIPLICATION\"] = 2] = \"MULTIPLICATION\";\n    MathOperationPriority[MathOperationPriority[\"DIVISION\"] = 2] = \"DIVISION\";\n})(MathOperationPriority || (exports.MathOperationPriority = MathOperationPriority = {}));\nvar OperatorType;\n(function (OperatorType) {\n    OperatorType[\"BINARY\"] = \"binary\";\n    OperatorType[\"UNARY\"] = \"unary\";\n})(OperatorType || (exports.OperatorType = OperatorType = {}));\nexports.TOKENIZE_REGEX_PATTERN = /\\s*([-+*/%^()!]|cos|sin|tan)\\s*|(\\d+(?:\\.\\d*)?|\\.\\d+)|([^A-Za-z0-9\\s])/g;\n\n\n//# sourceURL=webpack://new/./src/config/constants.ts?");

/***/ }),

/***/ "./src/config/observerEvents.ts":
/*!**************************************!*\
  !*** ./src/config/observerEvents.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.observerEvents = void 0;\nvar observerEvents;\n(function (observerEvents) {\n    observerEvents[\"CALCULATE\"] = \"calculate\";\n    observerEvents[\"SHOW_ERROR\"] = \"showError\";\n})(observerEvents || (exports.observerEvents = observerEvents = {}));\n\n\n//# sourceURL=webpack://new/./src/config/observerEvents.ts?");

/***/ }),

/***/ "./src/config/operations.ts":
/*!**********************************!*\
  !*** ./src/config/operations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.operations = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/config/constants.ts\");\nconst constants_2 = __webpack_require__(/*! ./constants */ \"./src/config/constants.ts\");\nexports.operations = {\n    [constants_1.Operators.PLUS]: {\n        priority: constants_2.MathOperationPriority.PLUS,\n        calculate: (a, b) => a + b,\n        type: constants_2.OperatorType.BINARY\n    },\n    [constants_1.Operators.MINUS]: {\n        priority: constants_2.MathOperationPriority.MINUS,\n        calculate: (a, b) => a - b,\n        type: constants_2.OperatorType.BINARY\n    },\n    [constants_1.Operators.MULTIPLICATION]: {\n        priority: constants_2.MathOperationPriority.MULTIPLICATION,\n        calculate: (a, b) => a * b,\n        type: constants_2.OperatorType.BINARY\n    },\n    [constants_1.Operators.DIVISION]: {\n        priority: constants_2.MathOperationPriority.DIVISION,\n        calculate: (a, b) => a / b,\n        type: constants_2.OperatorType.BINARY\n    },\n};\n\n\n//# sourceURL=webpack://new/./src/config/operations.ts?");

/***/ }),

/***/ "./src/controller/CalculatorController.ts":
/*!************************************************!*\
  !*** ./src/controller/CalculatorController.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst observerEvents_1 = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\nconst CalculatorModel_1 = __importDefault(__webpack_require__(/*! ../model/CalculatorModel */ \"./src/model/CalculatorModel.ts\"));\nconst Subject_1 = __importDefault(__webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\"));\nclass CalculatorController {\n    constructor() { }\n    handleEvaluateButtonClick(expression) {\n        try {\n            const calculationResult = CalculatorModel_1.default.evaluate(expression);\n            Subject_1.default.notify(observerEvents_1.observerEvents.CALCULATE, calculationResult);\n        }\n        catch (error) {\n            if (error instanceof Error) {\n                Subject_1.default.notify(observerEvents_1.observerEvents.SHOW_ERROR, error.message);\n            }\n        }\n    }\n}\nexports[\"default\"] = new CalculatorController();\n\n\n//# sourceURL=webpack://new/./src/controller/CalculatorController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst CalculatorView_1 = __importDefault(__webpack_require__(/*! ./view/CalculatorView */ \"./src/view/CalculatorView.ts\"));\nconst view = new CalculatorView_1.default();\n\n\n//# sourceURL=webpack://new/./src/index.ts?");

/***/ }),

/***/ "./src/model/CalculatorModel.ts":
/*!**************************************!*\
  !*** ./src/model/CalculatorModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst constants_1 = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.ts\");\nconst operations_1 = __webpack_require__(/*! ../config/operations */ \"./src/config/operations.ts\");\nclass CalculatorModel {\n    constructor(operators) {\n        this.availableOperators = {};\n        this.availableOperators = operators;\n    }\n    isOperator(token) {\n        return token in this.availableOperators;\n    }\n    infixToPostfix(expression) {\n        const output = [];\n        const expressionOperators = [];\n        expression.forEach(token => {\n            if (!isNaN(parseFloat(token))) {\n                output.push(token);\n            }\n            else if (this.isOperator(token)) {\n                const topOperator = expressionOperators[expressionOperators.length - 1];\n                while (expressionOperators.length &&\n                    expressionOperators[expressionOperators.length - 1] !== constants_1.Operators.LEFT_BRACKET &&\n                    this.availableOperators[topOperator].priority >= this.availableOperators[token].priority) {\n                    output.push(expressionOperators.pop());\n                }\n                expressionOperators.push(token);\n            }\n            else if (token === constants_1.Operators.LEFT_BRACKET) {\n                expressionOperators.push(token);\n            }\n            else if (token === constants_1.Operators.RIGHT_BRACKET) {\n                while (expressionOperators.length && expressionOperators[expressionOperators.length - 1] !== constants_1.Operators.LEFT_BRACKET) {\n                    output.push(expressionOperators.pop());\n                }\n                expressionOperators.pop();\n            }\n        });\n        while (expressionOperators.length) {\n            output.push(expressionOperators.pop());\n        }\n        return output;\n    }\n    tokenize(expression) {\n        const pattern = constants_1.TOKENIZE_REGEX_PATTERN;\n        const tokens = [];\n        let match;\n        while ((match = pattern.exec(expression)) !== null) {\n            const operator = match[1];\n            const number = match[2];\n            const invalidToken = match[3];\n            if (invalidToken) {\n                throw new Error(`Invalid token: ${invalidToken}`);\n            }\n            if (operator) {\n                if (this.isOperator(operator) || operator === constants_1.Operators.LEFT_BRACKET || operator === constants_1.Operators.RIGHT_BRACKET) {\n                    tokens.push(operator);\n                }\n                else if (operator === constants_1.Operators.COS || operator === constants_1.Operators.SIN || operator === constants_1.Operators.TAN) {\n                    tokens.push(operator);\n                }\n                else {\n                    throw new Error(`Invalid operator: ${operator}`);\n                }\n            }\n            else if (number) {\n                tokens.push(number);\n            }\n        }\n        return tokens;\n    }\n    evaluate(expression) {\n        const tokens = this.tokenize(expression) || [];\n        const postfixExpression = this.infixToPostfix(tokens);\n        const stack = [];\n        postfixExpression.forEach(token => {\n            if (!this.isOperator(token)) {\n                stack.push(parseFloat(token));\n            }\n            else {\n                const operator = this.availableOperators[token];\n                if (operator.type === constants_1.OperatorType.BINARY) {\n                    const a = stack.pop();\n                    const b = stack.pop();\n                    stack.push(operator.calculate(b, a));\n                }\n                else if (operator.type === constants_1.OperatorType.UNARY) {\n                    const a = stack.pop();\n                    stack.push(operator.calculate(a));\n                }\n            }\n        });\n        return stack.pop();\n    }\n}\nexports[\"default\"] = new CalculatorModel(operations_1.operations);\n\n\n//# sourceURL=webpack://new/./src/model/CalculatorModel.ts?");

/***/ }),

/***/ "./src/view/CalculatorView.ts":
/*!************************************!*\
  !*** ./src/view/CalculatorView.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Subject_1 = __importDefault(__webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\"));\nconst constants_1 = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.ts\");\nconst CalculatorController_1 = __importDefault(__webpack_require__(/*! ../controller/CalculatorController */ \"./src/controller/CalculatorController.ts\"));\nconst observerEvents_1 = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\nclass CalculatorView {\n    constructor() {\n        this.inputEl = document.querySelector('#expression');\n        this.resultEl = document.querySelector('.result');\n        this.buttonContainer = document.querySelector('.button-container');\n        this.evaluateBtn = document.querySelector('.eval-button');\n        this.errorBlock = document.querySelector('.error-block');\n        this.buttonContainer.onclick = (event) => {\n            if (event && event.target instanceof HTMLButtonElement) {\n                if (event.target.dataset.calcBtn === constants_1.Operators.CLEAR_ALL) {\n                    this.inputEl.value = '';\n                    this.resultEl.innerText = '';\n                }\n                else {\n                    this.inputEl.value += event.target.dataset.calcBtn;\n                }\n            }\n        };\n        this.evaluateBtn.addEventListener('click', () => {\n            CalculatorController_1.default.handleEvaluateButtonClick(this.inputEl.value);\n        });\n        Subject_1.default.subscribe(observerEvents_1.observerEvents.CALCULATE, (result) => {\n            this.resultEl.innerText = result + '';\n        });\n        Subject_1.default.subscribe(observerEvents_1.observerEvents.SHOW_ERROR, (errorMessage) => {\n            this.errorBlock.style.display = 'block';\n            this.errorBlock.innerText = errorMessage;\n        });\n    }\n}\nexports[\"default\"] = CalculatorView;\n\n\n//# sourceURL=webpack://new/./src/view/CalculatorView.ts?");

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