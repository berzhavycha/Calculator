import { FactorialProcessor } from '../services/regexCalculation/FactorialProcessor';
import { RegularProcessor } from '../services/regexCalculation/RegularProcessor';
import { TrigonometryProcessor } from '../services/regexCalculation/TrigonometryProcessor';
import { factorial } from '../utils/helpFunction';
import {
  MathOperators,
  MathOperationPriority,
  OperatorType,
  Associativity,
  CalculationMethods,
} from '../services/constants';

export type IOperation = {
  priority: number;
  calculate: (...operands: number[]) => number;
  type: string;
  associativity?: string;
  processorConstructor: RegularProcessor | FactorialProcessor | TrigonometryProcessor;
};

export type OperationsType = Record<MathOperators, IOperation>;

const operations: OperationsType = {
  [MathOperators.PLUS]: {
    priority: MathOperationPriority.ADD_AND_SUB,
    calculate: (a, b) => a + b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
    processorConstructor: new RegularProcessor(),
  },
  [MathOperators.MINUS]: {
    priority: MathOperationPriority.ADD_AND_SUB,
    calculate: (a, b) => a - b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
    processorConstructor: new RegularProcessor(),
  },
  [MathOperators.MULTIPLICATION]: {
    priority: MathOperationPriority.MULT_AND_DIVISION,
    calculate: (a, b) => a * b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
    processorConstructor: new RegularProcessor(),
  },
  [MathOperators.DIVISION]: {
    priority: MathOperationPriority.MULT_AND_DIVISION,
    calculate: (a, b) => a / b,
    type: OperatorType.BINARY,
    associativity: Associativity.LEFT,
    processorConstructor: new RegularProcessor(),
  },
  [MathOperators.COS]: {
    priority: MathOperationPriority.TRIGONOMETRIC,
    calculate: Math.cos,
    type: OperatorType.TRIGONOMETRIC,
    associativity: Associativity.LEFT,
    processorConstructor: new TrigonometryProcessor(),
  },
  [MathOperators.SIN]: {
    priority: MathOperationPriority.TRIGONOMETRIC,
    calculate: Math.sin,
    type: OperatorType.TRIGONOMETRIC,
    associativity: Associativity.LEFT,
    processorConstructor: new TrigonometryProcessor(),
  },
  [MathOperators.TAN]: {
    priority: MathOperationPriority.TRIGONOMETRIC,
    calculate: Math.tan,
    type: OperatorType.TRIGONOMETRIC,
    associativity: Associativity.LEFT,
    processorConstructor: new TrigonometryProcessor(),
  },
  [MathOperators.FACTORIAL]: {
    priority: MathOperationPriority.FACTORIAL,
    calculate: factorial,
    type: OperatorType.UNARY,
    processorConstructor: new FactorialProcessor(),
  },
};

export default Object.freeze({
  operations,
  CalculationMethod: CalculationMethods.REGEX_CALCULATION,
});
