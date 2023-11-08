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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_observerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\n\nclass Subject {\n    constructor() {\n        this.events = _config_observerEvents__WEBPACK_IMPORTED_MODULE_0__.observerEventsContainer;\n    }\n    subscribe(eventName, callback) {\n        if (!(eventName in this.events)) {\n            this.events[eventName] = [];\n        }\n        this.events[eventName].push(callback);\n    }\n    unsubscribe(eventName) {\n        delete this.events[eventName];\n    }\n    notify(eventName, argc) {\n        if (eventName in this.events) {\n            for (const callback of this.events[eventName]) {\n                callback(argc);\n            }\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Subject());\n\n\n//# sourceURL=webpack://new/./src/Observer/Subject.ts?");

/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Associativity: () => (/* binding */ Associativity),\n/* harmony export */   Errors: () => (/* binding */ Errors),\n/* harmony export */   MathOperationPriority: () => (/* binding */ MathOperationPriority),\n/* harmony export */   MathOperators: () => (/* binding */ MathOperators),\n/* harmony export */   OperatorType: () => (/* binding */ OperatorType),\n/* harmony export */   SpecialOperators: () => (/* binding */ SpecialOperators)\n/* harmony export */ });\nvar MathOperators;\n(function (MathOperators) {\n    MathOperators[\"PLUS\"] = \"+\";\n    MathOperators[\"MINUS\"] = \"-\";\n    MathOperators[\"MULTIPLICATION\"] = \"*\";\n    MathOperators[\"DIVISION\"] = \"/\";\n    MathOperators[\"COS\"] = \"cos\";\n    MathOperators[\"SIN\"] = \"sin\";\n    MathOperators[\"TAN\"] = \"tan\";\n    MathOperators[\"FACTORIAL\"] = \"!\";\n})(MathOperators || (MathOperators = {}));\nvar Errors;\n(function (Errors) {\n    Errors[\"INVALID_SYMBOL\"] = \"Invalid symbols in the input expression.\";\n    Errors[\"INVALID_EXPRESSION\"] = \"Invalid math expression\";\n    Errors[\"UNMATCHED_PARENTHESES\"] = \"Unmatched parentheses\";\n})(Errors || (Errors = {}));\nvar SpecialOperators;\n(function (SpecialOperators) {\n    SpecialOperators[\"LEFT_BRACKET\"] = \"(\";\n    SpecialOperators[\"RIGHT_BRACKET\"] = \")\";\n    SpecialOperators[\"DOT\"] = \".\";\n    SpecialOperators[\"CLEAR_ALL\"] = \"C\";\n})(SpecialOperators || (SpecialOperators = {}));\nvar Associativity;\n(function (Associativity) {\n    Associativity[\"LEFT\"] = \"left\";\n    Associativity[\"RIGHT\"] = \"right\";\n})(Associativity || (Associativity = {}));\nvar MathOperationPriority;\n(function (MathOperationPriority) {\n    MathOperationPriority[MathOperationPriority[\"ADD_AND_SUB\"] = 1] = \"ADD_AND_SUB\";\n    MathOperationPriority[MathOperationPriority[\"MULT_AND_DIVISION\"] = 2] = \"MULT_AND_DIVISION\";\n    MathOperationPriority[MathOperationPriority[\"FACTORIAL\"] = 3] = \"FACTORIAL\";\n    MathOperationPriority[MathOperationPriority[\"TRIGONOMETRIC\"] = 4] = \"TRIGONOMETRIC\";\n    MathOperationPriority[MathOperationPriority[\"EXPONENTIATION\"] = 5] = \"EXPONENTIATION\";\n    MathOperationPriority[MathOperationPriority[\"PARENTHESES\"] = 6] = \"PARENTHESES\";\n})(MathOperationPriority || (MathOperationPriority = {}));\nvar OperatorType;\n(function (OperatorType) {\n    OperatorType[\"BINARY\"] = \"binary\";\n    OperatorType[\"UNARY\"] = \"unary\";\n})(OperatorType || (OperatorType = {}));\n\n\n//# sourceURL=webpack://new/./src/config/constants.ts?");

/***/ }),

