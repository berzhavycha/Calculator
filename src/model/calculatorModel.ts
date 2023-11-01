import { OperatorType, Operators, TOKENIZE_REGEX_PATTERN } from "../config/constants";
import { IOperations } from "../config/operations";
import { operations } from "../config/operations";

class CalculatorModel {
    private availableOperators: IOperations = {}

    constructor(operators: IOperations) {
        this.availableOperators = operators
    }

    private isOperator(token: string) {
        return token in this.availableOperators
    }

    private infixToPostfix(expression: string[]): string[] {
        const output: string[] = []
        const expressionOperators: string[] = []

        expression.forEach(token => {
            if (!isNaN(parseFloat(token))) {
                output.push(token)
            } else if (this.isOperator(token)) {
                const topOperator = expressionOperators[expressionOperators.length - 1]

                while (
                    expressionOperators.length &&
                    expressionOperators[expressionOperators.length - 1] !== Operators.LEFT_BRACKET &&
                    this.availableOperators[topOperator].priority >= this.availableOperators[token].priority
                ) {
                    output.push(expressionOperators.pop() as string)
                }

                expressionOperators.push(token)
            } else if (token === Operators.LEFT_BRACKET) {
                expressionOperators.push(token)
            } else if (token === Operators.RIGHT_BRACKET) {
                while (expressionOperators.length && expressionOperators[expressionOperators.length - 1] !== Operators.LEFT_BRACKET) {
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
        const pattern = TOKENIZE_REGEX_PATTERN
        const tokens: string[] = []
        let match

        while ((match = pattern.exec(expression)) !== null) {
            const operator = match[1]
            const number = match[2]
            const invalidToken = match[3]

            if (invalidToken) {
                throw new Error(`Invalid token: ${invalidToken}`)
            }

            if (operator) {
                if (this.isOperator(operator) || operator === Operators.LEFT_BRACKET || operator === Operators.RIGHT_BRACKET) {
                    tokens.push(operator);
                } else if (operator === Operators.COS || operator === Operators.SIN || operator === Operators.TAN) {
                    tokens.push(operator);
                } else {
                    throw new Error(`Invalid operator: ${operator}`)
                }
            } else if (number) {
                tokens.push(number)
            }
        }

        return tokens
    }


    public evaluate(expression: string) {
        const tokens = this.tokenize(expression) || []
        const postfixExpression = this.infixToPostfix(tokens)
        const stack: (number | string)[] = []

        postfixExpression.forEach(token => {
            if (!this.isOperator(token)) {
                stack.push(parseFloat(token))
            } else {
                const operator = this.availableOperators[token];
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

        return stack.pop() as number
    }

}

export default new CalculatorModel(operations)