import { MathOperators, MathOperationPriority, OperatorType } from "./constants";

export type IOperations = {
    [key in MathOperators]: {
        priority: number
        calculate: (...operands: number[]) => number,
        type: string,
    };
}

export const operations: IOperations = {
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

};


export const TOKENIZE_REGEX_PATTERN = new RegExp(
    `\\d+(\\.\\d+)?|[()+${Object.keys(operations).join("\\|\\")}]`,
    "g"
);