/***/ "./src/config/observerEvents.ts":
/*!**************************************!*\
  !*** ./src/config/observerEvents.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ObserverEvents: () => (/* binding */ ObserverEvents),\n/* harmony export */   observerEventsContainer: () => (/* binding */ observerEventsContainer)\n/* harmony export */ });\n/* eslint-disable @typescript-eslint/no-explicit-any */\nvar ObserverEvents;\n(function (ObserverEvents) {\n    ObserverEvents[\"CALCULATED\"] = \"calculated\";\n    ObserverEvents[\"SHOW_ERROR\"] = \"showError\";\n    ObserverEvents[\"EVALUATE_BUTTON_CLICK\"] = \"evaluateButtonClick\";\n    ObserverEvents[\"EVALUATE_EXPRESSION\"] = \"evaluateExpression\";\n})(ObserverEvents || (ObserverEvents = {}));\nconst observerEventsContainer = {\n    [ObserverEvents.CALCULATED]: [],\n    [ObserverEvents.SHOW_ERROR]: [],\n    [ObserverEvents.EVALUATE_BUTTON_CLICK]: [],\n    [ObserverEvents.EVALUATE_EXPRESSION]: [],\n};\n\n\n//# sourceURL=webpack://new/./src/config/observerEvents.ts?");

/***/ }),

/***/ "./src/config/operations.ts":
/*!**********************************!*\
  !*** ./src/config/operations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TOKENIZE_REGEX_PATTERN: () => (/* binding */ TOKENIZE_REGEX_PATTERN),\n/* harmony export */   operations: () => (/* binding */ operations)\n/* harmony export */ });\n/* harmony import */ var _modelServices_regexCalculation_FactorialProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelServices/regexCalculation/FactorialProcessor */ \"./src/modelServices/regexCalculation/FactorialProcessor.ts\");\n/* harmony import */ var _modelServices_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelServices/regexCalculation/RegularProcessor */ \"./src/modelServices/regexCalculation/RegularProcessor.ts\");\n/* harmony import */ var _modelServices_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modelServices/regexCalculation/TrigonometryProcessor */ \"./src/modelServices/regexCalculation/TrigonometryProcessor.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./src/config/constants.ts\");\n\n\n\n\n\nconst operations = {\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.PLUS]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.ADD_AND_SUB,\n        calculate: (a, b) => a + b,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorContructor: new _modelServices_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.MINUS]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.ADD_AND_SUB,\n        calculate: (a, b) => a - b,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorContructor: new _modelServices_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.MULTIPLICATION]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.MULT_AND_DIVISION,\n        calculate: (a, b) => a * b,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorContructor: new _modelServices_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.DIVISION]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.MULT_AND_DIVISION,\n        calculate: (a, b) => a / b,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.BINARY,\n        associativity: _constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorContructor: new _modelServices_regexCalculation_RegularProcessor__WEBPACK_IMPORTED_MODULE_1__.RegularProcessor()\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.COS]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.TRIGONOMETRIC,\n        calculate: Math.cos,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.UNARY,\n        associativity: _constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorContructor: new _modelServices_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__.TrigonometryProcessor()\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.SIN]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.TRIGONOMETRIC,\n        calculate: Math.sin,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.UNARY,\n        associativity: _constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorContructor: new _modelServices_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__.TrigonometryProcessor()\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.TAN]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.TRIGONOMETRIC,\n        calculate: Math.tan,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.UNARY,\n        associativity: _constants__WEBPACK_IMPORTED_MODULE_4__.Associativity.LEFT,\n        processorContructor: new _modelServices_regexCalculation_TrigonometryProcessor__WEBPACK_IMPORTED_MODULE_2__.TrigonometryProcessor()\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_4__.MathOperators.FACTORIAL]: {\n        priority: _constants__WEBPACK_IMPORTED_MODULE_4__.MathOperationPriority.FACTORIAL,\n        calculate: _utils_utils__WEBPACK_IMPORTED_MODULE_3__.factorial,\n        type: _constants__WEBPACK_IMPORTED_MODULE_4__.OperatorType.UNARY,\n        processorContructor: new _modelServices_regexCalculation_FactorialProcessor__WEBPACK_IMPORTED_MODULE_0__.FactorialProcessor()\n    },\n};\nconst escapedOperators = [...Object.keys(operations), ...Object.values(_constants__WEBPACK_IMPORTED_MODULE_4__.SpecialOperators)]\n    .map((operator) => (operator !== '-' ? operator : '\\\\' + operator))\n    .map((operator) => operator.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'));\nconst validOperatorsPattern = escapedOperators.join('|');\nconst invalidCharactersPattern = '[^\\\\d\\\\s' + validOperatorsPattern + ']';\nconst TOKENIZE_REGEX_PATTERN = new RegExp(`\\\\d+(\\\\.\\\\d+)?|${validOperatorsPattern}|${invalidCharactersPattern}`, 'g');\n\n\n//# sourceURL=webpack://new/./src/config/operations.ts?");

