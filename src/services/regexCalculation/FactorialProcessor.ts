import { Errors, MathOperators } from "../constants";
import config from "../../config/operations";
import { IRegexProcessorResult, IRegExOperatorProcessor } from "./RegularProcessor";
import { FACTORIAL_EXPRESSION } from '../../regex/factorialRegex'

export class FactorialProcessor implements IRegExOperatorProcessor {
    process(expression: string, highestPriorityOperator: MathOperators): IRegexProcessorResult {
        const subExpressionMatch = expression.match(FACTORIAL_EXPRESSION);

        if (subExpressionMatch === null) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }

        const operand1 = parseFloat(subExpressionMatch[1]);

        return {
            subExpressionResult: config.operations[highestPriorityOperator].calculate(operand1),
            subExpressionRegex: FACTORIAL_EXPRESSION
        }
    }
}