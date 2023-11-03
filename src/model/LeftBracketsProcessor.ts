import { IOperatorProcessor } from "./OperatorProcessor";
import { MathOperators } from "../config/constants";

export class LeftBracketProcessor implements IOperatorProcessor {
    process(expressionOperators: string[], output: string[], token: MathOperators, stringOperators: string): void {
        expressionOperators.push(token)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        stringOperators = ''
    }
}

