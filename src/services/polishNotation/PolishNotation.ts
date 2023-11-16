import { OperatorType, MathOperators, SpecialOperators, Errors } from '@services';
import { TOKENIZE_REGEX_PATTERN } from '@regex';
import { LeftBracketProcessor, RightBracketProcessor, IOperatorProcessor, OperatorProcessor } from './processors';
import { OperationsType } from '@config';
import { isMathOperator, reduceAllSpaces } from '@utils';

type OperatorsProcessorType = Record<MathOperators | SpecialOperators, IOperatorProcessor>;

export class PolishNotation {
  private availableOperators: OperationsType;
  private operatorProcessors: OperatorsProcessorType;

  constructor(operators: OperationsType) {
    this.availableOperators = operators;
    this.operatorProcessors = this.initializeOperatorProcessor(operators);
  }

  private initializeOperatorProcessor(operators: OperationsType): OperatorsProcessorType {
    const mathOperators = [...Object.keys(operators), SpecialOperators.CLEAR_ALL, SpecialOperators.DOT];
    return {
      ...mathOperators.reduce((obj, key) => {
        if (isMathOperator(key)) {
          obj[key] = new OperatorProcessor(this.availableOperators);
        }
        return obj;
      }, {} as OperatorsProcessorType),
      [SpecialOperators.LEFT_BRACKET]: new LeftBracketProcessor(),
      [SpecialOperators.RIGHT_BRACKET]: new RightBracketProcessor(),
    };
  }

  private isSpecialOperator(token: string): token is SpecialOperators {
    return Object.values(SpecialOperators).includes(token as SpecialOperators);
  }

  private executeOperatorProcessor(
    expressionOperators: string[],
    output: string[],
    token: MathOperators | SpecialOperators
  ): void {
    const opProcessor = this.operatorProcessors[token];
    if (opProcessor) {
      opProcessor.process(expressionOperators, output, token);
    } else {
      throw new Error('There is no processor for this token!');
    }
  }

  private infixToPostfix(expression: string[]): string[] {
    const output: string[] = [];
    const expressionOperators: string[] = [];
    let stringOperators: string = '';

    expression.forEach((token) => {
      stringOperators += token;

      if (!isNaN(parseFloat(token))) {
        output.push(token);
      } else if (isMathOperator(token) || this.isSpecialOperator(token)) {
        this.executeOperatorProcessor(expressionOperators, output, token);
        stringOperators = '';
      } else if (isMathOperator(stringOperators)) {
        this.executeOperatorProcessor(expressionOperators, output, stringOperators);
        stringOperators = '';
      }
    });

    output.push(...expressionOperators.reverse());

    return output;
  }

  private tokenize(expression: string): string[] {
    if (expression.trim() === '') {
      return ['0'];
    }

    const expressionWithoutSpaces = reduceAllSpaces(expression);
    const pattern = TOKENIZE_REGEX_PATTERN;
    const tokens = expressionWithoutSpaces.match(pattern);

    if (!tokens || tokens.join('') !== expressionWithoutSpaces) {
      const invalidChars = [...expressionWithoutSpaces.replace(TOKENIZE_REGEX_PATTERN, '')];
      const uniqueInvalidChars = [...new Set(invalidChars)];

      throw new Error('Invalid symbols: ' + uniqueInvalidChars);
    }

    const result: string[] = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const prevToken = tokens[i - 1];

      if (
        token === MathOperators.MINUS &&
        (!prevToken || prevToken === SpecialOperators.LEFT_BRACKET || isMathOperator(prevToken))
      ) {
        const nextToken = tokens[i + 1];
        if (nextToken && !isNaN(parseFloat(nextToken))) {
          result.push(token + nextToken);
          i++;
        } else {
          result.push(token);
        }
      } else {
        result.push(token);
      }
    }

    return result;
  }

  private evaluateBinaryOperator(calculate: (a: number, b: number) => number, stack: (number | string)[] = []): void {
    const a = stack.pop() as number;
    const b = stack.pop() as number;

    stack.push(calculate(b, a));
  }

  private evaluateUnaryOperator(calculate: (a: number) => number, stack: (number | string)[] = []): void {
    const a = stack.pop() as number;
    stack.push(calculate(a));
  }

  public evaluate(expression: string): number {
    const tokens = this.tokenize(expression) ?? [];
    const postfixExpression = this.infixToPostfix(tokens);
    const stack: (number | string)[] = [];

    postfixExpression.forEach((token) => {
      if (!isMathOperator(token)) {
        stack.push(parseFloat(token));
      } else {
        const operator = this.availableOperators[token];
        if (operator.type === OperatorType.BINARY) {
          this.evaluateBinaryOperator(operator.calculate, stack);
        } else if (operator.type === OperatorType.UNARY_LEFT || operator.type === OperatorType.UNARY_RIGHT) {
          this.evaluateUnaryOperator(operator.calculate, stack);
        }
      }
    });

    const result = stack.pop() as number;

    if (!result && result !== 0) {
      throw new Error(Errors.INVALID_EXPRESSION);
    }

    return result;
  }
}