/***/ }),

/***/ "./src/config/services.ts":
/*!********************************!*\
  !*** ./src/config/services.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modelServices: () => (/* binding */ modelServices)\n/* harmony export */ });\n/* harmony import */ var _modelServices_polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modelServices/polishNotation/PolishNotation */ \"./src/modelServices/polishNotation/PolishNotation.ts\");\n/* harmony import */ var _modelServices_regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelServices/regexCalculation/RegexCalculation */ \"./src/modelServices/regexCalculation/RegexCalculation.ts\");\n/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations */ \"./src/config/operations.ts\");\n\n\n\nconst modelServices = Object.freeze({\n    polishNotation: new _modelServices_polishNotation_PolishNotation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_operations__WEBPACK_IMPORTED_MODULE_2__.operations),\n    regexCalculation: new _modelServices_regexCalculation_RegexCalculation__WEBPACK_IMPORTED_MODULE_1__.RegexCalculation(_operations__WEBPACK_IMPORTED_MODULE_2__.operations)\n});\n\n\n//# sourceURL=webpack://new/./src/config/services.ts?");

/***/ }),

/***/ "./src/controller/CalculatorController.ts":
/*!************************************************!*\
  !*** ./src/controller/CalculatorController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_observerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\n/* harmony import */ var _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\");\n\n\nclass CalculatorController {\n    constructor() {\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(_config_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_BUTTON_CLICK, (expression) => {\n            _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notify(_config_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_EXPRESSION, expression);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorController);\n\n\n//# sourceURL=webpack://new/./src/controller/CalculatorController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_CalculatorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/CalculatorView */ \"./src/view/CalculatorView.ts\");\n/* harmony import */ var _model_CalculatorModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/CalculatorModel */ \"./src/model/CalculatorModel.ts\");\n/* harmony import */ var _controller_CalculatorController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/CalculatorController */ \"./src/controller/CalculatorController.ts\");\n/* harmony import */ var _config_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/services */ \"./src/config/services.ts\");\n\n\n\n\nnew _view_CalculatorView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nnew _model_CalculatorModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_config_services__WEBPACK_IMPORTED_MODULE_3__.modelServices.regexCalculation);\nnew _controller_CalculatorController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n\n//# sourceURL=webpack://new/./src/index.ts?");

/***/ }),

/***/ "./src/modelServices/polishNotation/LeftBracketsProcessor.ts":
/*!*******************************************************************!*\
  !*** ./src/modelServices/polishNotation/LeftBracketsProcessor.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LeftBracketProcessor: () => (/* binding */ LeftBracketProcessor)\n/* harmony export */ });\nclass LeftBracketProcessor {\n    process(expressionOperators, _output, token) {\n        expressionOperators.push(token);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/modelServices/polishNotation/LeftBracketsProcessor.ts?");

/***/ }),

/***/ "./src/modelServices/polishNotation/OperatorProcessor.ts":
/*!***************************************************************!*\
  !*** ./src/modelServices/polishNotation/OperatorProcessor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OperatorProcessor: () => (/* binding */ OperatorProcessor)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.ts\");\n\nclass OperatorProcessor {\n    constructor(availableOperators) {\n        this.availableOperators = availableOperators;\n    }\n    process(expressionOperators, output, token) {\n        while (expressionOperators.length &&\n            expressionOperators[expressionOperators.length - 1] !== _config_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET &&\n            (this.availableOperators[expressionOperators[expressionOperators.length - 1]].priority >\n                this.availableOperators[token].priority ||\n                (this.availableOperators[expressionOperators[expressionOperators.length - 1]].priority ===\n                    this.availableOperators[token].priority &&\n                    this.availableOperators[token].associativity === _config_constants__WEBPACK_IMPORTED_MODULE_0__.Associativity.LEFT))) {\n            output.push(expressionOperators.pop());\n        }\n        expressionOperators.push(token);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/modelServices/polishNotation/OperatorProcessor.ts?");

