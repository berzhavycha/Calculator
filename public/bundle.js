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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Observable = void 0;\nclass Observable {\n    constructor() {\n        this.state = { result: null, error: null };\n        this.observers = [];\n    }\n    getState() {\n        return this.state;\n    }\n    subscribe(observer) {\n        this.observers.push(observer);\n    }\n    unsubscribe(observer) {\n        const observerIndex = this.observers.indexOf(observer);\n        if (observerIndex > -1) {\n            this.observers.splice(observerIndex, 1);\n        }\n        else {\n            console.log('Observer doesn`t exist');\n        }\n    }\n    notify() {\n        for (const observer of this.observers) {\n            observer.update(this);\n        }\n    }\n    updateState(newState) {\n        this.state = newState;\n        this.notify();\n    }\n}\nexports.Observable = Observable;\n\n\n//# sourceURL=webpack://new/./src/Observer/Subject.ts?");

/***/ }),

/***/ "./src/controller/calculatorController.ts":
/*!************************************************!*\
  !*** ./src/controller/calculatorController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CalculatorController = void 0;\nclass CalculatorController {\n    constructor(model, view) {\n        this.model = model;\n        this.view = view;\n        this.view.bindEvaluateButtonClick(this.handleEvaluateButtonClick.bind(this));\n        this.model.subscribe(this.view);\n    }\n    handleEvaluateButtonClick(expression) {\n        try {\n            this.model.evaluate(expression);\n        }\n        catch (error) {\n            if (error instanceof Error) {\n                this.view.showError(error.message);\n            }\n        }\n    }\n}\nexports.CalculatorController = CalculatorController;\n\n\n//# sourceURL=webpack://new/./src/controller/calculatorController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst calculatorController_1 = __webpack_require__(/*! ./controller/calculatorController */ \"./src/controller/calculatorController.ts\");\nconst calculatorModel_1 = __webpack_require__(/*! ./model/calculatorModel */ \"./src/model/calculatorModel.ts\");\nconst calculatorView_1 = __webpack_require__(/*! ./view/calculatorView */ \"./src/view/calculatorView.ts\");\nconst app = new calculatorController_1.CalculatorController(new calculatorModel_1.CalculatorModel(), new calculatorView_1.CalculatorView());\n\n\n//# sourceURL=webpack://new/./src/index.ts?");

/***/ }),

/***/ "./src/model/calculatorModel.ts":
/*!**************************************!*\
  !*** ./src/model/calculatorModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CalculatorModel = void 0;\nconst Subject_1 = __webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\");\nconst operators_1 = __webpack_require__(/*! ./operators */ \"./src/model/operators.ts\");\nclass CalculatorModel extends Subject_1.Observable {\n    constructor() {\n        super();\n        this._result = 0;\n        this.operatorRegister = new operators_1.OperatorRegistry();\n        this.availableOperators = {};\n        this.operatorRegister.registerOperator('+', new operators_1.BinaryOperator('+', 1));\n        this.operatorRegister.registerOperator('-', new operators_1.BinaryOperator('-', 1));\n        this.operatorRegister.registerOperator('*', new operators_1.BinaryOperator('*', 2));\n        this.operatorRegister.registerOperator('/', new operators_1.BinaryOperator('/', 2));\n        this.availableOperators = this.operatorRegister.getOperators();\n    }\n    isOperator(token) {\n        return token in this.operatorRegister.getOperators();\n    }\n    infixToPostfix(expression) {\n        const output = [];\n        const expressionOperators = [];\n        expression.forEach(token => {\n            var _a, _b;\n            if (!isNaN(parseFloat(token))) {\n                output.push(token);\n            }\n            else if (this.isOperator(token)) {\n                const topOperator = expressionOperators[expressionOperators.length - 1];\n                while (expressionOperators.length &&\n                    expressionOperators[expressionOperators.length - 1] !== '(' &&\n                    ((_a = this.availableOperators[topOperator]) === null || _a === void 0 ? void 0 : _a.priority) >= ((_b = this.availableOperators[token]) === null || _b === void 0 ? void 0 : _b.priority)) {\n                    output.push(expressionOperators.pop());\n                }\n                expressionOperators.push(token);\n            }\n            else if (token === '(') {\n                expressionOperators.push(token);\n            }\n            else if (token === ')') {\n                while (expressionOperators.length && expressionOperators[expressionOperators.length - 1] !== '(') {\n                    output.push(expressionOperators.pop());\n                }\n                expressionOperators.pop();\n            }\n        });\n        while (expressionOperators.length) {\n            output.push(expressionOperators.pop());\n        }\n        return output;\n    }\n    tokenize(expression) {\n        const tokens = [];\n        let numBuffer = '';\n        let decimalBuffer = '';\n        expression.split('').forEach(char => {\n            if (char === ' ') {\n                if (numBuffer !== '') {\n                    tokens.push(parseFloat(numBuffer + decimalBuffer).toString());\n                    numBuffer = '';\n                    decimalBuffer = '';\n                }\n            }\n            else if (this.isOperator(char) || char === '(' || char === ')') {\n                if (numBuffer !== '') {\n                    tokens.push(parseFloat(numBuffer + decimalBuffer).toString());\n                    numBuffer = '';\n                    decimalBuffer = '';\n                }\n                tokens.push(char);\n            }\n            else if (char >= '0' && char <= '9') {\n                if (decimalBuffer === '') {\n                    numBuffer += char;\n                }\n                else {\n                    decimalBuffer += char;\n                }\n            }\n            else if (char === '.') {\n                if (decimalBuffer === '') {\n                    decimalBuffer = '.';\n                }\n                else {\n                    throw new Error(`Invalid character: ${char}`);\n                }\n            }\n            else {\n                throw new Error(`Invalid character: ${char}`);\n            }\n        });\n        if (numBuffer !== '' || decimalBuffer !== '') {\n            tokens.push(parseFloat(numBuffer + decimalBuffer).toString());\n        }\n        return tokens;\n    }\n    evaluate(expression) {\n        const tokens = this.tokenize(expression) || [];\n        const postfixExpression = this.infixToPostfix(tokens);\n        const stack = [];\n        postfixExpression.forEach(token => {\n            if (!this.isOperator(token)) {\n                stack.push(parseFloat(token));\n            }\n            else {\n                const operator = this.availableOperators[token];\n                if (operator instanceof operators_1.BinaryOperator) {\n                    const a = stack.pop();\n                    const b = stack.pop();\n                    stack.push(operator.calculate(b, a));\n                }\n                else if (operator instanceof operators_1.UnaryOperator) {\n                    const a = stack.pop();\n                    stack.push(operator.calculate(a));\n                }\n            }\n        });\n        this._result = stack.pop();\n        this.updateState({ result: this._result, error: null });\n    }\n}\nexports.CalculatorModel = CalculatorModel;\n\n\n//# sourceURL=webpack://new/./src/model/calculatorModel.ts?");

