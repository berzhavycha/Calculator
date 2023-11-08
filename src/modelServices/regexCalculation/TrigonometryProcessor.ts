import { Errors, MathOperators } from "../../config/constants";
import { operations } from "../../config/operations";
import { IRegExOperatorProcessor } from "./FactorialProcessor";

export class TrigonometryProcessor implements IRegExOperatorProcessor {
    process(tokens: string[], operatorIndex: number): void {
        const funcName = tokens[operatorIndex];
        const operandIndex = operatorIndex + 1;

        if (operandIndex >= tokens.length) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }

        const operand = parseFloat(tokens[operandIndex]);
        if (isNaN(operand)) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }

        const trigFunction = operations[funcName as MathOperators].calculate
        const result = trigFunction(operand);
        tokens.splice(operatorIndex, 2, result.toString());
    }
}