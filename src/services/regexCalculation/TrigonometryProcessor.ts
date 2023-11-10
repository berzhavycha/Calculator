import { Errors, MathOperators } from "../constants";
import config from "../../config/operations";
import { escapeRegExp, getTrigonometricExpressionRegex } from "../../utils/utils";
import { IRegexProcessorResult, IRegExOperatorProcessor } from "./RegularProcessor";

export class TrigonometryProcessor implements IRegExOperatorProcessor {
    process(expression: string, highestPriorityOperator: MathOperators): IRegexProcessorResult {
        const operatorRegexPattern = escapeRegExp(highestPriorityOperator);
        const subExpressionRegex = getTrigonometricExpressionRegex(operatorRegexPattern);
        const subExpressionMatch = expression.match(subExpressionRegex);

        if (subExpressionMatch === null) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }

        const operand1 = parseFloat(subExpressionMatch[1]);

        return {
            subExpressionResult: config.operations[highestPriorityOperator].calculate(operand1),
            subExpressionRegex
        }
    }
}