import { IOperatorProcessor } from "./OperatorProcessor";
import { MathOperators } from "../config/constants";
import { SpecialOperators } from "../config/constants";

export class RightBracketProcessor implements IOperatorProcessor {
    process(expressionOperators: string[], output: string[], token: MathOperators, stringOperators: string): void {
        while (
            expressionOperators.length &&
            expressionOperators[expressionOperators.length - 1] !== SpecialOperators.LEFT_BRACKET
        ) {
            output.push(expressionOperators.pop() as string)
        }
        expressionOperators.pop()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        stringOperators = ''
    }
}