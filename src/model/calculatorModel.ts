import { Observable } from "../Observer/Subject";
import { OperatorRegistry, BinaryOperator, UnaryOperator, IOperatorsObject } from "./operators";

export class CalculatorModel extends Observable {
    private _result: number = 0;
    private operatorRegister: OperatorRegistry = new OperatorRegistry()
    private availableOperators: IOperatorsObject = {}

    constructor() {
        super()
        this.operatorRegister.registerOperator('+', new BinaryOperator('+', 1))
        this.operatorRegister.registerOperator('-', new BinaryOperator('-', 1))
        this.operatorRegister.registerOperator('*', new BinaryOperator('*', 2))
        this.operatorRegister.registerOperator('/', new BinaryOperator('/', 2))

        this.availableOperators = this.operatorRegister.getOperators()
    }

    private isOperator(token: string) {
        return token in this.operatorRegister.getOperators()
    }

    private infixToPostfix(expression: string[]): string[] {
        const output: string[] = []
        const expressionOperators: string[] = []

        expression.forEach(token => {
            if (!isNaN(parseFloat(token))) {
                output.push(token);
            } else if (this.isOperator(token)) {
                const topOperator = expressionOperators[expressionOperators.length - 1]

                while (
                    expressionOperators.length &&
                    expressionOperators[expressionOperators.length - 1] !== '(' &&
                    this.availableOperators[topOperator]?.priority >= this.availableOperators[token]?.priority
                ) {
                    output.push(expressionOperators.pop() as string)
                }

                expressionOperators.push(token)
            } else if (token === '(') {
                expressionOperators.push(token)
            } else if (token === ')') {
                while (expressionOperators.length && expressionOperators[expressionOperators.length - 1] !== '(') {
                    output.push(expressionOperators.pop() as string)
                }
                expressionOperators.pop();
            }
        });
        while (expressionOperators.length) {
            output.push(expressionOperators.pop() as string)
        }
        return output
    }

    private tokenize(expression: string): string[] {
        const tokens: string[] = []
        let numBuffer = ''
        let decimalBuffer = ''

        expression.split('').forEach(char => {
            if (char === ' ') {
                if (numBuffer !== '') {
                    tokens.push(parseFloat(numBuffer + decimalBuffer).toString())
                    numBuffer = ''
                    decimalBuffer = ''
                }
            } else if (this.isOperator(char) || char === '(' || char === ')') {
                if (numBuffer !== '') {
                    tokens.push(parseFloat(numBuffer + decimalBuffer).toString())
                    numBuffer = ''
                    decimalBuffer = ''
                }
                tokens.push(char)
            } else if (char >= '0' && char <= '9') {
                if (decimalBuffer === '') {
                    numBuffer += char
                } else {
                    decimalBuffer += char
                }
            } else if (char === '.') {
                if (decimalBuffer === '') {
                    decimalBuffer = '.'
                } else {
                    throw new Error(`Invalid character: ${char}`)
                }
            } else {
                throw new Error(`Invalid character: ${char}`)
            }
        })

        if (numBuffer !== '' || decimalBuffer !== '') {
            tokens.push(parseFloat(numBuffer + decimalBuffer).toString())
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
                if (operator instanceof BinaryOperator) {
                    const a = stack.pop() as number
                    const b = stack.pop() as number

                    stack.push(operator.calculate(b, a));
                } else if (operator instanceof UnaryOperator) {
                    const a = stack.pop() as number
                    stack.push(operator.calculate(a))
                }
            }
        });

        this._result = stack.pop() as number
        this.updateState({ result: this._result, error: null })
    }

}