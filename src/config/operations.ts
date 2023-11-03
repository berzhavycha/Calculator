import { factorial } from '../utils/utils'
import { MathOperators, MathOperationPriority, OperatorType, SpecialOperators } from './constants'

export type IOperation = {
    priority: number
    calculate: (...operands: number[]) => number
    type: string
}

export type operationsType = Record<MathOperators, IOperation>

export const operations: operationsType = {
    [MathOperators.PLUS]: {
        priority: MathOperationPriority.ADD_AND_SUB,
        calculate: (a, b) => a + b,
        type: OperatorType.BINARY,
    },
    [MathOperators.MINUS]: {
        priority: MathOperationPriority.ADD_AND_SUB,
        calculate: (a, b) => a - b,
        type: OperatorType.BINARY,
    },
    [MathOperators.MULTIPLICATION]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a, b) => a * b,
        type: OperatorType.BINARY,
    },
    [MathOperators.DIVISION]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a, b) => a / b,
        type: OperatorType.BINARY,
    },
    [MathOperators.COS]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a) => Math.cos(a),
        type: OperatorType.UNARY,
    },
    [MathOperators.SIN]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a) => Math.sin(a),
        type: OperatorType.UNARY,
    },
    [MathOperators.TAN]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a) => Math.tan(a),
        type: OperatorType.UNARY,
    },
    [MathOperators.FACTORIAL]: {
        priority: MathOperationPriority.MULT_AND_DIVISION,
        calculate: (a) => factorial(a),
        type: OperatorType.UNARY,
    }
}

const escapedOperators = [...Object.keys(operations), ...Object.values(SpecialOperators)]
    .map(operator => operator !== '-' ? operator : '\\' + operator);
export const TOKENIZE_REGEX_PATTERN = new RegExp(`\\d+(\\.\\d+)?|[${escapedOperators.join('|')}]`, 'g')
