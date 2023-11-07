import { factorial } from '../utils/utils';
import { MathOperators, MathOperationPriority, OperatorType, SpecialOperators, Associativity } from './constants';

export type IOperation = {
    priority: number;
    calculate: (...operands: number[]) => number;
    type: string;
    associativity?: string;
    isReplaceable?: boolean,
};

export type OperationsType = Record<MathOperators, IOperation>;

export const operations: OperationsType = {
    [MathOperators.PLUS]: {
        priority: MathOperationPriority.ADD_AND_SUB,
        calculate: (a, b) => a + b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
    },
    [MathOperators.MINUS]: {
        priority: MathOperationPriority.ADD_AND_SUB,
        calculate: (a, b) => a - b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
    },
    [MathOperators.MULTIPLICATION]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a, b) => a * b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
    },
    [MathOperators.DIVISION]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a, b) => a / b,
        type: OperatorType.BINARY,
        associativity: Associativity.LEFT,
    },
    [MathOperators.COS]: {
        priority: MathOperationPriority.TRIGONOMETRIC,
        calculate: Math.cos,
        type: OperatorType.UNARY,
        associativity: Associativity.LEFT,
        isReplaceable: true,
    },
    [MathOperators.SIN]: {
        priority: MathOperationPriority.TRIGONOMETRIC,
        calculate: Math.sin,
        type: OperatorType.UNARY,
        associativity: Associativity.LEFT,
        isReplaceable: true,
    },
    [MathOperators.TAN]: {
        priority: MathOperationPriority.TRIGONOMETRIC,
        calculate: Math.tan,
        type: OperatorType.UNARY,
        associativity: Associativity.LEFT,
        isReplaceable: true,
    },
    [MathOperators.FACTORIAL]: {
        priority: MathOperationPriority.FACTORIAL,
        calculate: factorial,
        type: OperatorType.UNARY,
        isReplaceable: true,
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

