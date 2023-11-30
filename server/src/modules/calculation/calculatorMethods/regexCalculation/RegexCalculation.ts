import { reduceAllSpaces } from "@utils";
import { isMathOperator } from "../isMathOperator";
import { TOKENIZE_REGEX_PATTERN, PARENTHESES_EXPRESSION, getPrioritizedRegexes } from "@modules";
import { BinaryProcessor, UnaryLeftProcessor, UnaryRightProcessor, IRegExOperatorProcessor } from "./processors";
import { Errors, MathOperators, OperatorType, SpecialOperators, getPriorityInfoArray } from "../index";
import { OperationsType } from "@config";

interface SubExpressionResult {
  subExpressionResult: number;
  subExpressionMatch: string;
}

type OperatorsProcessorType = Record<MathOperators, IRegExOperatorProcessor>;

interface ICalculatorModelService {
  evaluate(expression: string): number;
}

export class RegexCalculation implements ICalculatorModelService {
  private availableOperators: OperationsType;
  private operatorProcessors: OperatorsProcessorType;

  constructor(operations: OperationsType) {
    this.availableOperators = operations;
    this.operatorProcessors = this.initializeOperatorProcessor(this.availableOperators);
  }

  private initializeOperatorProcessor(operators: OperationsType): OperatorsProcessorType {
    return {
      ...Object.keys(operators).reduce((obj, key) => {
        if (isMathOperator(key)) {
          if (this.availableOperators[key].type === OperatorType.BINARY) {
            obj[key] = new BinaryProcessor();
          } else if (this.availableOperators[key].type === OperatorType.UNARY_LEFT) {
            obj[key] = new UnaryLeftProcessor();
          } else {
            obj[key] = new UnaryRightProcessor();
          }
        }
        return obj;
      }, {} as OperatorsProcessorType),
    };
  }

  private findHighestPriorityOperatorResult(expression: string): SubExpressionResult | null {
    const priorityRegexes = getPrioritizedRegexes(getPriorityInfoArray(this.availableOperators));

    for (const priorityRegex of priorityRegexes) {
      const matches = expression.match(priorityRegex.regExp);

      if (matches) {
        const operatorIndex = priorityRegex.type === OperatorType.UNARY_RIGHT ? 1 : 2;

        return {
          subExpressionResult: this.operatorProcessors[matches[operatorIndex] as MathOperators].process(matches),
          subExpressionMatch: matches[0],
        };
      }
    }

    return null;
  }

  private handleNegativeExpression(expression: string[]) {
    if (expression[0] === MathOperators.MINUS) {
      expression.splice(0, 2, expression[0] + expression[1]);
    }
  }

  private calculate(tokens: string[]): number {
    const expression = tokens.join("");
    const highestPriorityOperator = this.findHighestPriorityOperatorResult(expression);

    this.handleNegativeExpression(tokens);

    if (!highestPriorityOperator) {
      if (tokens.length === 1) {
        return parseFloat(tokens[0]);
      } else {
        throw new Error(Errors.INVALID_EXPRESSION);
      }
    }

    const updatedExpression = expression.replace(
      highestPriorityOperator.subExpressionMatch,
      highestPriorityOperator.subExpressionResult.toString(),
    );
    const updatedTokens = updatedExpression.match(TOKENIZE_REGEX_PATTERN);

    if (!updatedTokens) {
      throw new Error(Errors.INVALID_EXPRESSION);
    }

    this.handleNegativeExpression(updatedTokens);

    return this.calculate(updatedTokens);
  }

  private evaluateExpression(tokens: string[]): number {
    while (tokens.includes(SpecialOperators.LEFT_BRACKET)) {
      const matches = tokens.join("").match(PARENTHESES_EXPRESSION);

      if (!matches) {
        throw new Error(Errors.UNMATCHED_PARENTHESES);
      }

      matches.forEach((match) => {
        const subExpression = match.slice(1, -1);
        const subResult = this.evaluate(subExpression);
        tokens = tokens.join("").replace(match, subResult.toString()).match(TOKENIZE_REGEX_PATTERN) ?? [];
      });
    }

    tokens = [this.calculate(tokens).toString()];

    if (tokens.length !== 1) {
      throw new Error(Errors.INVALID_EXPRESSION);
    }

    return parseFloat(tokens[0]);
  }

  public evaluate(expression: string): number {
    if (expression.trim() === "") {
      return 0;
    }

    const tokens = expression.match(TOKENIZE_REGEX_PATTERN);
    const expressionWithoutSpaces = reduceAllSpaces(expression);

    if (!tokens || tokens.join("") !== expressionWithoutSpaces) {
      const invalidChars = [...expressionWithoutSpaces.replace(TOKENIZE_REGEX_PATTERN, "")];
      const uniqueInvalidChars = [...new Set(invalidChars)];

      throw new Error("Invalid symbols: " + uniqueInvalidChars);
    }

    return this.evaluateExpression(tokens);
  }
}
