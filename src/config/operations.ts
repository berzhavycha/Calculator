import { Operators } from "./constants";
import { MathOperationPriority, OperatorType } from "./constants";

export interface IOperations {
    [key: string]: {
        priority: number
        calculate: (...operands: number[]) => number,
        type: string
    };
}

export const operations: IOperations = {
    [Operators.PLUS]: {
        priority: MathOperationPriority.PLUS,
        calculate: (a: number, b: number) => a + b,
        type: OperatorType.BINARY
    },
    [Operators.MINUS]: {
        priority: MathOperationPriority.MINUS,
        calculate: (a: number, b: number) => a - b,
        type: OperatorType.BINARY
    },
    [Operators.MULTIPLICATION]: {
        priority: MathOperationPriority.MULTIPLICATION,
        calculate: (a: number, b: number) => a * b,
        type: OperatorType.BINARY
    },
    [Operators.DIVISION]: {
        priority: MathOperationPriority.DIVISION,
        calculate: (a: number, b: number) => a / b,
        type: OperatorType.BINARY
    },
};