import { ICalculatorModelService } from "../../model/CalculatorModel";
import { TOKENIZE_REGEX_PATTERN, OperationsType } from "../../config/operations";
import { Errors, SpecialOperators } from "../../config/constants";
import { isMathOperator, reduceAllSpaces } from "../../utils/utils";

export class RegexCalculation implements ICalculatorModelService {
    private availableOperators: OperationsType

    constructor(operations: OperationsType) {
        this.availableOperators = operations
    }

    private findOperatorIndex(tokens: string[]): number {
        let index = -1;
        let maxPrecedence = -1;

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (isMathOperator(token)) {
                const currentPrecedence = this.availableOperators[token].priority;
                if (currentPrecedence > maxPrecedence) {
                    maxPrecedence = currentPrecedence;
                    index = i;
                }
            }
        }

        return index;
    }

    private calculateBinary(tokens: string[]): number {
        const operatorIndex = this.findOperatorIndex(tokens);

        if (operatorIndex === -1) {
            if (tokens.length === 1) {
                return parseFloat(tokens[0]);
            } else {
                throw new Error(Errors.INVALID_EXPRESSION);
            }
        }

        const operator = tokens[operatorIndex]
        if (isMathOperator(operator)) {
            const operatorProcessor = this.availableOperators[operator].processorContructor
            operatorProcessor.process(tokens, operatorIndex)
        }

        return this.calculateBinary(tokens);
    }

    evaluateExpression(tokens: string[]): number {
        while (tokens.includes(SpecialOperators.LEFT_BRACKET)) {
            const openParenIndex = tokens.lastIndexOf(SpecialOperators.LEFT_BRACKET);
            const closeParenIndex = tokens.indexOf(SpecialOperators.RIGHT_BRACKET, openParenIndex);

            if (openParenIndex === -1 || closeParenIndex === -1) {
                throw new Error(Errors.UNMATCHED_PARENTHESES);
            }

            const subExpression = tokens.slice(openParenIndex + 1, closeParenIndex);
            const subResult = this.calculateBinary([...subExpression]);
            tokens.splice(openParenIndex, closeParenIndex - openParenIndex + 1, subResult.toString());
        }

        tokens = [this.calculateBinary([...tokens]).toString()];

        console.log(tokens)
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

