import { FactorialProcessor } from '../modelServices/regexCalculation/FactorialProcessor';
import { RegularProcessor } from '../modelServices/regexCalculation/RegularProcessor';
import { TrigonometryProcessor } from '../modelServices/regexCalculation/TrigonometryProcessor';
import { factorial } from '../utils/utils';
import { MathOperators, MathOperationPriority, OperatorType, SpecialOperators, Associativity } from './constants';

export type IOperation = {
    priority: number;
    calculate: (...operands: number[]) => number;
    type: string;
    associativity?: string;
    processorContructor: RegularProcessor | FactorialProcessor | TrigonometryProcessor,
};

export type OperationsType = Record<MathOperators, IOperation>;

export const operations: OperationsType = {
    [MathOperators.PLUS]: {
        priority: MathOperationPriority.ADD_AND_SUB,
        calculate: (a, b) => a + b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
        processorContructor: new RegularProcessor()
    },
    [MathOperators.MINUS]: {
        priority: MathOperationPriority.ADD_AND_SUB,
        calculate: (a, b) => a - b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
        processorContructor: new RegularProcessor()
    },
    [MathOperators.MULTIPLICATION]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a, b) => a * b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
        processorContructor: new RegularProcessor()
    },
    [MathOperators.DIVISION]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a, b) => a / b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
        processorContructor: new RegularProcessor()
    },
    [MathOperators.COS]: {
        priority: MathOperationPriority.TRIGONOMETRIC,
        calculate: Math.cos,
        type: OperatorType.UNARY,
        associativity: Associativity.LEFT,
        processorContructor: new TrigonometryProcessor()
    },
    [MathOperators.SIN]: {
        priority: MathOperationPriority.TRIGONOMETRIC,
        calculate: Math.sin,
        type: OperatorType.UNARY,
        associativity: Associativity.LEFT,
        processorContructor: new TrigonometryProcessor()
    },
    [MathOperators.TAN]: {
        priority: MathOperationPriority.TRIGONOMETRIC,
        calculate: Math.tan,
        type: OperatorType.UNARY,
        associativity: Associativity.LEFT,
        processorContructor: new TrigonometryProcessor()
    },
    [MathOperators.FACTORIAL]: {
        priority: MathOperationPriority.FACTORIAL,
        calculate: factorial,
        type: OperatorType.UNARY,
        processorContructor: new FactorialProcessor()
    },
};

const escapedOperators = [...Object.keys(operations), ...Object.values(SpecialOperators)]
    .map((operator) => (operator !== '-' ? operator : '\\' + operator))
    .map((operator) => operator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

const validOperatorsPattern = escapedOperators.join('|');
const invalidCharactersPattern = '[^\\d\\s' + validOperatorsPattern + ']';
export const TOKENIZE_REGEX_PATTERN = new RegExp(
    `\\d+(\\.\\d+)?|${validOperatorsPattern}|${invalidCharactersPattern}`,
    'g'
);


