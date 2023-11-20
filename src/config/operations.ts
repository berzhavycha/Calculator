import { factorial } from '@utils';
import { MathOperators, MathOperationPriority, OperatorType, Associativity, CalculationMethods } from '@services';

export type IOperation = {
  priority: number;
  calculate: (...operands: number[]) => number;
  type: string;
  associativity?: string;
};

export type OperationsType = Record<MathOperators, IOperation>;

const operations: OperationsType = {
  [MathOperators.PLUS]: {
    priority: MathOperationPriority.LOW,
    calculate: (a, b) => a + b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
  },
  [MathOperators.MINUS]: {
    priority: MathOperationPriority.LOW,
    calculate: (a, b) => a - b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
  },
  [MathOperators.MULTIPLICATION]: {
    priority: MathOperationPriority.MEDIUM,
    calculate: (a, b) => a * b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
  },
  [MathOperators.DIVISION]: {
    priority: MathOperationPriority.MEDIUM,
    calculate: (a, b) => a / b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
  },
  [MathOperators.COS]: {
    priority: MathOperationPriority.HIGH,
    calculate: Math.cos,
    type: OperatorType.UNARY_RIGHT,
    associativity: Associativity.LEFT,
  },
  [MathOperators.SIN]: {
    priority: MathOperationPriority.HIGH,
    calculate: Math.sin,
    type: OperatorType.UNARY_RIGHT,
    associativity: Associativity.LEFT,
  },
  [MathOperators.TAN]: {
    priority: MathOperationPriority.HIGH,
    calculate: Math.tan,
    type: OperatorType.UNARY_RIGHT,
    associativity: Associativity.LEFT,
  },
  [MathOperators.FACTORIAL]: {
    priority: MathOperationPriority.CRITICAL,
    calculate: factorial,
    type: OperatorType.UNARY_LEFT,
  },
};

export default Object.freeze({
  operations,
  CalculationMethod: CalculationMethods.POLISH_NOTATION,
});
