import { MathOperators } from "../../constants";
import { IOperatorProcessor } from "./Operator";

export class LeftBracketProcessor implements IOperatorProcessor {
  process(
    expressionOperators: string[],
    _output: string[],
    token: MathOperators,
  ): void {
    expressionOperators.push(token);
  }
}