/***/ }),

/***/ "./src/model/operators.ts":
/*!********************************!*\
  !*** ./src/model/operators.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.OperatorRegistry = exports.UnaryOperator = exports.BinaryOperator = void 0;\nclass BinaryOperator {\n    constructor(symbol, priority) {\n        this.symbol = symbol;\n        this.priority = priority;\n    }\n    calculate(a, b) {\n        switch (this.symbol) {\n            case '+':\n                return a + b;\n            case '-':\n                return a - b;\n            case '*':\n                return a * b;\n            case '/':\n                return a / b;\n            case '^':\n                return a ** b;\n            default:\n                throw new Error(\"Invalid operator: \" + this.symbol);\n        }\n    }\n}\nexports.BinaryOperator = BinaryOperator;\nclass UnaryOperator {\n    constructor(symbol, priority) {\n        this.symbol = symbol;\n        this.priority = priority;\n    }\n    factorial(n) {\n        if (n === 0 || n === 1) {\n            return 1;\n        }\n        else {\n            return n * this.factorial(n - 1);\n        }\n    }\n    calculate(a) {\n        switch (this.symbol) {\n            case '!':\n                return this.factorial(a);\n            default:\n                throw new Error(\"Invalid operator: \" + this.symbol);\n        }\n    }\n}\nexports.UnaryOperator = UnaryOperator;\nclass OperatorRegistry {\n    constructor() {\n        this.operators = {};\n    }\n    getOperators() {\n        return this.operators;\n    }\n    registerOperator(symbol, operator) {\n        this.operators[symbol] = operator;\n    }\n}\nexports.OperatorRegistry = OperatorRegistry;\n\n\n//# sourceURL=webpack://new/./src/model/operators.ts?");

/***/ }),

/***/ "./src/view/calculatorView.ts":
/*!************************************!*\
  !*** ./src/view/calculatorView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CalculatorView = void 0;\nclass CalculatorView {\n    constructor() {\n        this.inputEl = document.querySelector('#expression');\n        this.resultEl = document.querySelector('.result');\n        this.buttonContainer = document.querySelector('.button-container');\n        this.evaluateBtn = document.querySelector('.eval-button');\n        this.errorBlock = document.querySelector('.error-block');\n        this.buttonContainer.onclick = (event) => {\n            if (event && event.target instanceof HTMLButtonElement) {\n                if (event.target.innerText === 'C') {\n                    this.inputEl.value = '';\n                    this.resultEl.innerText = '';\n                }\n                else {\n                    this.inputEl.value += event.target.innerText;\n                }\n            }\n        };\n    }\n    showError(errorMessage) {\n        if (this.errorBlock) {\n            this.errorBlock.style.display = 'block';\n            this.errorBlock.innerText = errorMessage;\n        }\n    }\n    bindEvaluateButtonClick(handler) {\n        this.evaluateBtn.addEventListener('click', () => {\n            handler(this.inputEl.value);\n        });\n    }\n    update(subject) {\n        const { result, error } = subject.getState();\n        if (result) {\n            this.resultEl.innerText = result + '';\n        }\n        if (error) {\n            this.showError(error);\n        }\n    }\n}\nexports.CalculatorView = CalculatorView;\n\n\n//# sourceURL=webpack://new/./src/view/calculatorView.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;