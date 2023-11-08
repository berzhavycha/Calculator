import { IRegExOperatorProcessor } from "./FactorialProcessor";
import { operations } from "../../config/operations";
import { MathOperators } from "../../config/constants";

export class RegularProcessor implements IRegExOperatorProcessor {
    process(tokens: string[], operatorIndex: number): void {
        const operator = operations[tokens[operatorIndex] as MathOperators];
        const leftOperand = parseFloat(tokens[operatorIndex - 1]);
        const rightOperand = parseFloat(tokens[operatorIndex + 1]);
        const result = operator.calculate(leftOperand, rightOperand);

        tokens.splice(operatorIndex - 1, 3, result.toString());
    }
}