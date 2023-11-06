import { factorial } from '../utils/utils';
import { MathOperators, MathOperationPriority, OperatorType, SpecialOperators, Associativity } from './constants';

export type IOperation = {
  priority: number;
  calculate: (...operands: number[]) => number;
  type: string;
  associativity?: string;
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
    priority: MathOperationPriority.MULT_AND_DIVISION,
    calculate: (a) => Math.cos(a),
    type: OperatorType.UNARY,
    associativity: Associativity.LEFT,
  },
  [MathOperators.SIN]: {
    priority: MathOperationPriority.MULT_AND_DIVISION,
    calculate: (a) => Math.sin(a),
    type: OperatorType.UNARY,
    associativity: Associativity.LEFT,
  },
  [MathOperators.TAN]: {
    priority: MathOperationPriority.MULT_AND_DIVISION,
    calculate: (a) => Math.tan(a),
    type: OperatorType.UNARY,
    associativity: Associativity.LEFT,
  },
  [MathOperators.FACTORIAL]: {
    priority: MathOperationPriority.MULT_AND_DIVISION,
    calculate: factorial,
    type: OperatorType.UNARY,
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
