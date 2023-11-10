import config from '../../config/operations';
import { Errors, MathOperators } from '../constants';
import { escapeRegExp, getRegularExpressionRegex } from '../../utils/utils';
import { UNARY_MINUS_EXPRESSION } from '../../regex/unaryMinusExpression';

export interface IRegexProcessorResult {
  subExpressionResult: number;
  subExpressionRegex: RegExp;
}

export interface IRegExOperatorProcessor {
  process(expression: string, highestPriorityOperator: MathOperators): IRegexProcessorResult;
}

export class RegularProcessor implements IRegExOperatorProcessor {
  process(expression: string, highestPriorityOperator: MathOperators): IRegexProcessorResult {
    const operatorRegexPattern = escapeRegExp(highestPriorityOperator);
    let subExpressionRegex = getRegularExpressionRegex(operatorRegexPattern);
    const subExpressionMatch = expression.match(subExpressionRegex);
    const unaryMinusExpressionMatch = expression.match(UNARY_MINUS_EXPRESSION);
    let subExpressionResult: number;

    if (subExpressionMatch) {
      const operand1 = parseFloat(subExpressionMatch[1]);
      const operand2 = parseFloat(subExpressionMatch[2]);

      subExpressionResult = config.operations[highestPriorityOperator].calculate(operand1, operand2);
    } else if (unaryMinusExpressionMatch) {
      subExpressionResult = parseFloat(expression);
      subExpressionRegex = UNARY_MINUS_EXPRESSION;
    } else {
      throw new Error(Errors.INVALID_EXPRESSION);
    }

    return {
      subExpressionResult: subExpressionResult,
      subExpressionRegex,
    };
  }
}