/***/ }),

/***/ "./src/modelServices/polishNotation/PolishNotation.ts":
/*!************************************************************!*\
  !*** ./src/modelServices/polishNotation/PolishNotation.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.ts\");\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _LeftBracketsProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftBracketsProcessor */ \"./src/modelServices/polishNotation/LeftBracketsProcessor.ts\");\n/* harmony import */ var _RightBracketsProcessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RightBracketsProcessor */ \"./src/modelServices/polishNotation/RightBracketsProcessor.ts\");\n/* harmony import */ var _OperatorProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OperatorProcessor */ \"./src/modelServices/polishNotation/OperatorProcessor.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n\n\n\n\n\n\nclass PolishNotation {\n    constructor(operators) {\n        this.availableOperators = operators;\n        this.operatorProcessors = this.initializeOperatorProcessor(operators);\n    }\n    initializeOperatorProcessor(operators) {\n        const mathOperators = [...Object.keys(operators), _config_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.CLEAR_ALL, _config_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.DOT];\n        return Object.assign(Object.assign({}, mathOperators.reduce((obj, key) => {\n            if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(key)) {\n                obj[key] = new _OperatorProcessor__WEBPACK_IMPORTED_MODULE_4__.OperatorProcessor(this.availableOperators);\n            }\n            return obj;\n        }, {})), { [_config_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET]: new _LeftBracketsProcessor__WEBPACK_IMPORTED_MODULE_2__.LeftBracketProcessor(), [_config_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.RIGHT_BRACKET]: new _RightBracketsProcessor__WEBPACK_IMPORTED_MODULE_3__.RightBracketProcessor() });\n    }\n    executeOperatorProcessor(expressionOperators, output, token) {\n        const opProcessor = this.operatorProcessors[token];\n        if (opProcessor) {\n            opProcessor.process(expressionOperators, output, token);\n        }\n        else {\n            throw new Error('There is no processor for this token!');\n        }\n    }\n    infixToPostfix(expression) {\n        const output = [];\n        const expressionOperators = [];\n        let stringOperators = '';\n        expression.forEach((token) => {\n            stringOperators += token;\n            if (!isNaN(parseFloat(token))) {\n                output.push(token);\n            }\n            else if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(token) || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(token)) {\n                this.executeOperatorProcessor(expressionOperators, output, token);\n                stringOperators = '';\n            }\n            else if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(stringOperators)) {\n                this.executeOperatorProcessor(expressionOperators, output, stringOperators);\n                stringOperators = '';\n            }\n        });\n        output.push(...expressionOperators.reverse());\n        return output;\n    }\n    tokenize(expression) {\n        if (expression.trim() === '') {\n            return ['0'];\n        }\n        const expressionWithoutSpaces = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.reduceAllSpaces)(expression);\n        const pattern = _config_operations__WEBPACK_IMPORTED_MODULE_1__.TOKENIZE_REGEX_PATTERN;\n        const tokens = expressionWithoutSpaces.match(pattern);\n        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {\n            throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_SYMBOL);\n        }\n        const result = [];\n        for (let i = 0; i < tokens.length; i++) {\n            const token = tokens[i];\n            const prevToken = tokens[i - 1];\n            if (token === _config_constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators.MINUS &&\n                (!prevToken || prevToken === _config_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(prevToken))) {\n                const nextToken = tokens[i + 1];\n                if (nextToken && !isNaN(parseFloat(nextToken))) {\n                    result.push(token + nextToken);\n                    i++;\n                }\n                else {\n                    result.push(token);\n                }\n            }\n            else {\n                result.push(token);\n            }\n        }\n        return result;\n    }\n    evaluateBinaryOperator(calculate, stack = []) {\n        const a = stack.pop();\n        const b = stack.pop();\n        stack.push(calculate(b, a));\n    }\n    evaluateUnaryOperator(calculate, stack = []) {\n        const a = stack.pop();\n        stack.push(calculate(a));\n    }\n    evaluate(expression) {\n        const tokens = this.tokenize(expression) || [];\n        const postfixExpression = this.infixToPostfix(tokens);\n        const stack = [];\n        postfixExpression.forEach((token) => {\n            if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.isMathOperator)(token)) {\n                stack.push(parseFloat(token));\n            }\n            else {\n                const operator = this.availableOperators[token];\n                if (operator.type === _config_constants__WEBPACK_IMPORTED_MODULE_0__.OperatorType.BINARY) {\n                    this.evaluateBinaryOperator(operator.calculate, stack);\n                }\n                else if (operator.type === _config_constants__WEBPACK_IMPORTED_MODULE_0__.OperatorType.UNARY) {\n                    this.evaluateUnaryOperator(operator.calculate, stack);\n                }\n            }\n        });\n        const result = stack.pop();\n        if (!result && result !== 0) {\n            throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        return result;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PolishNotation);\n\n\n//# sourceURL=webpack://new/./src/modelServices/polishNotation/PolishNotation.ts?");

