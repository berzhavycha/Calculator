import { OperatorType, MathOperators, SpecialOperators } from "../config/constants";
import { IOperations, TOKENIZE_REGEX_PATTERN } from "../config/operations";

class CalculatorModel {
    private availableOperators: IOperations;

    constructor(operators: IOperations) {
        this.availableOperators = operators
    }

    private isOperator(token: string): boolean {
        return token in this.availableOperators
    }

    private infixToPostfix(expression: string[]): string[] {
        const output: string[] = []
        const expressionOperators: string[] = []

        expression.forEach((token) => {
            if (!isNaN(parseFloat(token))) {
                output.push(token)
            } else if (this.isOperator(token)) {
                const topOperator = expressionOperators[expressionOperators.length - 1] as MathOperators

                while (
                    expressionOperators.length &&
                    expressionOperators[expressionOperators.length - 1] !== SpecialOperators.LEFT_BRACKET &&
                    this.availableOperators[topOperator].priority >= this.availableOperators[token as MathOperators].priority
                ) {
                    output.push(expressionOperators.pop() as string)
                }

                expressionOperators.push(token)
            } else if (token === SpecialOperators.LEFT_BRACKET) {
                expressionOperators.push(token)
            } else if (token === SpecialOperators.RIGHT_BRACKET) {
                while (expressionOperators.length && expressionOperators[expressionOperators.length - 1] !== SpecialOperators.LEFT_BRACKET) {
                    output.push(expressionOperators.pop() as string)
                }
                expressionOperators.pop()
            }
        })

        while (expressionOperators.length) {
            output.push(expressionOperators.pop() as string)
        }

        return output
    }

    private tokenize(expression: string): string[] {
        const pattern = TOKENIZE_REGEX_PATTERN;
        const tokens = expression.match(pattern);

        if (!tokens) {
            const invalidSymbols = expression.split('').filter(symbol => !pattern.test(symbol)).join('');
            throw new Error(`Invalid symbol(s): - ${invalidSymbols}`);
        }

        return tokens;
    }

    public evaluate(expression: string): number {
        const tokens = this.tokenize(expression) || []
        const postfixExpression = this.infixToPostfix(tokens)
        const stack: (number | string)[] = []

        postfixExpression.forEach(token => {
            if (!this.isOperator(token)) {
                stack.push(parseFloat(token))
            } else {
                const operator = this.availableOperators[token as MathOperators];
                if (operator.type === OperatorType.BINARY) {
                    const a = stack.pop() as number
                    const b = stack.pop() as number

                    stack.push(operator.calculate(b, a));
                } else if (operator.type === OperatorType.UNARY) {
                    const a = stack.pop() as number
                    stack.push(operator.calculate(a))
                }
            }
        });

        const result = stack.pop() as number

        if (!result && result !== 0) {
            throw new Error(`Invalid math expression`);
        }

        return result
    }

}

export default CalculatorModel