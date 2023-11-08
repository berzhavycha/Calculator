import { Errors, MathOperators } from "../../config/constants";
import { operations } from "../../config/operations";

export interface IRegExOperatorProcessor {
    process(tokens: string[], operatorIndex: number): void;
}

export class FactorialProcessor implements IRegExOperatorProcessor {
    process(tokens: string[], operatorIndex: number) {
        const operandIndex = operatorIndex - 1;

        if (operandIndex < 0) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }

        const operand = parseFloat(tokens[operandIndex]);
        const result = operations[MathOperators.FACTORIAL].calculate(operand)
        tokens.splice(operandIndex, 2, result.toString());
    }
}