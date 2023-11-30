import { SpecialOperators, MathOperators } from "../../constants";
import { IOperatorProcessor } from "./Operator";

export class RightBracketProcessor implements IOperatorProcessor {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  process(
    expressionOperators: string[],
    output: string[],
    _token: MathOperators,
  ): void {
    while (
      expressionOperators.length &&
      expressionOperators[expressionOperators.length - 1] !==
        SpecialOperators.LEFT_BRACKET
    ) {
      output.push(expressionOperators.pop() as string);
    }
    expressionOperators.pop();
  }
}
