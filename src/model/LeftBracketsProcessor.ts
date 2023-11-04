import { IOperatorProcessor } from "./OperatorProcessor";
import { MathOperators } from "../config/constants";

export class LeftBracketProcessor implements IOperatorProcessor {
    process(expressionOperators: string[], output: string[], token: MathOperators): void {
        expressionOperators.push(token)
    }
}

