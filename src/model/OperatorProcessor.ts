import { operationsType } from "../config/operations"
import { MathOperators } from "../config/constants"
import { SpecialOperators } from "../config/constants"

export interface IOperatorProcessor {
    process(expressionOperators: string[], output: string[], token: MathOperators | SpecialOperators): void
}

export class OperatorProcessor implements IOperatorProcessor {
    constructor(private availableOperators: operationsType) { }

    process(expressionOperators: string[], output: string[], token: MathOperators): void {
        const topOperator = expressionOperators[expressionOperators.length - 1] as MathOperators

        while (
            expressionOperators.length &&
            expressionOperators[expressionOperators.length - 1] !== SpecialOperators.LEFT_BRACKET &&
            this.availableOperators[topOperator].priority >= this.availableOperators[token].priority
        ) {
            output.push(expressionOperators.pop() as string)
        }

        expressionOperators.push(token)
    }
}
