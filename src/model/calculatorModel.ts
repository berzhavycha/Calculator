import subject from '../Observer/Subject'
import { OperatorType, MathOperators, SpecialOperators } from '../config/constants'
import { ObserverEvents } from '../config/observerEvents'
import { operationsType, TOKENIZE_REGEX_PATTERN } from '../config/operations'
import { LeftBracketProcessor } from './LeftBracketsProcessor'
import { RightBracketProcessor } from './RightBracketsProcessor'
import { IOperatorProcessor, OperatorProcessor } from './OperatorProcessor'

type operatorsProcessorType = Record<MathOperators | SpecialOperators, IOperatorProcessor>

class CalculatorModel {
    private availableOperators: operationsType
    private operatorProcessors: operatorsProcessorType

    constructor(operators: operationsType) {
        this.availableOperators = operators
        this.operatorProcessors = this.initializeOperatorProcessor(operators);
        subject.subscribe(ObserverEvents.EVALUATE_EXPRESSION, this.handleEvaluateExpression.bind(this))
    }

    private initializeOperatorProcessor(operators: operationsType) {
        const mathOperators = [...Object.keys(operators), SpecialOperators.CLEAR_ALL, SpecialOperators.DOT]
        return {
            ...mathOperators.reduce((obj, key) => {
                if (this.isMathOperator(key)) {
                    obj[key] = new OperatorProcessor(this.availableOperators);
                }
                return obj;
            }, {} as operatorsProcessorType),
            [SpecialOperators.LEFT_BRACKET]: new LeftBracketProcessor(),
            [SpecialOperators.RIGHT_BRACKET]: new RightBracketProcessor(),
        };
    }

    private handleEvaluateExpression(expression: string): void {
        try {
            const result = this.evaluate(expression);
            subject.notify(ObserverEvents.CALCULATED, result);
        } catch (error) {
            if (error instanceof Error) {
                subject.notify(ObserverEvents.SHOW_ERROR, error.message);
            }
        }
    }

    private isMathOperator(token: string): token is MathOperators {
        return token in this.availableOperators;
    }

    private isSpecialOperator(token: string): token is SpecialOperators {
        return Object.values(SpecialOperators).includes(token as SpecialOperators);
    }

    private executeOperatorProcessor(expressionOperators: string[], output: string[], token: MathOperators | SpecialOperators) {
        const opProcessor = this.operatorProcessors[token]
        if (opProcessor) {
            opProcessor.process(expressionOperators, output, token)
        } else {
            throw new Error('There is no processor for this token!')
        }
    }

    private infixToPostfix(expression: string[]): string[] {
        const output: string[] = []
        const expressionOperators: string[] = []
        let stringOperators: string = ''

        expression.forEach((token) => {
            stringOperators += token

            if (!isNaN(parseFloat(token))) {
                output.push(token)
            } else {
                if (this.isMathOperator(token) || this.isSpecialOperator(token)) {
                    this.executeOperatorProcessor(expressionOperators, output, token)
                    stringOperators = ''
                } else if (this.isMathOperator(stringOperators)) {
                    this.executeOperatorProcessor(expressionOperators, output, stringOperators)
                    stringOperators = ''
                }
            }
        })

        while (expressionOperators.length) {
            output.push(expressionOperators.pop() as string)
        }

        return output
    }

    private tokenize(expression: string): string[] {
        const pattern = TOKENIZE_REGEX_PATTERN
        const tokens = expression.match(pattern)

        if (!tokens) {
            const invalidSymbols = expression
                .split('')
                .filter((symbol) => !pattern.test(symbol))
                .join('')
            throw new Error(`Invalid symbol(s): - ${invalidSymbols}`)
        }

        const result: string[] = [];
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const prevToken = tokens[i - 1];

            if (token === MathOperators.MINUS && (!prevToken || prevToken === SpecialOperators.LEFT_BRACKET || this.isMathOperator(prevToken))) {
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

    private evaluateBinaryOperator(stack: (number | string)[] = [], calculate: (a: number, b: number) => number) {
        const a = stack.pop() as number
        const b = stack.pop() as number

        stack.push(calculate(b, a))
    }

    private evaluateUnaryOperator(stack: (number | string)[] = [], calculate: (a: number) => number) {
        const a = stack.pop() as number
        stack.push(calculate(a))
    }

    public evaluate(expression: string): number {
        const tokens = this.tokenize(expression) || []
        const postfixExpression = this.infixToPostfix(tokens)
        const stack: (number | string)[] = []

        postfixExpression.forEach((token) => {
            if (!this.isMathOperator(token)) {
                stack.push(parseFloat(token))
            } else {
                const operator = this.availableOperators[token]
                if (operator.type === OperatorType.BINARY) {
                    this.evaluateBinaryOperator(stack, operator.calculate)
                } else if (operator.type === OperatorType.UNARY) {
                    this.evaluateUnaryOperator(stack, operator.calculate)
                }
            }
        })

        const result = stack.pop() as number

        if (!result && result !== 0) {
            throw new Error(`Invalid math expression`)
        }

        return result
    }
}


export default CalculatorModel