/***/ }),

/***/ "./src/modelServices/polishNotation/RightBracketsProcessor.ts":
/*!********************************************************************!*\
  !*** ./src/modelServices/polishNotation/RightBracketsProcessor.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RightBracketProcessor: () => (/* binding */ RightBracketProcessor)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.ts\");\n\nclass RightBracketProcessor {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    process(expressionOperators, output, _token) {\n        while (expressionOperators.length &&\n            expressionOperators[expressionOperators.length - 1] !== _config_constants__WEBPACK_IMPORTED_MODULE_0__.SpecialOperators.LEFT_BRACKET) {\n            output.push(expressionOperators.pop());\n        }\n        expressionOperators.pop();\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/modelServices/polishNotation/RightBracketsProcessor.ts?");

/***/ }),

/***/ "./src/modelServices/regexCalculation/FactorialProcessor.ts":
/*!******************************************************************!*\
  !*** ./src/modelServices/regexCalculation/FactorialProcessor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FactorialProcessor: () => (/* binding */ FactorialProcessor)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.ts\");\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n\n\nclass FactorialProcessor {\n    process(tokens, operatorIndex) {\n        const operandIndex = operatorIndex - 1;\n        if (operandIndex < 0) {\n            throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        const operand = parseFloat(tokens[operandIndex]);\n        const result = _config_operations__WEBPACK_IMPORTED_MODULE_1__.operations[_config_constants__WEBPACK_IMPORTED_MODULE_0__.MathOperators.FACTORIAL].calculate(operand);\n        tokens.splice(operandIndex, 2, result.toString());\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/modelServices/regexCalculation/FactorialProcessor.ts?");

/***/ }),

