import { ICalculatorModelService } from "../../model/CalculatorModel"
import { OperationsType } from "../../config/operations"
import { Errors, MathOperators, SpecialOperators } from "../constants"
import { isMathOperator, reduceAllSpaces, escapeRegExp } from "../../utils/utils"
import { TOKENIZE_REGEX_PATTERN } from "../../regex/tokenizeRegex"

export class RegexCalculation implements ICalculatorModelService {
    private availableOperators: OperationsType

    constructor(operations: OperationsType) {
        this.availableOperators = operations
    }

    private findhighestPriorityOperator(operatorRegex: RegExp, expression: string): MathOperators | null {
        let highestPriorityOperator: MathOperators | null = null;
        let highestPriority = -1;
        let match: RegExpMatchArray | null;

        while ((match = operatorRegex.exec(expression)) !== null) {
            const operator = match[0];
            if (isMathOperator(operator)) {
                const currentPriority = this.availableOperators[operator].priority;

                if (currentPriority > highestPriority) {
                    highestPriority = currentPriority;
                    highestPriorityOperator = operator;
                }
            }
        }

        return highestPriorityOperator;
    }



    private calculate(tokens: string[]): number {
        const expression = tokens.join('')
        const operatorRegex = new RegExp(Object.keys(this.availableOperators).map(escapeRegExp).join('|'), 'g')
        let highestPriorityOperator = this.findhighestPriorityOperator(operatorRegex, expression)

        if (highestPriorityOperator === MathOperators.MINUS && expression[0] === MathOperators.MINUS) {
            highestPriorityOperator = this.findhighestPriorityOperator(operatorRegex, expression.slice(1))
        }

        if (highestPriorityOperator === null) {
            if (tokens.length === 1) {
                return parseFloat(tokens[0]);
            } else {
                throw new Error(Errors.INVALID_EXPRESSION);
            }
        }

        const { subExpressionResult, subExpressionRegex } = this.availableOperators[highestPriorityOperator].processorConstructor.process(expression, highestPriorityOperator)

        const updatedExpression = expression.replace(subExpressionRegex, subExpressionResult.toString())
        const updatedTokens = updatedExpression.match(TOKENIZE_REGEX_PATTERN)

        if (!updatedTokens) {
            throw new Error(Errors.INVALID_EXPRESSION)
        }

        if (updatedTokens[0] === MathOperators.MINUS) {
            updatedTokens.splice(0, 2, updatedTokens[0] + updatedTokens[1])
        }

        return this.calculate(updatedTokens)
    }

    evaluateExpression(tokens: string[]): number {
        while (tokens.includes(SpecialOperators.LEFT_BRACKET)) {
            const openParenIndex = tokens.lastIndexOf(SpecialOperators.LEFT_BRACKET);
            const closeParenIndex = tokens.indexOf(SpecialOperators.RIGHT_BRACKET, openParenIndex);

            if (openParenIndex === -1 || closeParenIndex === -1) {
                throw new Error(Errors.UNMATCHED_PARENTHESES);
            }

            const subExpression = tokens.slice(openParenIndex + 1, closeParenIndex);
            const subResult = this.calculate([...subExpression]);
            tokens.splice(openParenIndex, closeParenIndex - openParenIndex + 1, subResult.toString());
        }

        tokens = [this.calculate([...tokens]).toString()];

        if (tokens.length !== 1) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }

        return parseFloat(tokens[0]);
    }

    public evaluate(expression: string): number {
        const tokens = expression.match(TOKENIZE_REGEX_PATTERN);
        const expressionWithoutSpaces = reduceAllSpaces(expression);

        if (!tokens || tokens.join('') !== expressionWithoutSpaces) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }

        return this.evaluateExpression(tokens);
    }
}

