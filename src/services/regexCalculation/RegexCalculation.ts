import { OperationsType } from '../../config/operations';
import { Errors, MathOperators, OperatorType, SpecialOperators } from '../../services/constants';
import { reduceAllSpaces } from '../../utils/utils';
import { TOKENIZE_REGEX_PATTERN } from '../../regex/tokenizeRegex';
import { PARENTHESES_EXPRESSION } from '../../regex/parenthesesRegex'
import { ICalculatorModelService } from '../../model/calculatorModel';
import { priorityRegexes } from '../../regex/priorityRegexes';

export class RegexCalculation implements ICalculatorModelService {
  private availableOperators: OperationsType;

  constructor(operations: OperationsType) {
    this.availableOperators = operations;
  }

  private findHighestPriorityOperatorResult(expression: string) {
    for (let i = 0; i < priorityRegexes.length; i++) {
      const matches = expression.match(priorityRegexes[i].regExp);

      if (matches) {
        let operatorIndex: number;

        if (priorityRegexes[i].type === OperatorType.TRIGONOMETRIC) {
          operatorIndex = 1;
        } else {
          operatorIndex = 2;
        }

        return {
          subExpressionResult: this.availableOperators[matches[operatorIndex] as MathOperators].processorConstructor.process(matches),
          subExpressionMatch: matches[0]
        };
      }
    }

    return null
  }

  private calculate(tokens: string[]): number {
    const expression = tokens.join('');
    const highestPriorityOperator = this.findHighestPriorityOperatorResult(expression);

    if (highestPriorityOperator === null) {
      if (tokens.length === 1) {
        return parseFloat(tokens[0]);
      } else {
        throw new Error(Errors.INVALID_EXPRESSION);
      }
    }

    const updatedExpression = expression.replace(highestPriorityOperator.subExpressionMatch, highestPriorityOperator.subExpressionResult.toString());
    const updatedTokens = updatedExpression.match(TOKENIZE_REGEX_PATTERN);

    if (!updatedTokens) {
      throw new Error(Errors.INVALID_EXPRESSION);
    }

    if (updatedTokens[0] === MathOperators.MINUS) {
      updatedTokens.splice(0, 2, updatedTokens[0] + updatedTokens[1]);
    }

    return this.calculate(updatedTokens);
  }

  evaluateExpression(tokens: string[]): number {
    while (tokens.includes(SpecialOperators.LEFT_BRACKET)) {
      const match = tokens.join('').match(PARENTHESES_EXPRESSION);

      if (!match) {
        throw new Error(Errors.UNMATCHED_PARENTHESES);
      }

      const subExpression = match[0].slice(1, -1);
      const subResult = this.evaluate(subExpression);
      tokens = tokens.join('').replace(PARENTHESES_EXPRESSION, subResult.toString()).match(TOKENIZE_REGEX_PATTERN) || [];
    }

    tokens = [this.calculate(tokens).toString()];

    if (tokens.length !== 1) {
      throw new Error(Errors.INVALID_EXPRESSION);
    }

    return parseFloat(tokens[0]);
  }

  public evaluate(expression: string): number {
    if (expression.trim() === '') {
      return 0;
    }

    const tokens = expression.match(TOKENIZE_REGEX_PATTERN);
    const expressionWithoutSpaces = reduceAllSpaces(expression);

    if (!tokens || tokens.join('') !== expressionWithoutSpaces) {
      throw new Error(Errors.INVALID_EXPRESSION);
    }

    return this.evaluateExpression(tokens);
  }
}