/***/ "./src/modelServices/regexCalculation/RegexCalculation.ts":
/*!****************************************************************!*\
  !*** ./src/modelServices/regexCalculation/RegexCalculation.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegexCalculation: () => (/* binding */ RegexCalculation)\n/* harmony export */ });\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.ts\");\n\n\n\nclass RegexCalculation {\n    constructor(operations) {\n        this.availableOperators = operations;\n    }\n    findOperatorIndex(tokens) {\n        let index = -1;\n        let maxPrecedence = -1;\n        for (let i = 0; i < tokens.length; i++) {\n            const token = tokens[i];\n            if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isMathOperator)(token)) {\n                const currentPrecedence = this.availableOperators[token].priority;\n                if (currentPrecedence > maxPrecedence) {\n                    maxPrecedence = currentPrecedence;\n                    index = i;\n                }\n            }\n        }\n        return index;\n    }\n    calculateBinary(tokens) {\n        const operatorIndex = this.findOperatorIndex(tokens);\n        if (operatorIndex === -1) {\n            if (tokens.length === 1) {\n                return parseFloat(tokens[0]);\n            }\n            else {\n                throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_1__.Errors.INVALID_EXPRESSION);\n            }\n        }\n        const operator = tokens[operatorIndex];\n        if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.isMathOperator)(operator)) {\n            const operatorProcessor = this.availableOperators[operator].processorContructor;\n            operatorProcessor.process(tokens, operatorIndex);\n        }\n        return this.calculateBinary(tokens);\n    }\n    evaluateExpression(tokens) {\n        while (tokens.includes(_config_constants__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators.LEFT_BRACKET)) {\n            const openParenIndex = tokens.lastIndexOf(_config_constants__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators.LEFT_BRACKET);\n            const closeParenIndex = tokens.indexOf(_config_constants__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators.RIGHT_BRACKET, openParenIndex);\n            if (openParenIndex === -1 || closeParenIndex === -1) {\n                throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_1__.Errors.UNMATCHED_PARENTHESES);\n            }\n            const subExpression = tokens.slice(openParenIndex + 1, closeParenIndex);\n            const subResult = this.calculateBinary([...subExpression]);\n            tokens.splice(openParenIndex, closeParenIndex - openParenIndex + 1, subResult.toString());\n        }\n        tokens = [this.calculateBinary([...tokens]).toString()];\n        console.log(tokens);\n        if (tokens.length !== 1) {\n            throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_1__.Errors.INVALID_EXPRESSION);\n        }\n        return parseFloat(tokens[0]);\n    }\n    evaluate(expression) {\n        const tokens = expression.match(_config_operations__WEBPACK_IMPORTED_MODULE_0__.TOKENIZE_REGEX_PATTERN);\n        const expressionWithoutSpaces = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.reduceAllSpaces)(expression);\n        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {\n            throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_1__.Errors.INVALID_EXPRESSION);\n        }\n        return this.evaluateExpression(tokens);\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/modelServices/regexCalculation/RegexCalculation.ts?");

/***/ }),

/***/ "./src/modelServices/regexCalculation/RegularProcessor.ts":
/*!****************************************************************!*\
  !*** ./src/modelServices/regexCalculation/RegularProcessor.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegularProcessor: () => (/* binding */ RegularProcessor)\n/* harmony export */ });\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n\nclass RegularProcessor {\n    process(tokens, operatorIndex) {\n        const operator = _config_operations__WEBPACK_IMPORTED_MODULE_0__.operations[tokens[operatorIndex]];\n        const leftOperand = parseFloat(tokens[operatorIndex - 1]);\n        const rightOperand = parseFloat(tokens[operatorIndex + 1]);\n        const result = operator.calculate(leftOperand, rightOperand);\n        tokens.splice(operatorIndex - 1, 3, result.toString());\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/modelServices/regexCalculation/RegularProcessor.ts?");

/***/ }),

/***/ "./src/modelServices/regexCalculation/TrigonometryProcessor.ts":
/*!*********************************************************************!*\
  !*** ./src/modelServices/regexCalculation/TrigonometryProcessor.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrigonometryProcessor: () => (/* binding */ TrigonometryProcessor)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.ts\");\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/operations */ \"./src/config/operations.ts\");\n\n\nclass TrigonometryProcessor {\n    process(tokens, operatorIndex) {\n        const funcName = tokens[operatorIndex];\n        const operandIndex = operatorIndex + 1;\n        if (operandIndex >= tokens.length) {\n            throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        const operand = parseFloat(tokens[operandIndex]);\n        if (isNaN(operand)) {\n            throw new Error(_config_constants__WEBPACK_IMPORTED_MODULE_0__.Errors.INVALID_EXPRESSION);\n        }\n        const trigFunction = _config_operations__WEBPACK_IMPORTED_MODULE_1__.operations[funcName].calculate;\n        const result = trigFunction(operand);\n        tokens.splice(operatorIndex, 2, result.toString());\n    }\n}\n\n\n//# sourceURL=webpack://new/./src/modelServices/regexCalculation/TrigonometryProcessor.ts?");

/***/ }),

