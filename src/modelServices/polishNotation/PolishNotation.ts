import { OperatorType, MathOperators, SpecialOperators, Errors } from '../../config/constants';
import { OperationsType, TOKENIZE_REGEX_PATTERN } from '../../config/operations';
import { LeftBracketProcessor } from './LeftBracketsProcessor';
import { RightBracketProcessor } from './RightBracketsProcessor';
import { IOperatorProcessor, OperatorProcessor } from './OperatorProcessor';
import { ICalculatorModelService } from '../../model/CalculatorModel';
import { isMathOperator } from '../../utils/utils';

type OperatorsProcessorType = Record<MathOperators | SpecialOperators, IOperatorProcessor>;

class PolishNotation implements ICalculatorModelService {
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

    private executeOperatorProcessor(
        expressionOperators: string[],
        output: string[],
        token: MathOperators | SpecialOperators
    ) {
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
            } else if (isMathOperator(token) || isMathOperator(token)) {
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

    private reduceAllSpaces(expression: string): string {
        return expression.split('').reduce((acc, char) => {
            if (char !== ' ') {
                acc += char;
            }
            return acc;
        }, '');
    }

    private tokenize(expression: string): string[] {
        if (expression.trim() === '') {
            return ['0'];
        }

        const expressionWithoutSpaces = this.reduceAllSpaces(expression);
        const pattern = TOKENIZE_REGEX_PATTERN;
        const tokens = expressionWithoutSpaces.match(pattern);

        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {
            throw new Error(Errors.INVALID_SYMBOL);
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

    private evaluateBinaryOperator(calculate: (a: number, b: number) => number, stack: (number | string)[] = []) {
        const a = stack.pop() as number;
        const b = stack.pop() as number;

        stack.push(calculate(b, a));
    }

    private evaluateUnaryOperator(calculate: (a: number) => number, stack: (number | string)[] = []) {
        const a = stack.pop() as number;
        stack.push(calculate(a));
    }

    public evaluate(expression: string): number {
        const tokens = this.tokenize(expression) || [];
        const postfixExpression = this.infixToPostfix(tokens);
        const stack: (number | string)[] = [];

        postfixExpression.forEach((token) => {
            if (!isMathOperator(token)) {
                stack.push(parseFloat(token));
            } else {
                const operator = this.availableOperators[token];
                if (operator.type === OperatorType.BINARY) {
                    this.evaluateBinaryOperator(operator.calculate, stack);
                } else if (operator.type === OperatorType.UNARY) {
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

export default PolishNotation;