/***/ "./src/model/CalculatorModel.ts":
/*!**************************************!*\
  !*** ./src/model/CalculatorModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_observerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\n/* harmony import */ var _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\");\n\n\nclass CalculatorModel {\n    constructor(service) {\n        this.calculationService = service;\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(_config_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.EVALUATE_EXPRESSION, this.handleEvaluateExpression.bind(this));\n    }\n    handleEvaluateExpression(expression) {\n        try {\n            const result = this.evaluate(expression);\n            _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notify(_config_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.CALCULATED, result);\n        }\n        catch (error) {\n            if (error instanceof Error) {\n                _Observer_Subject__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notify(_config_observerEvents__WEBPACK_IMPORTED_MODULE_0__.ObserverEvents.SHOW_ERROR, error.message);\n            }\n        }\n    }\n    evaluate(expression) {\n        return this.calculationService.evaluate(expression);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorModel);\n\n\n//# sourceURL=webpack://new/./src/model/CalculatorModel.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorial: () => (/* binding */ factorial),\n/* harmony export */   isMathOperator: () => (/* binding */ isMathOperator),\n/* harmony export */   reduceAllSpaces: () => (/* binding */ reduceAllSpaces)\n/* harmony export */ });\n/* harmony import */ var _config_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/operations */ \"./src/config/operations.ts\");\n\nfunction factorial(num) {\n    if (num === 0 || num === 1) {\n        return 1;\n    }\n    else {\n        return num * factorial(num - 1);\n    }\n}\nfunction isMathOperator(token) {\n    return token in _config_operations__WEBPACK_IMPORTED_MODULE_0__.operations;\n}\nfunction reduceAllSpaces(expression) {\n    return expression.split('').reduce((acc, char) => {\n        if (char !== ' ') {\n            acc += char;\n        }\n        return acc;\n    }, '');\n}\n\n\n//# sourceURL=webpack://new/./src/utils/utils.ts?");

/***/ }),

/***/ "./src/view/CalculatorView.ts":
/*!************************************!*\
  !*** ./src/view/CalculatorView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observer/Subject */ \"./src/Observer/Subject.ts\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.ts\");\n/* harmony import */ var _config_observerEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/observerEvents */ \"./src/config/observerEvents.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.ts\");\n\n\n\n\nclass CalculatorView {\n    constructor() {\n        this.inputEl = document.querySelector('#expression');\n        this.resultEl = document.querySelector('.result');\n        this.buttonContainer = document.querySelector('.button-container');\n        this.evaluateBtn = document.querySelector('.eval-button');\n        this.errorBlock = document.querySelector('.error-block');\n        this.backspaceBtn = document.querySelector('.backspace');\n        this.buttonContainer.onclick = (event) => {\n            if (event && event.target instanceof HTMLButtonElement) {\n                if (event.target.dataset.calcBtn === _config_constants__WEBPACK_IMPORTED_MODULE_1__.SpecialOperators.CLEAR_ALL) {\n                    this.inputEl.value = '';\n                    this.resultEl.innerText = '0';\n                }\n                else {\n                    this.inputEl.value += event.target.dataset.calcBtn;\n                }\n            }\n        };\n        this.evaluateBtn.addEventListener('click', () => {\n            _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_config_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);\n        });\n        this.inputEl.addEventListener('keydown', (event) => {\n            if (event.key === 'Enter') {\n                _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(_config_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);\n            }\n        });\n        this.backspaceBtn.addEventListener('click', () => {\n            let inputValue = this.inputEl.value;\n            let stringOperator = '';\n            let isFoundOperator = false;\n            for (let i = inputValue.length - 1; i >= 0; i--) {\n                stringOperator = inputValue[i] + stringOperator;\n                if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.isMathOperator)(stringOperator)) {\n                    this.inputEl.value = inputValue.slice(0, -stringOperator.length);\n                    isFoundOperator = true;\n                    break;\n                }\n            }\n            if (!isFoundOperator) {\n                this.inputEl.value = inputValue.slice(0, -1);\n            }\n        });\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_config_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.CALCULATED, this.showResult.bind(this));\n        _Observer_Subject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_config_observerEvents__WEBPACK_IMPORTED_MODULE_2__.ObserverEvents.SHOW_ERROR, this.showError.bind(this));\n    }\n    showResult(result) {\n        this.errorBlock.innerText = '';\n        this.resultEl.innerText = result + '';\n    }\n    showError(errorMessage) {\n        this.errorBlock.innerText = errorMessage;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorView);\n\n\n//# sourceURL=webpack://new/./src/view/CalculatorView.ts?");

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